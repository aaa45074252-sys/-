// 1. Supabase 클라이언트 연결 설정
const SUPABASE_URL = "https://xivchaifnztwjyldlphh.supabase.co";
// ▼ 아래 따옴표 안에 아까 복사한 'sb_publishable_...' 키를 붙여넣어 주세요!
const SUPABASE_KEY = "sb_publishable_L2H2WzL-L0mOTOwseU_MmQ_POXfn85y"; 
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let mainMap = null;
let currentHero = "theseus";

// 2. 지도 초기화
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

  setTimeout(() => {
    if (mainMap) mainMap.invalidateSize();
  }, 100);
}

// 3. 메인 네비게이션
const mapSection = document.getElementById("mapSection");
const heroDetailSection = document.getElementById("heroDetailSection");
const homeMapBtn = document.getElementById("homeMapBtn");
const heroSelect = document.getElementById("heroSelect");

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

// 4. 서브 탭 전환
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

// 5. 인물 정보 & 명언 & 관계망 렌더링
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

// 6. 온라인 클라우드 토론장 (서버와 통신하는 부분)
async function renderDebates() {
  const h = heroDetails[currentHero];
  document.getElementById("debateFormTitle").innerText = `💬 ${h.name}에게 묻고 답하기`;
  const listContainer = document.getElementById("debateList");
  listContainer.innerHTML = `<div class="no-posts">서버에서 글 목록을 불러오는 중...</div>`;

  try {
    const { data: posts, error: postErr } = await supabaseClient
      .from('debates')
      .select('*')
      .eq('hero', currentHero)
      .order('created_at', { ascending: false });

    if (postErr) throw postErr;

    if (!posts || posts.length === 0) {
      listContainer.innerHTML = `<div class="no-posts">아직 등록된 질문이 없습니다.<br>첫 번째 질문을 남겨보세요!</div>`;
      return;
    }

    const postIds = posts.map(p => p.id);
    const { data: replies, error: replyErr } = await supabaseClient
      .from('replies')
      .select('*')
      .in('debate_id', postIds)
      .order('created_at', { ascending: true });

    if (replyErr) throw replyErr;

    let html = "";
    posts.forEach(post => {
      const postReplies = (replies || []).filter(r => r.debate_id === post.id);
      
      let repliesHtml = "";
      postReplies.forEach(r => {
        repliesHtml += `
          <div class="reply-item">
            <div>
              <span class="reply-author">${r.author}:</span>
              <span>${r.text}</span>
            </div>
            <div>
              <button class="action-btn del" onclick="deleteDebateReply(${r.id}, '${r.password}')">삭제</button>
            </div>
          </div>
        `;
      });

      const dateObj = new Date(post.created_at);
      const dateStr = `${dateObj.getMonth() + 1}/${dateObj.getDate()} ${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;

      html += `
        <div class="debate-post">
          <div class="post-header">
            <div>
              <span class="post-author">👤 ${post.author}</span>
              <span class="post-date" style="margin-left: 6px;">${dateStr}</span>
            </div>
            <div>
              <button class="action-btn del" onclick="deleteDebatePost(${post.id}, '${post.password}')">삭제</button>
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
  } catch (err) {
    console.error(err);
    listContainer.innerHTML = `<div class="no-posts">데이터를 불러오는 중 오류가 발생했습니다. (SQL 테이블 생성 여부를 확인해 주세요)</div>`;
  }
}

// 질문 등록
window.addDebatePost = async function() {
  const authorInput = document.getElementById("debateAuthor");
  const pwdInput = document.getElementById("debatePassword");
  const contentInput = document.getElementById("debateQuestion");

  const author = authorInput.value.trim() || "익명";
  const password = pwdInput.value.trim();
  const content = contentInput.value.trim();

  if (!content) return alert("질문 내용을 작성해 주세요.");
  if (!password) return alert("수정/삭제용 비밀번호를 입력해 주세요.");

  const { error } = await supabaseClient.from('debates').insert([{
    hero: currentHero,
    author: author,
    password: password,
    content: content
  }]);

  if (error) {
    alert("등록 실패: " + error.message);
    return;
  }

  contentInput.value = "";
  pwdInput.value = "";
  renderDebates();
};

// 질문 삭제
window.deleteDebatePost = async function(postId, originPwd) {
  const inputPwd = prompt("글 등록 시 설정한 비밀번호를 입력하세요:");
  if (inputPwd === null) return;
  if (inputPwd !== originPwd) return alert("비밀번호가 일치하지 않습니다!");

  if (confirm("정말 이 질문을 삭제하시겠습니까?")) {
    const { error } = await supabaseClient.from('debates').delete().eq('id', postId);
    if (error) alert("삭제 실패: " + error.message);
    else renderDebates();
  }
};

// 답변 등록
window.addDebateReply = async function(postId) {
  const nick = document.getElementById(`replyNick-${postId}`).value.trim() || "익명";
  const pwd = document.getElementById(`replyPwd-${postId}`).value.trim();
  const text = document.getElementById(`replyText-${postId}`).value.trim();

  if (!text) return alert("답변 내용을 입력하세요.");
  if (!pwd) return alert("답변 삭제용 비밀번호를 입력하세요.");

  const { error } = await supabaseClient.from('replies').insert([{
    debate_id: postId,
    author: nick,
    password: pwd,
    text: text
  }]);

  if (error) {
    alert("답변 등록 실패: " + error.message);
    return;
  }

  renderDebates();
};

// 답변 삭제
window.deleteDebateReply = async function(replyId, originPwd) {
  const inputPwd = prompt("답변 비밀번호를 입력하세요:");
  if (inputPwd === null) return;
  if (inputPwd !== originPwd) return alert("비밀번호가 일치하지 않습니다!");

  if (confirm("답변을 삭제하시겠습니까?")) {
    const { error } = await supabaseClient.from('replies').delete().eq('id', replyId);
    if (error) alert("삭제 실패: " + error.message);
    else renderDebates();
  }
};

// 첫 화면 실행
showMapView();
