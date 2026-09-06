// --- Supabase 안전 설정 (키가 없거나 임시 주소여도 사이트 전체가 멈추지 않음) ---
let supabase = null;
try {
  // 실제 키가 있으시다면 따옴표 안에 넣어주세요. 지금은 비워두셔도 지도/퀘스트/관계망 정상 작동합니다.
  const SUPABASE_URL = ""; 
  const SUPABASE_ANON_KEY = "";
  if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (e) {
  console.warn("Supabase 연결 대기 중 (다른 기능은 정상 동작)");
}

// --- 전역 상태 ---
let currentHero = "theseus";
let currentTab = "map"; 
let mainMap = null;

// 천칭 퀘스트 상태
let questStats = { courage: 50, prudence: 50, justice: 50 };
let currentQuestStep = 0;

// --- 초기화 실행 ---
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  // 첫 화면(지도) 강제 실행
  initMainMap();
});

// 영웅 선택 및 탭 전환 이벤트 바인딩
function setupNavigation() {
  const heroSelect = document.getElementById("heroSelect");
  if (heroSelect) {
    heroSelect.addEventListener("change", (e) => {
      currentHero = e.target.value;
      renderCurrentView();
    });
  }

  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const targetTab = btn.getAttribute("data-tab");
      currentTab = targetTab;

      document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
      const targetPane = document.getElementById(`tab-${targetTab}`);
      if (targetPane) targetPane.classList.add("active");

      renderCurrentView();
    });
  });
}

// 탭 라우터
function renderCurrentView() {
  if (currentTab === "map") initMainMap();
  else if (currentTab === "overview") renderOverview();
  else if (currentTab === "network") renderNetwork();
  else if (currentTab === "quest") initQuest();
  else if (currentTab === "quotes") renderQuotes();
  else if (currentTab === "debate") loadDebates();
}

// 1. 지도 탭 (안정적인 OpenStreetMap 타일 및 도트 핀)
function initMainMap() {
  const mapContainer = document.getElementById('mainMap');
  if (!mapContainer) return;

  if (!mainMap) {
    // 지중해 중심 좌표
    mainMap = L.map('mainMap').setView([39.5, 18.5], 5);
    
    // 전 세계 공용으로 100% 열리는 타일 레이어
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(mainMap);

    // 테세우스 & 로물루스 도트 핀 꽂기
    if (typeof allMapEvents !== 'undefined') {
      allMapEvents.forEach(evt => {
        const spriteHtml = (typeof HERO_SPRITES !== 'undefined' && HERO_SPRITES[evt.hero]) ? HERO_SPRITES[evt.hero] : "";
        const icon = L.divIcon({
          className: 'pixel-pin-container',
          html: `<div class="pixel-pin-body">${spriteHtml}</div>`,
          iconSize: [38, 38],
          iconAnchor: [19, 36]
        });

        const marker = L.marker([evt.lat, evt.lng], { icon: icon }).addTo(mainMap);
        marker.bindPopup(`
          <div class="popup-inner">
            <h4>[${evt.heroName}] ${evt.title}</h4>
            <p>${evt.desc}</p>
            <button class="popup-btn" onclick="openHeroTab('${evt.hero}')">👤 ${evt.heroName} 상세 보기 &gt;</button>
          </div>
        `);
      });
    }
  }

  // 지도가 잘리지 않고 꽉 차게 리사이즈 보정
  setTimeout(() => {
    if (mainMap) mainMap.invalidateSize();
  }, 200);
}

function openHeroTab(heroKey) {
  currentHero = heroKey;
  const heroSelect = document.getElementById("heroSelect");
  if (heroSelect) heroSelect.value = heroKey;
  const overviewBtn = document.querySelector(`.tab-btn[data-tab="overview"]`);
  if (overviewBtn) overviewBtn.click();
}

// 2. 개요 탭 (도트 상태창)
function renderOverview() {
  if (typeof heroDetails === 'undefined') return;
  const h = heroDetails[currentHero];
  const spriteHtml = (typeof HERO_SPRITES !== 'undefined' && HERO_SPRITES[currentHero]) ? HERO_SPRITES[currentHero] : "";
  const heroRole = currentHero === "theseus" ? "아테네의 통합자이자 건국 영웅" : "영원한 제국 로마의 초대 국왕";
  const heroTagline = currentHero === "theseus"
    ? "“청동 몽둥이로 불의를 꺾고 크레타의 미궁을 돌파한 자”"
    : "“늑대의 젖을 먹고 자라 팔라티노 언덕에 성벽을 쌓은 자”";

  document.getElementById("overviewBox").innerHTML = `
    <div class="hero-pixel-status">
      <div class="pixel-avatar-box">${spriteHtml}</div>
      <div class="pixel-status-info">
        <span class="pixel-title-badge">${heroRole}</span>
        <h2>${h.name}</h2>
        <p>${heroTagline}</p>
      </div>
    </div>
    <div class="card"><h3>🏛️ 출생과 기원</h3><p>${h.overview.birth}</p></div>
    <div class="card"><h3>⚔️ 핵심 업적</h3><p>${h.overview.feat}</p></div>
    <div class="card"><h3>👤 성격과 기질</h3><p>${h.overview.character}</p></div>
    <div class="card"><h3>📖 플루타르코스의 총평</h3><p>${h.overview.verdict}</p></div>
  `;
}

// 3. 관계망 탭 (D3 인터랙티브 + 중앙 도트 영웅)
function renderNetwork() {
  if (typeof heroDetails === 'undefined' || typeof d3 === 'undefined') return;
  const h = heroDetails[currentHero];
  const svg = d3.select("#networkSvg");
  svg.selectAll("*").remove();

  const wrap = document.querySelector(".network-container");
  const width = wrap.clientWidth || 400;
  const height = wrap.clientHeight || 500;

  const g = svg.append("g");
  svg.call(d3.zoom().scaleExtent([0.5, 2.5]).on("zoom", (e) => g.attr("transform", e.transform)));

  const nodes = JSON.parse(JSON.stringify(h.graph.nodes));
  const links = JSON.parse(JSON.stringify(h.graph.links));

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(105))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, (height / 2) - 20));

  const link = g.append("g").selectAll("line").data(links).enter().append("line")
    .attr("stroke", "#5e4c3e").attr("stroke-width", 2);

  const linkText = g.append("g").selectAll("text").data(links).enter().append("text")
    .attr("text-anchor", "middle").attr("fill", "#c5b59f").attr("font-size", "10px").attr("dy", -4)
    .text(d => d.label);

  const node = g.append("g").selectAll("g").data(nodes).enter().append("g")
    .call(d3.drag()
      .on("start", (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
      .on("end", (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));

  node.each(function(d) {
    const el = d3.select(this);
    if (d.id === currentHero) {
      el.append("foreignObject")
        .attr("x", -24).attr("y", -24)
        .attr("width", 48).attr("height", 48)
        .html(`<div style="width:100%;height:100%;filter:drop-shadow(0 0 6px #e5be75);">${HERO_SPRITES[currentHero]}</div>`);
    } else {
      el.append("circle").attr("r", d.r).attr("fill", d.color).attr("stroke", "#fff").attr("stroke-width", 2);
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

// 4. 영웅 퀘스트 (천칭 HUD & 스토리 선택)
function initQuest() {
  questStats = { courage: 50, prudence: 50, justice: 50 };
  currentQuestStep = 0;
  updateScalesHUD();

  document.getElementById("questHeroBadge").innerText = currentHero === "theseus" ? "테세우스" : "로물루스";
  loadQuestStep();
}

function updateScalesHUD() {
  ['courage', 'prudence', 'justice'].forEach(stat => {
    questStats[stat] = Math.max(0, Math.min(100, questStats[stat]));
    const key = stat.charAt(0).toUpperCase() + stat.slice(1);
    const fillEl = document.getElementById(`stat${key}`);
    const valEl = document.getElementById(`val${key}`);
    if (fillEl) fillEl.style.width = `${questStats[stat]}%`;
    if (valEl) valEl.innerText = questStats[stat];
  });
}

function loadQuestStep() {
  if (typeof HERO_QUESTS === 'undefined') return;
  const steps = HERO_QUESTS[currentHero];
  if (!steps || currentQuestStep >= steps.length) {
    showQuestVerdict();
    return;
  }

  const q = steps[currentQuestStep];
  document.getElementById("questStepNum").innerText = q.chapter;
  document.getElementById("questTitle").innerText = q.title;
  document.getElementById("questStory").innerText = q.story;

  const choicesBox = document.getElementById("questChoices");
  choicesBox.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "quest-choice-btn";
    btn.innerText = choice.text;
    btn.onclick = () => handleQuestChoice(choice);
    choicesBox.appendChild(btn);
  });
}

function handleQuestChoice(choice) {
  questStats.courage += choice.courage;
  questStats.prudence += choice.prudence;
  questStats.justice += choice.justice;
  updateScalesHUD();

  alert(`결과: ${choice.outcome}`);
  currentQuestStep++;
  loadQuestStep();
}

function showQuestVerdict() {
  const choicesBox = document.getElementById("questChoices");
  document.getElementById("questStepNum").innerText = "FINAL";
  document.getElementById("questTitle").innerText = "플루타르코스의 최종 평결";

  let verdict = "";
  if (questStats.courage >= 65) {
    verdict = "당신은 두려움을 모르는 담대한 영웅의 길을 걸었습니다. 플루타르코스는 당신의 기상을 칭송하지만 군주로서 절제의 가치를 되새길 것을 당부합니다.";
  } else if (questStats.prudence >= 65) {
    verdict = "당신은 지혜와 국가의 안정을 최우선으로 삼은 현명한 정치가였습니다. 불필요한 피를 흘리지 않고 목적을 달성하는 표본입니다.";
  } else {
    verdict = "당신은 정의와 엄정한 법도를 중심에 둔 공화정의 수호자였습니다. 사사로운 감정에 휘둘리지 않고 기강을 확립했습니다.";
  }

  document.getElementById("questStory").innerText = verdict;
  choicesBox.innerHTML = `<button class="quest-choice-btn" onclick="initQuest()">🔄 처음부터 다시 도전하기</button>`;
}

// 5. 명언 탭
function renderQuotes() {
  if (typeof heroDetails === 'undefined') return;
  const h = heroDetails[currentHero];
  const box = document.getElementById("quotesBox");
  box.innerHTML = h.quotes.map(q => `
    <div class="card">
      <p style="font-size:14px; font-weight:bold; color:#f6ebd7; margin-bottom:6px;">"${q.text}"</p>
      <span style="font-size:11px; color:#c5a059;">— ${q.source}</span>
    </div>
  `).join("");
}

// 6. 토론장
const debateForm = document.getElementById("debateForm");
if (debateForm) {
  debateForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!supabase) {
      alert("토론장 서버 설정이 비어있습니다. (추후 Supabase 연동 시 활성화됩니다)");
      return;
    }
    const author = document.getElementById("debAuthor").value.trim();
    const password = document.getElementById("debPassword").value.trim();
    const content = document.getElementById("debContent").value.trim();

    const { error } = await supabase.from('debates').insert([{
      hero: currentHero,
      author: author,
      password: password,
      content: content
    }]);

    if (error) {
      alert("등록 실패: " + error.message);
    } else {
      document.getElementById("debContent").value = "";
      loadDebates();
    }
  });
}

async function loadDebates() {
  const list = document.getElementById("debateList");
  if (!supabase) {
    list.innerHTML = "<p style='color:#a89a8c; font-size:13px;'>토론장 서버 연결 대기 중입니다. (Supabase 키 설정 필요)</p>";
    return;
  }

  const { data, error } = await supabase
    .from('debates')
    .select('*')
    .eq('hero', currentHero)
    .order('created_at', { ascending: false });

  if (error || !data || data.length === 0) {
    list.innerHTML = "<p style='color:#888;'>첫 번째 의견을 남겨보세요!</p>";
    return;
  }

  list.innerHTML = data.map(item => `
    <div class="debate-card">
      <div class="debate-header">
        <span class="debate-author">${item.author}</span>
        <span>${new Date(item.created_at).toLocaleDateString()}</span>
      </div>
      <div class="debate-content">${item.content}</div>
    </div>
  `).join("");
}
