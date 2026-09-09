// 1. Supabase 클라이언트 연결 설정
const SUPABASE_URL = "https://xivchaifnztwjyldlphh.supabase.co";
const SUPABASE_KEY = "sb_publishable_L2H2WzL-L0mOTOwseU_MmQ_POXfn85y"; 
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let mainMap = null;
let currentHero = "theseus";

// 2. 지도 초기화 (차단 없는 안정적인 타일 레이어 적용)
function initMainMap() {
  const mapEl = document.getElementById('mainMap');
  if (!mapEl) return;

  if (!mainMap) {
    mainMap = L.map('mainMap', {
      zoomControl: true,
      fadeAnimation: true
    }).setView([39.0, 18.0], 5);

    // API 키나 워터마크가 전혀 없는 오픈스트리트맵 표준 타일
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(mainMap);

    allMapEvents.forEach(evt => {
      const spriteHtml = HERO_SPRITES[evt.hero] || "";
      const icon = L.divIcon({
        className: 'pixel-pin-container',
        html: `<div class="pixel-pin-body">${spriteHtml}</div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 36]
      });

      const marker = L.marker([evt.lat, evt.lng], { icon: icon }).addTo(mainMap);
      const popupContent = `
        <div class="popup-inner">
          <h4 style="margin:0 0 6px 0; color:#e5be75; font-size:14px;">[${evt.heroName}] ${evt.title}</h4>
          <p style="margin:0 0 10px 0; font-size:12px; line-height:1.4; color:#ddd;">${evt.desc}</p>
          <button class="popup-btn" style="width:100%; padding:6px 0; background:#b45309; color:#fff; border:none; border-radius:4px; font-size:12px; cursor:pointer;" onclick="openHeroView('${evt.hero}')">
            👤 ${evt.heroName} 상세 보기 &gt;
          </button>
        </div>
      `;
      marker.bindPopup(popupContent);
    });
  }

  setTimeout(() => {
    if (mainMap) mainMap.invalidateSize();
  }, 200);
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
    requestAnimationFrame(() => {
      setTimeout(renderNetwork, 50);
    });
  } else if (tabName === "quotes") {
    document.getElementById("tabQuotes").classList.add("active");
    renderQuotes();
  } else if (tabName === "gallery") {
    document.getElementById("tabGallery").classList.add("active");
    renderGallery();
  } else if (tabName === "debate") {
    document.getElementById("tabDebate").classList.add("active");
    renderDebates();
  }
}

// 5. 인물 정보 & 명언 & 관계망 렌더링
function renderOverview() {
  const h = heroDetails[currentHero];
  const spriteHtml = HERO_SPRITES[currentHero] || "";

  // ★ 쉼표 누락 오류를 수정한 6인 칭호 매핑
  const heroMeta = {
    theseus: {
      role: "아테네의 통합자이자 건국 영웅",
      tagline: "“청동 몽둥이로 불의를 꺾고 크레타의 미궁을 돌파한 자”"
    },
    romulus: {
      role: "영원한 제국 로마의 초대 국왕",
      tagline: "“늑대의 젖을 먹고 자라 팔라티노 언덕에 성벽을 쌓은 자”"
    },
    lycurgus: {
      role: "스파르타 철혈 규율의 입법자",
      tagline: "“성벽 대신 시민의 용기를 방패로 삼은 무적의 입법관”"
    },
    numa: {
      role: "로마의 성스러운 2대 평화왕",
      tagline: "“무기 대신 신앙과 예법으로 야만의 도시를 길들인 현자”"
    },
    solon: {
      role: "아테네 민주정의 기틀을 닦은 대현자",
      tagline: "“채무의 멍에를 부수고 법률의 균형으로 시민을 지킨 입법관”"
    },
    publicola: {
      role: "로마 공화정을 수호한 시민의 벗",
      tagline: "“도끼를 내리고 시민 앞에 머리 숙여 자유를 지켜낸 집정관”"
    }
  };

  const meta = heroMeta[currentHero] || {
    role: "플루타르코스가 주목한 위대한 영웅",
    tagline: "“역사의 흐름을 바꾼 고대의 거인”"
  };

  document.getElementById("overviewBox").innerHTML = `
    <div class="hero-pixel-status">
      <div class="pixel-avatar-box">${spriteHtml}</div>
      <div class="pixel-status-info">
        <span class="pixel-title-badge">${meta.role}</span>
        <h2>${h.name}</h2>
        <p>${meta.tagline}</p>
      </div>
    </div>
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
  const rect = wrap.getBoundingClientRect();
  const width = rect.width > 50 ? rect.width : window.innerWidth;
  const height = rect.height > 50 ? rect.height : (window.innerHeight - 95);

  svg
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", `${width}px`)
    .style("height", `${height}px`);

  const g = svg.append("g");
  svg.call(d3.zoom().scaleExtent([0.5, 2.5]).on("zoom", (e) => g.attr("transform", e.transform)));

  const nodes = JSON.parse(JSON.stringify(h.graph.nodes));
  const links = JSON.parse(JSON.stringify(h.graph.links));

  const centerX = width / 2;
  const centerY = height / 2;

  nodes.forEach(d => {
    if (d.id === currentHero) {
      d.x = centerX;
      d.y = centerY;
      d.fx = centerX;
      d.fy = centerY;
    }
  });

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(width < 480 ? 85 : 120))
    .force("charge", d3.forceManyBody().strength(width < 480 ? -250 : -350))
    .force("center", d3.forceCenter(centerX, centerY));

  const link = g.append("g").selectAll("line").data(links).enter().append("line")
    .attr("stroke", "#665243").attr("stroke-width", 2);

  const linkText = g.append("g").selectAll("text").data(links).enter().append("text")
    .attr("text-anchor", "middle").attr("fill", "#c5b59f").attr("font-size", "10px").attr("dy", -4)
    .text(d => d.label);

  const node = g.append("g").selectAll("g").data(nodes).enter().append("g")
    .call(d3.drag()
      .on("start", (e, d) => { 
        if (!e.active) simulation.alphaTarget(0.3).restart(); 
        d.fx = d.x; 
        d.fy = d.y; 
      })
      .on("drag", (e, d) => { 
        d.fx = e.x; 
        d.fy = e.y; 
      })
      .on("end", (e, d) => { 
        if (!e.active) simulation.alphaTarget(0); 
        if (d.id !== currentHero) {
          d.fx = null; 
          d.fy = null; 
        }
      }));

  function getHeroDataUri(heroKey) {
    let rawSvg = HERO_SPRITES[heroKey] || "";
    if (!rawSvg.includes("xmlns=")) {
      rawSvg = rawSvg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(rawSvg);
  }

  node.each(function(d) {
    const el = d3.select(this);
    if (d.id === currentHero) {
      const uri = getHeroDataUri(currentHero);
      el.append("image")
        .attr("href", uri)
        .attr("xlink:href", uri)
        .attr("x", -24)
        .attr("y", -24)
        .attr("width", 48)
        .attr("height", 48)
        .style("filter", "drop-shadow(0 0 6px #e5be75)");
    } else {
      el.append("circle")
        .attr("r", d.r)
        .attr("fill", d.color)
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);
    }
  });

  node.append("text")
    .attr("dy", d => d.id === currentHero ? 32 : d.r + 14)
    .attr("text-anchor", "middle")
    .attr("fill", "#eee")
    .attr("font-size", "11px")
    .attr("font-weight", d => d.id === currentHero ? "bold" : "normal")
    .text(d => d.name);

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

// 6. 온라인 클라우드 토론장
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

// 7. 명화 갤러리 렌더링
function renderGallery() {
  const container = document.getElementById("gallery-container");
  if (!container) return;

  const items = (typeof heroGalleries !== "undefined" && heroGalleries[currentHero]) ? heroGalleries[currentHero] : [];

  if (items.length === 0) {
    container.innerHTML = `<div style="color:#a89f91; text-align:center; grid-column:1/-1; padding:40px 0;">아직 등록된 명화 자료가 없습니다.</div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="art-card">
      <div class="art-img-wrap">
        <img src="${item.imgUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer">
      </div>
      <div class="art-info">
        <h4 class="art-title">${item.title}</h4>
        <p class="art-original-title">${item.originalTitle}</p>
        <ul class="art-meta">
          <li><strong>작가:</strong> ${item.artist}</li>
          <li><strong>연대/소장:</strong> ${item.year} | ${item.museum}</li>
          <li><strong>라이선스:</strong> <span class="license-badge">${item.license}</span></li>
        </ul>
        <p class="art-desc">${item.desc}</p>
        <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link">
          위키미디어 출처 보기 ↗
        </a>
      </div>
    </div>
  `).join('');
}

// 첫 화면 실행
showMapView();
