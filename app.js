let currentHeroKey = 'theseus';
let currentView = 'overview';
let activeMap = null;
let markers = [];
let polyline = null;
let simulation = null;

// 메뉴 탭 전환 이벤트
document.querySelectorAll('.view-tab-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.view-tab-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const target = e.target.dataset.target;
    currentView = target;
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));

    if (target === 'overview') {
      document.getElementById('overviewPanel').classList.add('active');
      renderOverview();
    } else if (target === 'map') {
      document.getElementById('mapViewPanel').classList.add('active');
      setTimeout(() => {
        if (!activeMap) initMap();
        activeMap.invalidateSize();
        renderMap();
      }, 150);
    } else if (target === 'quotes') {
      document.getElementById('quotesPanel').classList.add('active');
      renderQuotes();
    } else if (target === 'network') {
      document.getElementById('graphViewPanel').classList.add('active');
      setTimeout(initNetworkGraph, 100);
    }
  });
});

// 영웅 드롭다운 선택
document.getElementById('heroSelect').addEventListener('change', (e) => {
  currentHeroKey = e.target.value;
  if (currentView === 'overview') renderOverview();
  else if (currentView === 'quotes') renderQuotes();
  else if (currentView === 'network') initNetworkGraph();
  else if (currentView === 'map' && activeMap) {
    activeMap.setView(heroDatabase[currentHeroKey].center, heroDatabase[currentHeroKey].zoom);
    renderMap();
  }
});

// 개요 화면 표시
function renderOverview() {
  const hero = heroDatabase[currentHeroKey];
  document.getElementById('overviewContent').innerHTML = `
    <div class="overview-hero-card">
      <h2>${hero.name}</h2>
      <div class="overview-tagline">${hero.tagline}</div>
      <div class="info-box"><h4>🏛️ 출생</h4><p>${hero.overview.lineage}</p></div>
      <div class="info-box"><h4>⚔️ 업적</h4><p>${hero.overview.achievements}</p></div>
      <div class="info-box"><h4>👤 기질</h4><p>${hero.overview.personality}</p></div>
      <div class="plutarch-verdict"><h4>📖 총평</h4><p>${hero.overview.verdict}</p></div>
    </div>
  `;
}

// 명문장 화면 표시
function renderQuotes() {
  const hero = heroDatabase[currentHeroKey];
  let html = `<h2 style="color:#e5be75;margin-bottom:14px;font-size:18px;">📜 원문 명문장</h2>`;
  hero.quotes.forEach(q => {
    html += `
      <div class="quote-card">
        <div class="quote-text">${q.text}</div>
        <div class="quote-context">📌 ${q.context}</div>
      </div>
    `;
  });
  document.getElementById('quotesContent').innerHTML = html;
}

// 지도 초기화
function initMap() {
  activeMap = L.map('map').setView(heroDatabase[currentHeroKey].center, heroDatabase[currentHeroKey].zoom);
  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=ko&x={x}&y={y}&z={z}', {
    maxZoom: 19, attribution: '© Google Maps'
  }).addTo(activeMap);
}

function renderMap() {
  if (!activeMap) return;
  markers.forEach(m => activeMap.removeLayer(m));
  markers = [];
  if (polyline) activeMap.removeLayer(polyline);

  const hero = heroDatabase[currentHeroKey];
  const listContainer = document.getElementById("placeList");
  listContainer.innerHTML = "";
  const path = [];

  hero.places.forEach((p, idx) => {
    path.push([p.lat, p.lng]);
    const marker = L.marker([p.lat, p.lng]).addTo(activeMap);
    marker.bindPopup(`<strong>${p.name}</strong><br>${p.story}`);
    markers.push(marker);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<span class="step-badge">${idx + 1}</span><strong>${p.name}</strong><p style="color:#aaa;margin-top:4px;">${p.story}</p>`;
    card.onclick = () => { activeMap.setView([p.lat, p.lng], 9); marker.openPopup(); };
    listContainer.appendChild(card);
  });

  if (path.length > 1) {
    polyline = L.polyline(path, { color: '#a63121', weight: 3, dashArray: '6, 8' }).addTo(activeMap);
  }
}

// D3 물리 엔진 그래프 (터치/마우스 드래그)
function initNetworkGraph() {
  const hero = heroDatabase[currentHeroKey];
  document.getElementById("graphHeroTitle").innerText = `${hero.name}의 관계망`;
  const svg = d3.select("#networkSvg");
  svg.selectAll("*").remove();

  const width = document.getElementById("graphViewPanel").clientWidth;
  const height = document.getElementById("graphViewPanel").clientHeight;

  const g = svg.append("g");
  svg.call(d3.zoom().scaleExtent([0.5, 2]).on("zoom", (e) => g.attr("transform", e.transform)));

  const nodesData = JSON.parse(JSON.stringify(hero.graph.nodes));
  const linksData = JSON.parse(JSON.stringify(hero.graph.links));

  simulation = d3.forceSimulation(nodesData)
    .force("link", d3.forceLink(linksData).id(d => d.id).distance(80))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.r + 10));

  const link = g.append("g").selectAll("line").data(linksData).enter().append("line")
    .attr("stroke", "#554336").attr("stroke-width", 1.5);

  const node = g.append("g").selectAll("g").data(nodesData).enter().append("g")
    .call(d3.drag()
      .on("start", (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
      .on("end", (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));

  node.append("circle").attr("r", d => d.r).attr("fill", d => d.color).attr("stroke", "#fff").attr("stroke-width", 1.5);
  node.append("text").attr("dy", d => d.r + 12).attr("text-anchor", "middle")
    .attr("fill", "#ccc").attr("font-size", "10px").text(d => d.name);

  node.on("click", (e, d) => {
    e.stopPropagation();
    const ins = document.getElementById("nodeInspector");
    document.getElementById("insTitle").innerText = d.name;
    document.getElementById("insDesc").innerText = d.desc;
    document.getElementById("insInsight").innerText = d.insight;
    ins.classList.remove("hidden");
  });

  svg.on("click", () => document.getElementById("nodeInspector").classList.add("hidden"));
  document.getElementById("closeInspectorBtn").onclick = () => document.getElementById("nodeInspector").classList.add("hidden");

  simulation.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });
}

// 첫 실행 시 개요 화면 출력
renderOverview();
