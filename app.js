let mainMap = null;
let currentHero = "theseus";

// 1. 지도 초기화
function initMainMap() {
  if (!mainMap) {
    mainMap = L.map('mainMap').setView([39.0, 19.0], 5);
    L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=ko&x={x}&y={y}&z={z}', {
      maxZoom: 18, attribution: '© Google Maps'
    }).addTo(mainMap);

    allMapEvents.forEach(evt => {
      const icon = L.divIcon({
        className: `custom-pin ${evt.pinClass}`,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });

      const marker = L.marker([evt.lat, evt.lng], { icon: icon }).addTo(mainMap);
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

  // 화면 크기 계산 강제 갱신
  setTimeout(() => {
    if (mainMap) mainMap.invalidateSize();
  }, 100);
}

// 2. 메인 네비게이션
const mapSection = document.getElementById("mapSection");
const heroDetailSection = document.getElementById("heroDetailSection");
const homeMapBtn = document.getElementById("homeMapBtn");
const heroSelect = document.getElementById("heroSelect");

// 홈(전체 지도) 버튼 클릭 시
homeMapBtn.addEventListener("click", () => {
  showMapView();
});

function showMapView() {
  homeMapBtn.classList.add("active");
  heroSelect.value = "";
  mapSection.classList.add("active");
  heroDetailSection.classList.remove("active");
  document.getElementById("appTitle").innerText = "🏛️ 플루타르코스 세계 지도";
  initMainMap();
}

heroSelect.addEventListener("change", (e) => {
  openHeroView(e.target.value);
});

// 영웅 상세 페이지 열기
window.openHeroView = function(heroKey) {
  currentHero = heroKey;
  homeMapBtn.classList.remove("active");
  heroSelect.value = heroKey;

  mapSection.classList.remove("active");
  heroDetailSection.classList.add("active");

  const heroData = heroDetails[heroKey];
  document.getElementById("appTitle").innerText = `🏛️ ${heroData.name}`;

  switchHeroTab("overview");
};

// 3. 서브 탭 전환
document.querySelectorAll(".hero-sub-nav .tab-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    switchHeroTab(e.target.dataset.tab);
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

// 4. 렌더링 함수들
function renderOverview() {
  const h = heroDetails[currentHero];
  document.getElementById("overviewBox").innerHTML = `
    <div class="card"><h3>🏛️ 출생과 기원</h3><p>${h.overview.birth}</p></div>
    <div class="card"><h3>⚔️ 핵심 업적</h3><p>${h.overview.feat}</p></div>
    <div class="card"><h3>👤 성격과 기질</h3><p>${h.overview.character}</p></div>
    <div class="card"><h3>📖 플루타르코스의 총평</h3><p>${h.overview.verdict}</p></div>
  `;
}

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

function renderNetwork() {
  const h = heroDetails[currentHero];
  const svg = d3.select("#networkSvg");
  svg.selectAll("*").remove();

  const wrap = document.getElementById("tabNetwork");
  const width = wrap.clientWidth || 360;
  const height = wrap.clientHeight || 450;

  const g = svg.append("g");
  svg.call(d3.zoom().scaleExtent([0.5, 2.5]).on("zoom", (e) => g.attr("transform", e.transform)));

  const nodes = JSON.parse(JSON.stringify(h.graph.nodes));
  const links = JSON.parse(JSON.stringify(h.graph.links));

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(90))
    .force("charge", d3.forceManyBody().strength(-250))
    .force("center", d3.forceCenter(width / 2, (height / 2) - 30));

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

// 5. 토론장 CRUD
function renderDebates() {
  const h = heroDetails[currentHero];
  document.getElementById("debateFormTitle").innerText = `💬 ${h.name}에게 묻고 답하기`;

  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const listContainer = document.getElementById("debateList");

  if (posts.length === 0) {
    listContainer.innerHTML = `<div class="no-posts">아직 등록된 질문이 없습니다.<br>첫 번째 질문을 남겨보세요!</div>`;
    return;
  }

  let html = "";
  posts.forEach(post => {
    let repliesHtml = "";
    if (post.replies && post.replies.length > 0) {
      post.replies.forEach(r => {
        repliesHtml += `
          <div class="reply-item">
            <div>
              <span class="reply-author">${r.author}:</span>
              <span>${r.text}</span>
            </div>
            <div>
              <button class="action-btn" onclick="editDebateReply(${post.id}, ${r.id})">수정</button>
              <button class="action-btn del" onclick="deleteDebateReply(${post.id}, ${r.id})">삭제</button>
            </div>
          </div>
        `;
      });
    }

    html += `
      <div class="debate-post">
        <div class="post-header">
          <div>
            <span class="post-author">👤 ${post.author}</span>
            <span class="post-date" style="margin-left: 6px;">${post.date}</span>
          </div>
          <div>
            <button class="action-btn" onclick="editDebatePost(${post.id})">수정</button>
            <button class="action-btn del" onclick="deleteDebatePost(${post.id})">삭제</button>
          </div>
        </div>
        <div class="post-content">${post.content}</div>
        <div class="reply-section">
          <div class="reply-list">${repliesHtml}</div>
          <div class="reply-input-row">
            <input type="text" class="reply-nick" id="replyNick-${post.id}" placeholder="닉네임" maxlength="8">
            <input type="password" class="reply-nick reply-pwd" id="replyPwd-${post.id}" placeholder="비번" maxlength="8">
            <input type="text" class="reply-text" id="replyText-${post.id}" placeholder="답변 남기기...">
            <button class="reply-btn" onclick="addDebateReply(${post.id})">답변</button>
          </div>
        </div>
      </div>
    `;
  });

  listContainer.innerHTML = html;
}

window.addDebatePost = function() {
  const authorInput = document.getElementById("debateAuthor");
  const pwdInput = document.getElementById("debatePassword");
  const contentInput = document.getElementById("debateQuestion");

  const author = authorInput.value.trim() || "익명";
  const password = pwdInput.value.trim();
  const content = contentInput.value.trim();

  if (!content) return alert("질문 내용을 작성해 주세요.");
  if (!password) return alert("수정/삭제용 비밀번호를 입력해 주세요.");

  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const now = new Date();
  const dateStr = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

  posts.unshift({ id: Date.now(), author, password, content, date: dateStr, replies: [] });
  localStorage.setItem(storageKey, JSON.stringify(posts));

  contentInput.value = "";
  pwdInput.value = "";
  renderDebates();
};

window.deleteDebatePost = function(postId) {
  const storageKey = `debate_posts_${currentHero}`;
  let posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const target = posts.find(p => p.id === postId);
  if (!target) return;

  if (target.password) {
    const inputPwd = prompt("글 등록 시 설정한 비밀번호를 입력하세요:");
    if (inputPwd === null) return;
    if (inputPwd !== target.password) return alert("비밀번호가 일치하지 않습니다!");
  }

  if (confirm("정말 이 질문을 삭제하시겠습니까?")) {
    posts = posts.filter(p => p.id !== postId);
    localStorage.setItem(storageKey, JSON.stringify(posts));
    renderDebates();
  }
};

window.editDebatePost = function(postId) {
  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const target = posts.find(p => p.id === postId);
  if (!target) return;

  const inputPwd = prompt("비밀번호를 입력하세요:");
  if (inputPwd === null) return;
  if (inputPwd !== target.password) return alert("비밀번호가 일치하지 않습니다!");

  const newContent = prompt("수정할 내용을 입력하세요:", target.content);
  if (newContent && newContent.trim()) {
    target.content = newContent.trim();
    localStorage.setItem(storageKey, JSON.stringify(posts));
    renderDebates();
  }
};

window.addDebateReply = function(postId) {
  const nick = document.getElementById(`replyNick-${postId}`).value.trim() || "익명";
  const pwd = document.getElementById(`replyPwd-${postId}`).value.trim();
  const text = document.getElementById(`replyText-${postId}`).value.trim();

  if (!text) return alert("답변 내용을 입력하세요.");
  if (!pwd) return alert("답변 수정/삭제용 비밀번호를 입력하세요.");

  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const target = posts.find(p => p.id === postId);

  if (target) {
    if (!target.replies) target.replies = [];
    target.replies.push({ id: Date.now(), author: nick, password: pwd, text });
    localStorage.setItem(storageKey, JSON.stringify(posts));
    renderDebates();
  }
};

window.deleteDebateReply = function(postId, replyId) {
  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const target = posts.find(p => p.id === postId);
  if (!target) return;

  const r = target.replies.find(item => item.id === replyId);
  if (!r) return;

  if (r.password) {
    const inputPwd = prompt("답변 비밀번호를 입력하세요:");
    if (inputPwd === null) return;
    if (inputPwd !== r.password) return alert("비밀번호가 일치하지 않습니다!");
  }

  if (confirm("답변을 삭제하시겠습니까?")) {
    target.replies = target.replies.filter(item => item.id !== replyId);
    localStorage.setItem(storageKey, JSON.stringify(posts));
    renderDebates();
  }
};

window.editDebateReply = function(postId, replyId) {
  const storageKey = `debate_posts_${currentHero}`;
  const posts = JSON.parse(localStorage.getItem(storageKey)) || [];
  const target = posts.find(p => p.id === postId);
  if (!target) return;

  const r = target.replies.find(item => item.id === replyId);
  if (!r) return;

  const inputPwd = prompt("답변 비밀번호를 입력하세요:");
  if (inputPwd === null) return;
  if (inputPwd !== r.password) return alert("비밀번호가 일치하지 않습니다!");

  const newText = prompt("수정할 답변을 입력하세요:", r.text);
  if (newText && newText.trim()) {
    r.text = newText.trim();
    localStorage.setItem(storageKey, JSON.stringify(posts));
    renderDebates();
  }
};

// 최초 실행: 첫 화면으로 지도 열기
showMapView();
