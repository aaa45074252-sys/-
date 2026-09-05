let currentHeroKey = 'theseus';
let currentView = 'overview';
let activeMap = null;
let markers = [];
let polyline = null;
let tempMarker = null;

function switchView(viewName, element) {
  currentView = viewName;
  document.querySelectorAll('.view-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');

  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));

  if (viewName === 'overview') {
    document.getElementById('overviewPanel').classList.add('active');
    renderOverview();
  } else if (viewName === 'map') {
    const mapPanel = document.getElementById('mapViewPanel');
    mapPanel.classList.add('active');
    setTimeout(() => {
      if (!activeMap) initMap();
      activeMap.invalidateSize();
      renderMap();
    }, 150);
  } else if (viewName === 'quotes') {
    document.getElementById('quotesPanel').classList.add('active');
    renderQuotes();
  } else if (viewName === 'relics') {
    document.getElementById('relicsPanel').classList.add('active');
    renderRelics();
  }
}

function renderOverview() {
  const hero = heroDatabase[currentHeroKey];
  document.getElementById('overviewContent').innerHTML = `
    <div class="overview-hero-card">
      <h2>${hero.name}</h2>
      <div class="overview-tagline">${hero.tagline}</div>
      <div class="info-grid">
        <div class="info-box"><h4>🏛️ 출생 및 혈통</h4><p>${hero.overview.lineage}</p></div>
        <div class="info-box"><h4>⚔️ 핵심 업적</h4><p>${hero.overview.achievements}</p></div>
        <div class="info-box"><h4>👤 성격과 기질</h4><p>${hero.overview.personality}</p></div>
      </div>
      <div class="plutarch-verdict"><h4>📖 플루타르코스의 비교 총평</h4><p>${hero.overview.verdict}</p></div>
    </div>
  `;
}

function renderQuotes() {
  const hero = heroDatabase[currentHeroKey];
  const container = document.getElementById('quotesContent');
  let html = `<h2 style="color:#e5be75;margin-bottom:20px;font-size:20px;">📜 《플루타르코스 영웅전》 속 인상 깊은 문장</h2>`;
  hero.quotes.forEach(q => {
    html += `
      <div class="quote-card">
        <div class="quote-text">${q.text}</div>
        <div class="quote-context">📌 <strong>상황:</strong> ${q.context}</div>
        <div class="quote-question">💡 <strong>토론 질문:</strong> ${q.question}</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderRelics() {
  const hero = heroDatabase[currentHeroKey];
  document.getElementById('narrativeTitle').innerText = `${hero.name}의 운명과 서사 관계망`;
  document.getElementById('narrativeSub').innerText = `${hero.tagline}`;
  
  const canvas = document.getElementById('narrativeCanvasContent');
  let html = `<div class="destiny-spine"></div>`;

  hero.milestones.forEach(m => {
    html += `
      <div class="milestone-station">
        <div class="branch-cluster left">
          <div class="interaction-node ${m.left.style}">
            <span class="relation-pill ${m.left.pill}">${m.left.pillText}</span>
            <div class="entity-name">${m.left.name} <span class="entity-role">${m.left.role}</span></div>
            <div class="narrative-effect">${m.left.text}</div>
            ${m.left.quote ? `<div class="impact-quote">${m.left.quote}</div>` : ''}
          </div>
        </div>
        <div class="hero-core-node">
          <span class="stage-tag">${m.stage}</span>
          <span class="stage-title">${m.title}</span>
        </div>
        <div class="branch-cluster right">
          <div class="interaction-node ${m.right.style}">
            <span class="relation-pill ${m.right.pill}">${m.right.pillText}</span>
            <div class="entity-name">${m.right.name} <span class="entity-role">${m.right.role}</span></div>
            <div class="narrative-effect">${m.right.text}</div>
            ${m.right.quote ? `<div class="impact-quote">${m.right.quote}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  });
  canvas.innerHTML = html;
}

function changeHero(heroKey) {
  currentHeroKey = heroKey;
  resetForm();
  if (currentView === 'overview') renderOverview();
  else if (currentView === 'quotes') renderQuotes();
  else if (currentView === 'relics') renderRelics();
  else if (currentView === 'map') {
    if (!activeMap) initMap();
    activeMap.setView(heroDatabase[heroKey].center, heroDatabase[heroKey].zoom);
    renderMap();
  }
}

function initMap() {
  activeMap = L.map('map').setView(heroDatabase[currentHeroKey].center, heroDatabase[currentHeroKey].zoom);
  L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=ko&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    attribution: '© Google Maps'
  }).addTo(activeMap);

  activeMap.on('click', function(e) {
    const { lat, lng } = e.latlng;
    document.getElementById('inputLat').value = lat;
    document.getElementById('inputLng').value = lng;
    document.getElementById('coordText').innerText = `선택 좌표: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;

    if (tempMarker) activeMap.removeLayer(tempMarker);
    tempMarker = L.circleMarker([lat, lng], { color: '#1a73e8', radius: 7 }).addTo(activeMap);
  });
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
    const icon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `<div class="custom-step-pin">${idx + 1}</div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const marker = L.marker([p.lat, p.lng], { icon }).addTo(activeMap);
    marker.bindPopup(`<strong>${p.name}</strong><br><br>${p.story}`);
    markers.push(marker);

    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${p.id}`;
    card.innerHTML = `
      <div class="card-header">
        <span class="step-badge">${idx + 1}</span>
        <strong style="font-size:13px;">${p.name}</strong>
        <div class="card-actions">
          <button style="color:#1a73e8" onclick="startEdit(event, ${p.id})">수정</button>
          <button style="color:#c53929" onclick="deletePlace(event, ${p.id})">삭제</button>
        </div>
      </div>
      <div class="card-tabs">
        <div class="tab-item active" onclick="switchCardTab(event, ${p.id}, 'story')">줄거리</div>
        <div class="tab-item" onclick="switchCardTab(event, ${p.id}, 'insight')">해석</div>
        <div class="tab-item" onclick="switchCardTab(event, ${p.id}, 'question')">질문</div>
      </div>
      <div class="card-body" id="card-body-${p.id}">${p.story || "내용이 없습니다."}</div>
      ${p.image ? `<img src="${p.image}" class="card-img" alt="${p.name}">` : ''}
    `;

    card.onclick = () => {
      activeMap.setView([p.lat, p.lng], 9);
      marker.openPopup();
    };

    listContainer.appendChild(card);
  });

  if (path.length > 1) {
    polyline = L.polyline(path, { color: '#a63121', weight: 3, opacity: 0.8, dashArray: '6, 8' }).addTo(activeMap);
  }
}

function switchCardTab(e, placeId, tabType) {
  e.stopPropagation();
  const card = document.getElementById(`card-${placeId}`);
  card.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');

  const place = heroDatabase[currentHeroKey].places.find(p => p.id === placeId);
  const body = document.getElementById(`card-body-${placeId}`);
  if (tabType === 'story') body.innerText = place.story;
  if (tabType === 'insight') body.innerHTML = `<strong>[플루타르코스의 시선]</strong><br>${place.insight || "내용 없음"}`;
  if (tabType === 'question') body.innerHTML = `<strong>💡 토론 발문:</strong><br>${place.question || "내용 없음"}`;
}

function savePlace() {
  const editId = document.getElementById('editPlaceId').value;
  const lat = parseFloat(document.getElementById('inputLat').value);
  const lng = parseFloat(document.getElementById('inputLng').value);
  const name = document.getElementById('inputName').value.trim();
  const story = document.getElementById('inputStory').value.trim();
  const insight = document.getElementById('inputInsight').value.trim();
  const question = document.getElementById('inputQuestion').value.trim();
  const fileInput = document.getElementById('inputImageFile');
  const existingImg = document.getElementById('existingImage').value;

  if (!lat || !lng) return alert("지도에서 위치를 클릭하세요.");
  if (!name) return alert("장소명을 입력하세요.");

  const commit = (finalImg) => {
    const placeObj = { id: editId ? parseInt(editId) : Date.now(), name, lat, lng, story, insight, question, image: finalImg };
    if (editId) {
      const idx = heroDatabase[currentHeroKey].places.findIndex(p => p.id == editId);
      if (idx !== -1) heroDatabase[currentHeroKey].places[idx] = placeObj;
    } else {
      heroDatabase[currentHeroKey].places.push(placeObj);
    }
    resetForm();
    renderMap();
  };

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => commit(e.target.result);
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    commit(existingImg);
  }
}

function startEdit(e, id) {
  e.stopPropagation();
  const place = heroDatabase[currentHeroKey].places.find(p => p.id === id);
  if (!place) return;

  document.getElementById('editPlaceId').value = place.id;
  document.getElementById('inputLat').value = place.lat;
  document.getElementById('inputLng').value = place.lng;
  document.getElementById('inputName').value = place.name;
  document.getElementById('inputStory').value = place.story || "";
  document.getElementById('inputInsight').value = place.insight || "";
  document.getElementById('inputQuestion').value = place.question || "";
  document.getElementById('existingImage').value = place.image || "";
  document.getElementById('coordText').innerText = `수정 중: ${place.name}`;

  document.getElementById('formBox').classList.add('edit-mode');
  document.getElementById('formTitle').innerText = "✏️ 여정 지점 수정";
  document.getElementById('submitBtn').innerText = "수정 완료";
  document.getElementById('cancelBtn').style.display = 'block';

  activeMap.setView([place.lat, place.lng], 9);
  if (tempMarker) activeMap.removeLayer(tempMarker);
  tempMarker = L.circleMarker([place.lat, place.lng], { color: '#1a73e8', radius: 8 }).addTo(activeMap);
  document.getElementById('sidebar').scrollTop = 0;
}

function resetForm() {
  document.getElementById('editPlaceId').value = "";
  document.getElementById('inputLat').value = "";
  document.getElementById('inputLng').value = "";
  document.getElementById('inputName').value = "";
  document.getElementById('inputStory').value = "";
  document.getElementById('inputInsight').value = "";
  document.getElementById('inputQuestion').value = "";
  document.getElementById('existingImage').value = "";
  document.getElementById('inputImageFile').value = "";
  document.getElementById('coordText').innerText = "지도를 클릭해 위치를 지정하세요.";
  document.getElementById('formBox').classList.remove('edit-mode');
  document.getElementById('formTitle').innerText = "📍 새 여정 지점 등록";
  document.getElementById('submitBtn').innerText = "등록하기";
  document.getElementById('cancelBtn').style.display = 'none';

  if (tempMarker && activeMap) { activeMap.removeLayer(tempMarker); tempMarker = null; }
}

function deletePlace(e, id) {
  e.stopPropagation();
  if (confirm("이 지점을 삭제하시겠습니까?")) {
    heroDatabase[currentHeroKey].places = heroDatabase[currentHeroKey].places.filter(p => p.id !== id);
    if (document.getElementById('editPlaceId').value == id) resetForm();
    renderMap();
  }
}

let isTourRunning = false, tourIndex = 0, tourTimer = null;
function toggleTour() {
  const places = heroDatabase[currentHeroKey].places;
  if (!places || places.length === 0) return alert("재생할 여정이 없습니다.");
  isTourRunning = !isTourRunning;
  const playBtn = document.getElementById("playBtn");
  const tourStatus = document.getElementById("tourStatus");

  if (isTourRunning) {
    playBtn.innerText = "❚❚";
    tourIndex = 0;
    runTourStep();
  } else {
    stopTour();
  }
}

function runTourStep() {
  const places = heroDatabase[currentHeroKey].places;
  if (tourIndex >= places.length) {
    stopTour();
    document.getElementById("tourStatus").innerText = "여정 탐방 완료";
    return;
  }
  const p = places[tourIndex];
  document.getElementById("tourStatus").innerText = `[${tourIndex + 1}/${places.length}] ${p.name}`;
  activeMap.flyTo([p.lat, p.lng], 10, { duration: 1.5 });
  if (markers[tourIndex]) markers[tourIndex].openPopup();
  const card = document.getElementById(`card-${p.id}`);
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  tourIndex++;
  tourTimer = setTimeout(runTourStep, 4000);
}

function stopTour() {
  isTourRunning = false;
  clearTimeout(tourTimer);
  document.getElementById("playBtn").innerText = "▶";
  document.getElementById("tourStatus").innerText = "여정 탐방 일시정지";
}

function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(heroDatabase, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = `plutarch_archive_${Date.now()}.json`;
  a.click();
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      Object.assign(heroDatabase, data);
      switchView(currentView);
      alert("데이터를 성공적으로 불러왔습니다.");
    } catch(err) {
      alert("유효한 JSON 파일이 아닙니다.");
    }
  };
  reader.readAsText(file);
}

// 최초 진입 시 인물 개요 렌더링
renderOverview();
