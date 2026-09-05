let mainMap = null;
let currentHero = "theseus";

// 1. 지도 초기화 (지중해 전체가 시원하게 보이도록 중심 배치)
function initMainMap() {
  if (mainMap) return;

  mainMap = L.map('mainMap').setView([39.0, 19.0], 5); // 그리스-이탈리아 중간

  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=ko&x={x}&y={y}&z={z}', {
    maxZoom: 18, attribution: '© Google Maps'
  }).addTo(mainMap);

  // 모든 영웅 사건 핀 꽂기
  allMapEvents.forEach(evt => {
    // 커스텀 원형 마커 생성
    const icon = L.divIcon({
      className: `custom-pin ${evt.pinClass}`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    const marker = L.marker([evt.lat, evt.lng], { icon: icon }).addTo(mainMap);
    
    // 팝업 내용 + '영웅 보러가기' 버튼
    const popupContent = `
      <div class="popup-inner">
        <h4>[${evt.heroName}] ${evt.title}</h4>
        <p>${evt.desc}</p>
        <button class="popup-btn" onclick="openHeroView('${evt.hero}')">
          👤 ${evt.heroName} 상세 보기 &gt;
        </button>
      </div>
    `;
    marker.bindPopup(popupContent);
  });
}

// 2. 화면 전환: 지도(홈) vs 영웅 상세
const mapSection = document.getElementById("mapSection");
const heroDetailSection = document.getElementById("heroDetailSection");
const homeMapBtn = document.getElementById("homeMapBtn");
const heroSelect = document.getElementById("heroSelect");

// 홈(지도) 버튼 클릭
homeMapBtn.addEventListener("click", () => {
  homeMapBtn.classList.add("active");
  heroSelect.value = "";
  mapSection.classList.add("active");
  heroDetailSection.classList.remove("active");
  document.getElementById("appTitle").innerText = "🏛️ 플루타르코스 세계 지도";
  if (mainMap) setTimeout(() => mainMap.invalidateSize(), 150);
});

// 우측 상단 영웅 셀렉트 박스 변경 시
heroSelect.addEventListener("change", (e) => {
  openHeroView(e.target.value);
});

// 영웅 상세 페이지 열기 함수 (지도 팝업 버튼 클릭 시에도 실행)
window.openHeroView = function(heroKey) {
  currentHero = heroKey;
  homeMapBtn.classList.remove("active");
  heroSelect.value = heroKey;

  mapSection.classList.remove("active");
  heroDetailSection.classList.add("active");

  const heroData = heroDetails[heroKey];
  document.getElementById("appTitle").innerText = `🏛️ ${heroData.name}`;

  // 첫 번째 탭(개요)으로 초기화
  switchHeroTab("overview");
};

// 3. 영웅 상세 화면 내 4개 서브 탭 전환
document.querySelectorAll(".hero-sub-nav .tab-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const tab = e.target.dataset.tab;
    switchHeroTab(tab);
  });
});

function switchHeroTab(tabName) {
  document.querySelectorAll(".hero-sub-nav .tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

  const targetBtn = document.querySelector(`.hero-sub-nav .tab-btn[data-tab="${tabName}"]`);
  if (targetBtn) targetBtn.classList.add("active");

  if (tabName === "overview") {
    document.getElementById("tabOverview").classList.add("active");
    renderOverview();
  } else if (tabName === "network") {
    document.getElementById("tabNetwork").classList.add("active");
    setTimeout(renderNetwork, 100);
  } else if (tabName === "quotes") {
    document.getElementById("tabQuotes").classList.add("active");
    renderQuotes();
  } else if (tabName === "debate") {
    document.getElementById("tabDebate").classList.add("active");
    renderDebates();
  }
}

// 탭 1: 개요 렌더링
function renderOverview() {
  const h = heroDetails[currentHero];
  document.getElementById("overviewBox").innerHTML = `
    <div class="card"><h3>🏛️ 출생과 기원</h3><p>${h.overview.birth}</p></div>
    <div class="card"><h3>⚔️ 핵심 업적</h3><p>${h.overview.feat}</p></div>
    <div class="card"><h3>👤 성격과 기질</h3><p>${h.overview.character}</p></div>
    <div class="card"><h3>📖 플루타르코스의 총평</h3><p>${h.overview.verdict}</p></div>
  `;
}

// 탭 2: 관계망 렌더링 (D3)
function renderNetwork() {
  const h = heroDetails[currentHero];
  const svg = d3.select("#networkSvg");
  svg.selectAll("*").remove();

  const width = document.getElementById("tabNetwork").clientWidth;
  const height = document.getElementById("tabNetwork").clientHeight || 450;

  const g = svg.append("g");
  svg.call(d3.zoom().scaleExtent([0.5, 2.5]).on("zoom", (e) => g.attr("transform", e.transform)));

  const nodes = JSON.parse(JSON.stringify(h.graph.nodes));
  const links = JSON.parse(JSON.stringify(h.graph.links));

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2));

  const link = g.append("g").selectAll("line").data(links).enter().append("line")
    .attr("stroke", "#665243").attr("stroke-width", 2);

  const linkText = g.append("g").selectAll("text").data(links).enter().append("text")
    .attr("text-anchor", "middle").attr("fill", "#c5b59f").attr("font-size", "10px").attr("dy", -4)
    .text(d => d.label);

  const node = g.append("g").selectAll("g").data(nodes).enter().append("g")
    .call(d3.drag()
      .on("start", (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
      .on("end", (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));

  node.append("circle").attr("r", d => d.r).attr("fill", d => d.color).attr("stroke", "#fff").attr("stroke-width", 2);
  node.append("text").attr("dy", d => d.r + 14).attr("text-anchor", "middle").attr("fill", "#eee").attr("font-size", "11px").text(d => d.name);

  node.on("click", (e, d) => {
    e.stopPropagation();
    const ins = document.getElementById("nodeInspector");
    document.getElementById("insType").innerText = d.type;
    document.getElementById("insName").innerText = d.name;
    document.getElementById("insDesc").innerText = d.desc;
    document.getElementById("insInsight").innerText = `💡 ${d.insight}`;
    ins.classList.remove("hidden");
  });

  svg.on("click", () => document.getElementById("nodeInspector").classList.add("hidden"));
  document.getElementById("closeInsBtn").onclick = () => document.getElementById("nodeInspector").classList.add("hidden");

  simulation.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    linkText.attr("x", d => (d.source.x + d.target.x) / 2).attr("y", d => (d.source.y + d.target.y) / 2);
    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });
}

// 탭 3: 중요 문장 렌더링
function renderQuotes() {
  const h = heroDetails[currentHero];
  let html = "";
  h.quotes.forEach(q => {
    html += `
      <div class="card">
        <h3>${q.text}</h3>
        <p style="color:#aaa;margin-top:6px;">📌 ${q.desc}</p>
      </div>
    `;
  });
  document.getElementById("quotesBox").innerHTML = html;
}

// 탭 4: 토론장 렌더링
// 토론 게시글 불러오기 및 렌더링
function renderDebates() {
  const h = heroDetails[currentHero];
  document.getElementById("debateFormTitle").innerText = `💬 ${h.name}에게 묻고 답하기`;

  // 영웅별로 독립된 토론 목록 저장소 키
  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const listContainer = document.getElementById("debateList");

  if (posts.length === 0) {
    listContainer.innerHTML = `<div class="no-posts">아직 등록된 질문이 없습니다.<br>첫 번째 질문을 남겨보세요!</div>`;
    return;
  }

  let html = "";
  posts.forEach(post => {
    // 답변 목록 렌더링
    let repliesHtml = "";
    if (post.replies && post.replies.length > 0) {
      post.replies.forEach(r => {
        repliesHtml += `
          <div class="reply-item">
            <span class="reply-author">${r.author}:</span>
            <span>${r.text}</span>
          </div>
        `;
      });
    }

    html += `
      <div class="debate-post">
        <div class="post-header">
          <span class="post-author">👤 ${post.author}</span>
          <span class="post-date">${post.date}</span>
        </div>
        <div class="post-content">${post.content}</div>

        <div class="reply-section">
          <div class="reply-list">${repliesHtml}</div>
          <div class="reply-input-row">
            <input type="text" class="reply-nick" id="replyNick-${post.id}" placeholder="닉네임" maxlength="10">
            <input type="text" class="reply-text" id="replyText-${post.id}" placeholder="답변 남기기...">
            <button class="reply-btn" onclick="addDebateReply(${post.id})">답변</button>
          </div>
        </div>
      </div>
    `;
  });

  listContainer.innerHTML = html;
}

// 새 질문 추가 함수
window.addDebatePost = function() {
  const authorInput = document.getElementById("debateAuthor");
  const contentInput = document.getElementById("debateQuestion");
  const author = authorInput.value.trim() || "익명";
  const content = contentInput.value.trim();

  if (!content) {
    alert("질문 내용을 작성해 주세요.");
    return;
  }

  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];

  const now = new Date();
  const dateStr = `${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newPost = {
    id: Date.now(),
    author: author,
    content: content,
    date: dateStr,
    replies: []
  };

  posts.unshift(newPost); // 최신 글이 위로 오도록 추가
  localStorage.setItem(storageKey, JSON.stringify(posts));

  contentInput.value = "";
  renderDebates();
};

// 답변(댓글) 추가 함수
window.addDebateReply = function(postId) {
  const nickInput = document.getElementById(`replyNick-${postId}`);
  const textInput = document.getElementById(`replyText-${postId}`);
  const author = nickInput.value.trim() || "익명";
  const text = textInput.value.trim();

  if (!text) {
    alert("답변 내용을 작성해 주세요.");
    return;
  }

  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const targetPost = posts.find(p => p.id === postId);

  if (targetPost) {
    if (!targetPost.replies) targetPost.replies = [];
    targetPost.replies.push({ author, text });
    localStorage.setItem(storageKey, JSON.stringify(posts));
    renderDebates();
  }
};
// 최초 실행: 지도 화면 시작
initMainMap();
