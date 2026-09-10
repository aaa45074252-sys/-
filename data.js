// ==========================================
// 1. 32x32 도트 이미지 SVG 문자열
// ==========================================
const HERO_SPRITES = {
  theseus: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="11" y="3" width="10" height="4" fill="#b45309"/><rect x="9" y="5" width="14" height="6" fill="#d97706"/><rect x="11" y="4" width="6" height="3" fill="#f59e0b"/><rect x="10" y="8" width="12" height="2" fill="#eab308"/><rect x="12" y="8" width="3" height="1" fill="#fef08a"/><rect x="10" y="10" width="12" height="6" fill="#fed7aa"/><rect x="11" y="11" width="2" height="2" fill="#1e293b"/><rect x="17" y="11" width="2" height="2" fill="#1e293b"/><rect x="12" y="11" width="1" height="1" fill="#ffffff"/><rect x="18" y="11" width="1" height="1" fill="#ffffff"/><rect x="14" y="13" width="2" height="1" fill="#fb923c"/><rect x="13" y="15" width="4" height="1" fill="#ea580c"/><rect x="11" y="16" width="10" height="8" fill="#f8fafc"/><rect x="10" y="17" width="2" height="7" fill="#cbd5e1"/><rect x="20" y="17" width="2" height="7" fill="#cbd5e1"/><rect x="12" y="16" width="2" height="3" fill="#78350f"/><rect x="14" y="19" width="2" height="3" fill="#78350f"/><rect x="10" y="23" width="12" height="2" fill="#78350f"/><rect x="15" y="23" width="2" height="2" fill="#fbbf24"/><rect x="7" y="17" width="4" height="3" fill="#fed7aa"/><rect x="9" y="19" width="3" height="3" fill="#fed7aa"/><rect x="21" y="17" width="4" height="3" fill="#fed7aa"/><rect x="19" y="19" width="3" height="3" fill="#fed7aa"/><rect x="11" y="20" width="3" height="3" fill="#f97316"/><rect x="17" y="19" width="3" height="3" fill="#f97316"/><rect x="21" y="8" width="6" height="6" fill="#3e2723"/><rect x="22" y="9" width="4" height="4" fill="#5d4037"/><rect x="23" y="10" width="2" height="2" fill="#d7ccc8"/><rect x="19" y="13" width="3" height="4" fill="#4e342e"/><rect x="16" y="16" width="3" height="4" fill="#3e2723"/><rect x="13" y="21" width="3" height="4" fill="#4e342e"/><rect x="10" y="24" width="3" height="4" fill="#3e2723"/><rect x="8" y="27" width="3" height="3" fill="#2d1a10"/><rect x="11" y="25" width="3" height="3" fill="#fed7aa"/><rect x="17" y="25" width="3" height="3" fill="#fed7aa"/><rect x="11" y="27" width="3" height="2" fill="#78350f"/><rect x="17" y="27" width="3" height="2" fill="#78350f"/><rect x="10" y="29" width="4" height="2" fill="#451a03"/><rect x="17" y="29" width="4" height="2" fill="#451a03"/></svg>`,

  romulus: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="13" y="1" width="6" height="2" fill="#dc2626"/><rect x="11" y="2" width="10" height="2" fill="#b91c1c"/><rect x="10" y="3" width="12" height="1" fill="#991b1b"/><rect x="11" y="4" width="10" height="5" fill="#d97706"/><rect x="13" y="4" width="6" height="2" fill="#fcd34d"/><rect x="10" y="7" width="2" height="4" fill="#b45309"/><rect x="20" y="7" width="2" height="4" fill="#b45309"/><rect x="12" y="7" width="8" height="5" fill="#fed7aa"/><rect x="13" y="8" width="2" height="2" fill="#0f172a"/><rect x="17" y="8" width="2" height="2" fill="#0f172a"/><rect x="14" y="8" width="1" height="1" fill="#ffffff"/><rect x="18" y="8" width="1" height="1" fill="#ffffff"/><rect x="15" y="10" width="2" height="1" fill="#fb923c"/><rect x="14" y="11" width="4" height="1" fill="#ea580c"/><rect x="7" y="11" width="4" height="12" fill="#991b1b"/><rect x="6" y="13" width="2" height="10" fill="#7f1d1d"/><rect x="11" y="12" width="10" height="9" fill="#b45309"/><rect x="12" y="13" width="8" height="6" fill="#d97706"/><rect x="14" y="14" width="4" height="4" fill="#f59e0b"/><rect x="10" y="12" width="2" height="3" fill="#fcd34d"/><rect x="20" y="12" width="2" height="3" fill="#fcd34d"/><rect x="6" y="15" width="5" height="10" fill="#b91c1c"/><rect x="7" y="16" width="3" height="8" fill="#dc2626"/><rect x="8" y="19" width="2" height="2" fill="#fbbf24"/><rect x="24" y="2" width="1" height="4" fill="#f1f5f9"/><rect x="23" y="4" width="3" height="2" fill="#94a3b8"/><rect x="24" y="6" width="1" height="23" fill="#5c3a1e"/><rect x="22" y="16" width="3" height="3" fill="#fed7aa"/><rect x="11" y="21" width="10" height="2" fill="#78350f"/><rect x="15" y="21" width="2" height="2" fill="#fbbf24"/><rect x="12" y="23" width="2" height="3" fill="#9a3412"/><rect x="15" y="23" width="2" height="3" fill="#78350f"/><rect x="18" y="23" width="2" height="3" fill="#9a3412"/><rect x="12" y="26" width="3" height="3" fill="#fed7aa"/><rect x="17" y="26" width="3" height="3" fill="#fed7aa"/><rect x="11" y="29" width="4" height="2" fill="#451a03"/><rect x="17" y="29" width="4" height="2" fill="#451a03"/></svg>`,

  lycurgus: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="12" y="3" width="8" height="4" fill="#78350f"/><rect x="10" y="5" width="12" height="4" fill="#451a03"/><rect x="11" y="8" width="10" height="6" fill="#fcd34d"/><rect x="12" y="9" width="2" height="2" fill="#0f172a"/><rect x="18" y="9" width="2" height="2" fill="#0f172a"/><rect x="10" y="13" width="12" height="4" fill="#cbd5e1"/><rect x="11" y="14" width="10" height="3" fill="#94a3b8"/><rect x="9" y="16" width="14" height="9" fill="#991b1b"/><rect x="11" y="17" width="10" height="7" fill="#b91c1c"/><rect x="6" y="15" width="5" height="10" fill="#d97706"/><rect x="7" y="16" width="3" height="8" fill="#f59e0b"/><rect x="21" y="16" width="4" height="7" fill="#991b1b"/><rect x="23" y="11" width="2" height="14" fill="#475569"/><rect x="11" y="25" width="3" height="4" fill="#78350f"/><rect x="18" y="25" width="3" height="4" fill="#78350f"/><rect x="10" y="29" width="4" height="2" fill="#292524"/><rect x="18" y="29" width="4" height="2" fill="#292524"/></svg>`,

  numa: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="12" y="2" width="8" height="3" fill="#15803d"/><rect x="10" y="4" width="12" height="2" fill="#16a34a"/><rect x="11" y="6" width="10" height="4" fill="#fed7aa"/><rect x="10" y="9" width="12" height="6" fill="#fcd34d"/><rect x="12" y="9" width="2" height="2" fill="#1e293b"/><rect x="18" y="9" width="2" height="2" fill="#1e293b"/><rect x="11" y="13" width="10" height="4" fill="#f1f5f9"/><rect x="10" y="15" width="12" height="11" fill="#ffffff"/><rect x="8" y="17" width="4" height="8" fill="#e2e8f0"/><rect x="20" y="17" width="4" height="8" fill="#e2e8f0"/><rect x="13" y="18" width="6" height="4" fill="#7c3aed"/><rect x="22" y="15" width="4" height="6" fill="#b45309"/><rect x="23" y="16" width="2" height="4" fill="#fef08a"/><rect x="11" y="26" width="3" height="3" fill="#fed7aa"/><rect x="18" y="26" width="3" height="3" fill="#fed7aa"/><rect x="10" y="29" width="4" height="2" fill="#78350f"/><rect x="18" y="29" width="4" height="2" fill="#78350f"/></svg>`,

  // 솔론: 지혜의 현인, 양피지 두루마리를 든 아테네의 입법관
  solon: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="11" y="3" width="10" height="3" fill="#64748b"/><rect x="10" y="5" width="12" height="3" fill="#94a3b8"/><rect x="11" y="8" width="10" height="5" fill="#fed7aa"/><rect x="12" y="9" width="2" height="2" fill="#0f172a"/><rect x="18" y="9" width="2" height="2" fill="#0f172a"/><rect x="10" y="13" width="12" height="4" fill="#e2e8f0"/><rect x="11" y="14" width="10" height="3" fill="#cbd5e1"/><rect x="9" y="17" width="14" height="10" fill="#2563eb"/><rect x="11" y="18" width="10" height="8" fill="#3b82f6"/><rect x="6" y="18" width="4" height="7" fill="#1d4ed8"/><rect x="22" y="18" width="4" height="7" fill="#1d4ed8"/><rect x="7" y="20" width="3" height="6" fill="#fed7aa"/><rect x="22" y="20" width="3" height="6" fill="#fef08a"/><rect x="23" y="19" width="2" height="7" fill="#fde047"/><rect x="11" y="27" width="3" height="3" fill="#78350f"/><rect x="18" y="27" width="3" height="3" fill="#78350f"/><rect x="10" y="29" width="4" height="2" fill="#1e293b"/><rect x="18" y="29" width="4" height="2" fill="#1e293b"/></svg>`,

  // 푸블리콜라: 공화정 토가를 입고 로마 민중을 대변하는 집정관
  publicola: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="12" y="3" width="8" height="4" fill="#451a03"/><rect x="11" y="6" width="10" height="5" fill="#fed7aa"/><rect x="12" y="7" width="2" height="2" fill="#0f172a"/><rect x="18" y="7" width="2" height="2" fill="#0f172a"/><rect x="13" y="9" width="6" height="2" fill="#d97706"/><rect x="9" y="12" width="14" height="14" fill="#f8fafc"/><rect x="11" y="13" width="10" height="12" fill="#e2e8f0"/><rect x="8" y="14" width="4" height="9" fill="#991b1b"/><rect x="14" y="13" width="4" height="12" fill="#991b1b"/><rect x="22" y="15" width="3" height="6" fill="#fed7aa"/><rect x="23" y="12" width="2" height="13" fill="#b45309"/><rect x="22" y="10" width="4" height="3" fill="#94a3b8"/><rect x="11" y="26" width="3" height="4" fill="#78350f"/><rect x="18" y="26" width="3" height="4" fill="#78350f"/><rect x="10" y="29" width="4" height="2" fill="#1e1b4b"/><rect x="18" y="29" width="4" height="2" fill="#1e1b4b"/></svg>`
};

// ==========================================
// 2. 지도 이벤트 핀 데이터 (위치 중복 방지 세분화)
// ==========================================
// ==========================================
// 2. 지도 이벤트 핀 데이터 (광역 줌 최적화 광역 분산 좌표)
// ==========================================
const allMapEvents = [
  // --- [아테네 권역 (대각선 배치)] ---
  {
    hero: "theseus",
    heroName: "테세우스",
    title: "아테네 - 아크로폴리스 (연방 통합)",
    desc: "아티카 지방의 여러 부족을 하나로 묶어 위대한 아테네의 번영을 열었습니다.",
    lat: 37.6000, // 아테네 남서쪽 해안 방면 (살라미스/피레우스 축)
    lng: 23.4000
  },
  {
    hero: "solon",
    heroName: "솔론",
    title: "아테네 - 아고라 광장 (채무 탕감과 법 제정)",
    desc: "시민들의 부채를 탕감하고 민주정의 주춧돌을 세웠습니다.",
    lat: 38.3000, // 아테네 북동쪽 내륙 방면 (마라톤/보이오티아 축)
    lng: 23.9500
  },

  // --- [스파르타 권역] ---
  {
    hero: "lycurgus",
    heroName: "리쿠르고스",
    title: "스파르타 (철혈의 군사 규율)",
    desc: "엄격한 군사 훈련 체계와 평등한 토지 분배로 최강의 전사 국가를 구축했습니다.",
    lat: 37.0742,
    lng: 22.4303
  },

  // --- [로마 권역 (역삼각형 분산 배치)] ---
  {
    hero: "romulus",
    heroName: "로물루스",
    title: "로마 - 팔라티노 언덕 (건국)",
    desc: "기원전 753년, 팔라티노 언덕에 성벽의 경계를 긋고 영원한 제국 로마를 세웠습니다.",
    lat: 41.5000, // 로마 남서쪽 (라티움 평야 방면)
    lng: 12.1000
  },
  {
    hero: "numa",
    heroName: "누마 폼필리우스",
    title: "로마 - 사비니 & 퀴리날레 (평화와 제례)",
    desc: "사비니 출신의 현자로, 야누스 신전의 문을 닫고 43년간 평화로 다스렸습니다.",
    lat: 42.2500, // 로마 북동쪽 (사비니 산악/티볼리 방면)
    lng: 12.8500
  },
  {
    hero: "publicola",
    heroName: "푸블리콜라",
    title: "로마 - 벨리아 & 에트루리아 전선 (공화정 수호)",
    desc: "집정관의 도끼를 낮추고 에트루리아의 침략에 맞서 공화정을 지켜냈습니다.",
    lat: 41.9500, // 로마 동쪽 배후지
    lng: 13.5000
  }
];

// ==========================================
// 3. 영웅 상세 정보 (개요, 명언, D3 관계망)
// ==========================================
const heroDetails = {
  theseus: {
    name: "테세우스 (Theseus)",
    overview: {
      birth: "아이게우스 왕과 아이트라 공주의 아들 (포세이돈의 혈통)",
      feat: "코린토스 악당 토벌, 미노타우로스 처단, 아테네 연방(시노이키스모스) 통합",
      character: "정의감과 명예욕이 강하지만, 약속을 쉬이 잊어 비극을 초래함",
      verdict: "군주 권력을 내려놓고 아테네 민주주의의 터전을 닦은 탁월한 입법자."
    },
    quotes: [
      { text: "“헤라클레스의 불멸의 업적을 듣고, 나 역시 가만히 앉아 있을 수 없었다.”", desc: "안전한 바닷길 대신 험난한 육로를 택하며 한 말" },
      { text: "“낡은 널빤지를 수리하여 보존한 배는 사물의 정체성에 관한 끝없는 논쟁을 낳았다.”", desc: "플루타르코스가 소개한 '테세우스의 배' 역설" }
    ],
    graph: {
      nodes: [
        { id: "theseus", name: "테세우스", r: 24, color: "#e5be75", type: "영웅", desc: "아테네 연방의 건국자", insight: "명예를 좇다 약속을 잊은 영웅" },
        { id: "aegeus", name: "아이게우스", r: 18, color: "#3b82f6", type: "부친", desc: "아테네의 왕", insight: "검은 돛을 보고 바다에 투신함" },
        { id: "ariadne", name: "아리아드네", r: 18, color: "#10b981", type: "조력자", desc: "실타래를 준 크레타 공주", insight: "낙소스 섬에 남겨진 비운의 여인" },
        { id: "minotaur", name: "미노타우로스", r: 20, color: "#ef4444", type: "적대자", desc: "미궁의 괴물", insight: "아테네가 짊어졌던 공납의 멍에" }
      ],
      links: [
        { source: "theseus", target: "aegeus", label: "부자 관계" },
        { source: "theseus", target: "ariadne", label: "조력과 비극" },
        { source: "theseus", target: "minotaur", label: "처단" }
      ]
    }
  },
  romulus: {
    name: "로물루스 (Romulus)",
    overview: {
      birth: "군신 마르스와 실비아 공주의 쌍둥이 아들",
      feat: "로마 건국, 원로원 창설, 사비니 민족과의 화해 및 통합",
      character: "결단력과 야생의 용맹을 지녔으나 권력욕과 독단이 강함",
      verdict: "허허벌판에 제국의 기틀을 짰으나 형제 살해의 피로 성벽을 적심."
    },
    quotes: [
      { text: "“내 성벽을 넘는 자는 누구든 이와 같은 운명을 맞이하리라!”", desc: "성벽을 뛰어넘어 조롱한 동생 레무스를 베며 외친 말" },
      { text: "“우리는 피로 맺어진 하나의 로마인이다.”", desc: "사비니족과 연합하여 공동 통치를 선언할 때" }
    ],
    graph: {
      nodes: [
        { id: "romulus", name: "로물루스", r: 24, color: "#e5be75", type: "영웅", desc: "로마 초대 건국자", insight: "도시의 규율을 위해 형제마저 벤 냉혹한 지도자" },
        { id: "wolf", name: "암늑대 루파", r: 18, color: "#10b981", type: "수호자", desc: "형제에게 젖을 준 늑대", insight: "로마인의 강인한 야생성 상징" },
        { id: "remus", name: "레무스", r: 20, color: "#ef4444", type: "형제/적대", desc: "쌍둥이 동생", insight: "국가 규율의 가혹한 희생양" },
        { id: "senate", name: "원로원", r: 18, color: "#3b82f6", type: "정치", desc: "100인의 귀족 의회", insight: "공화정의 기틀이 된 통치 기구" }
      ],
      links: [
        { source: "romulus", target: "wolf", label: "양육" },
        { source: "romulus", target: "remus", label: "형제 살해" },
        { source: "romulus", target: "senate", label: "의회 창설" }
      ]
    }
  },
  lycurgus: {
    name: "리쿠르고스 (Lycurgus)",
    overview: {
      birth: "스파르타 에우리폰티드 왕가의 왕족",
      feat: "토지 균등 분배, 무쇠 화폐 도입, 공동 식사제(시시티아), 아고게 창설",
      character: "극기의 절제력, 사리사욕이 전무한 냉철한 입법자",
      verdict: "시민들에게 법을 맹세시킨 뒤 스스로 굶어 죽어 법의 영속성을 얻음."
    },
    quotes: [
      { text: "“도시는 벽돌이 아니라 용감한 시민들의 어깨로 둘러싸여야 한다.”", desc: "스파르타에 왜 성벽을 쌓지 않느냐는 물음에 답하며" },
      { text: "“쇠로 만든 무거운 돈을 훔치거나 숨기려 할 도둑이 어디 있겠는가?”", desc: "황금과 은을 금지하고 무거운 쇠 화폐를 도입하며 한 말" }
    ],
    graph: {
      nodes: [
        { id: "lycurgus", name: "리쿠르고스", r: 24, color: "#e5be75", type: "영웅", desc: "스파르타의 전설적 입법자", insight: "자신을 소멸시켜 법의 영속성을 얻음" },
        { id: "delphi", name: "델포이 신탁", r: 18, color: "#3b82f6", type: "신성", desc: "아폴론의 신탁소", insight: "스파르타 헌법 레트라의 정당성을 보증함" },
        { id: "charilaus", name: "카릴라오스", r: 18, color: "#10b981", type: "조카/왕", desc: "왕위를 넘겨준 조카", insight: "권력욕을 버리고 섭정직을 내려놓음" },
        { id: "alcander", name: "알칸드로스", r: 18, color: "#ef4444", type: "적대/화해", desc: "리쿠르고스의 눈을 멀게 한 청년", insight: "처벌 대신 제자로 삼아 충직한 지지자로 바꿈" }
      ],
      links: [
        { source: "lycurgus", target: "delphi", label: "신탁 수령" },
        { source: "lycurgus", target: "charilaus", label: "왕위 양도" },
        { source: "lycurgus", target: "alcander", label: "관용과 교화" }
      ]
    }
  },
  numa: {
    name: "누마 폼필리우스 (Numa Pompilius)",
    overview: {
      birth: "사비니 출신의 현자, 타티우스 왕의 사위",
      feat: "야누스 신전 건립, 베스타 여사제단 및 폰티펙스 창설, 12개월 태양력 개정",
      character: "명상과 철학을 사랑하며 신에 대한 경외로 다스림",
      verdict: "피비린내 나는 군사도시 로마를 43년간 평화와 법치 국가로 탈바꿈시킴."
    },
    quotes: [
      { text: "“신은 눈에 보이는 형상으로 만들 수 없으며 오직 마음으로만 섬겨야 한다.”", desc: "로마 초기 170년간 우상 조각을 세우지 못하게 금지하며" },
      { text: "“정의와 법을 통해 무기를 내려놓게 만드는 것이야말로 진정한 통치다.”", desc: "왕위를 사양하다가 시민의 간청을 받아들이며" }
    ],
    graph: {
      nodes: [
        { id: "numa", name: "누마 폼필리우스", r: 24, color: "#e5be75", type: "영웅", desc: "로마의 2대 국왕이자 현자", insight: "신앙과 지혜로 야만의 도시를 길들인 군주" },
        { id: "egeria", name: "님프 에게리아", r: 19, color: "#a855f7", type: "뮤즈/신성", desc: "숲속의 샘 요정", insight: "누마에게 입법과 종교적 영감을 전수한 반려자" },
        { id: "tatius", name: "타티우스", r: 18, color: "#3b82f6", type: "장인", desc: "사비니의 왕", insight: "로마와 사비니를 하나로 묶는 혈연적 고리" },
        { id: "janus", name: "야누스 신전", r: 18, color: "#10b981", type: "평화", desc: "전쟁과 평화의 문", insight: "재위 43년 동안 한 번도 문이 열리지 않은 평화의 증표" }
      ],
      links: [
        { source: "numa", target: "egeria", label: "영적 교감" },
        { source: "numa", target: "tatius", label: "사위 관계" },
        { source: "numa", target: "janus", label: "평화 유지" }
      ]
    }
  },
  solon: {
    name: "솔론 (Solon)",
    overview: {
      birth: "아테네 명문 코드로스 왕가의 후예이자 시인",
      feat: "부채 탕감(세이사크테이아), 신체 담보 노예제 철폐, 재산에 따른 4계급제 편성, 민중법원 창설",
      character: "극단적 혁명과 부패한 특권을 모두 경계하고 중용(中庸)을 지킨 지혜로운 현자",
      verdict: "독재자가 될 기회를 버리고 법 앞에 만인이 평등하도록 아테네 민주정의 주춧돌을 세움."
    },
    quotes: [
      { text: "“나는 양편 사이에 튼튼한 방패를 대주어, 어느 한쪽도 부당하게 이기지 못하게 하였다.”", desc: "빈민의 토지 분배 요구와 귀족의 특권 유지 사이에서 중용을 선언하며" },
      { text: "“아무리 부유한 사람이라도 죽음을 맞이하기 전까지는 결코 행복하다고 말할 수 없다.”", desc: "부귀를 뽐내는 리디아의 왕 크로이소스에게 건넨 경고" }
    ],
    graph: {
      nodes: [
        { id: "solon", name: "솔론", r: 24, color: "#e5be75", type: "영웅", desc: "아테네 7대 현인이자 대입법관", insight: "양극단의 갈등을 법과 중용으로 중재한 지혜" },
        { id: "croesus", name: "크로이소스", r: 18, color: "#f59e0b", type: "대담자", desc: "리디아의 부유한 왕", insight: "행복은 끝을 보기 전까지 알 수 없음을 깨달은 군주" },
        { id: "peisistratos", name: "페이시스트라토스", r: 18, color: "#ef4444", type: "정적/친족", desc: "아테네의 참주(독재자)", insight: "솔론의 경고에도 불구하고 무력으로 권력을 잡음" },
        { id: "anacharsis", name: "아나카르시스", r: 18, color: "#3b82f6", type: "학문적 벗", desc: "스키타이의 철학자", insight: "법은 거미줄 같아서 약자만 얽힌다고 솔론을 비판함" }
      ],
      links: [
        { source: "solon", target: "croesus", label: "행복 문답" },
        { source: "solon", target: "peisistratos", label: "독재 경고" },
        { source: "solon", target: "anacharsis", label: "철학적 토론" }
      ]
    }
  },
  publicola: {
    name: "푸블리콜라 (Publicola)",
    overview: {
      birth: "로마 귀족 발레리우스 가문 출신 (본명: 푸블리우스 발레리우스)",
      feat: "오만한 타르퀴니우스 왕정 추방, 집정관 파스케스(의전 도끼) 인하, 시민 항소권 보장",
      character: "시민의 눈높이에서 권력을 절제하고 민중의 자유를 최우선으로 여긴 공화정의 수호자",
      verdict: "권력의 남용을 스스로 경계하여 민중으로부터 '푸블리콜라(시민을 돌보는 자)'라는 명예로운 칭호를 얻음."
    },
    quotes: [
      { text: "“자유로운 로마의 시민 위에 군림하는 자는 누구든 공공의 적으로 처벌받을 것이다.”", desc: "참주정을 도모하는 자를 재판 없이 처형할 수 있도록 한 법률을 공포하며" },
      { text: "“집정관의 권위는 군림이 아니라 시민의 주권을 겸손히 받드는 데서 나온다.”", desc: "민회에 들어서며 집정관의 상징인 파스케스를 낮추어 절하며" }
    ],
    graph: {
      nodes: [
        { id: "publicola", name: "푸블리콜라", r: 24, color: "#e5be75", type: "영웅", desc: "로마 공화정의 초대 집정관", insight: "스스로 권력을 낮추어 자유를 반석 위에 올림" },
        { id: "brutus", name: "브루투스", r: 20, color: "#3b82f6", type: "공동 건국자", desc: "왕을 몰아낸 혁명의 동지", insight: "공화정을 위해 반역한 아들들까지 처형한 냉혹한 애국자" },
        { id: "tarquin", name: "타르퀴니우스", r: 18, color: "#ef4444", type: "적대/폭군", desc: "로마의 마지막 오만한 왕", insight: "시민들에게 축출되어 왕좌를 잃음" },
        { id: "porsena", name: "라르스 포르세나", r: 18, color: "#10b981", type: "외적/외교", desc: "에트루리아의 왕", insight: "로마인의 결연한 용기에 감복하여 평화 협정을 맺음" }
      ],
      links: [
        { source: "publicola", target: "brutus", label: "공화정 수립" },
        { source: "publicola", target: "tarquin", label: "폭군 추방" },
        { source: "publicola", target: "porsena", label: "강화 조약" }
      ]
    }
  }
};

// 고전 명화 아카이브 데이터 (준비 중)
const heroGalleries = {
  theseus: [{
      title: "아버지의 검을 찾는 테세우스",
      originalTitle: "Thésée retrouve l'épée de son père (Theseus Finds His Father's Sword)",
      artist: "니콜라 푸생 (Nicolas Poussin) & 장 르메르 (Jean Lemaire)",
      year: "1638년경",
      museum: "프랑스 샹티이 콩데 미술관 (Condé Museum)",
      license: "Public Domain",
      imgUrl: "images/theseus-1.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Th%C3%A9s%C3%A9e_retrouve_l%27%C3%A9p%C3%A9e_de_son_p%C3%A8re_-_Poussin_-_c1638.jpg",
      desc: "어머니 아이트라의 인도를 받아 거대한 바위를 들어 올리고, 친부 아이게우스가 숨겨둔 청동 검과 가죽 샌들을 꺼내며 영웅의 여정을 시작하는 결의에 찬 순간입니다."
    },
           {
      title: "미노타우로스와 싸우는 테세우스",
      originalTitle: "Theseus Fighting the Minotaur",
      artist: "앙투안 루이 바리 (Antoine-Louis Barye)",
      year: "1857년경 주조 (모델 n.d.)",
      museum: "미국 워싱턴 국립 미술관 (National Gallery of Art)",
      license: "Public Domain (CC0)",
      imgUrl: "images/theseus-2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Antoine-Louis_Barye,_Theseus_Fighting_the_Minotaur,_model_n.d.,_cast_1857-1873,_NGA_195000.jpg",
      desc: "크레타섬의 미궁(라비린토스) 깊은 곳에서 아테네 청년들을 제물로 삼던 반인반우 괴물 미노타우로스를 붙잡아 칼로 내리치는 영웅 테세우스의 격투를 역동적으로 빚어낸 청동 조각상입니다."
    },
            {
      title: "실타래를 건네는 아리아드네와 테세우스",
      originalTitle: "Ariadne Helping Theseus by Giving him a Ball of Thread",
      artist: "요한 하인리히 티슈바인 (Johann Heinrich Tischbein)",
      year: "1779년",
      museum: "개인 소장 (Private collection)",
      license: "Public Domain",
      imgUrl: "images/theseus-3.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Johann_Heinrich_Tischbein_-_Ariadne_Helping_Theseus_by_Giving_him_a_Ball_of_Thread,_1779.jpg",
      desc: "미노타우로스가 갇힌 크레타 미궁으로 들어가는 테세우스를 위해, 미궁을 빠져나올 수 있는 붉은 실타래와 검을 건네며 탈출을 돕는 크레타 공주 아리아드네의 애절한 순간을 묘사했습니다."
    },
            {
      title: "악당 스키론을 절벽 아래로 던지는 테세우스",
      originalTitle: "Attic Red-Figure Kylix: Theseus Killing Skiron",
      artist: "두리스 (Douris, 화가) & 퓌톤 (Python, 도공)",
      year: "기원전 470년경 (고전기 초기)",
      museum: "독일 베를린 구 박물관 (Altes Museum)",
      license: "Public Domain",
      imgUrl: "images/theseus-4.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Douris_ARV_438_130_Theseus_killing_Skiron_-_battle_scene_-_men_and_youths_(01).jpg",
      desc: "아테네로 향하는 육로에서 나그네들에게 발을 씻게 한 뒤 절벽 아래로 차 바다거북의 먹이로 주던 악당 스키론을 똑같은 방식으로 거대한 절벽 아래로 내던져 응징하는 테세우스의 무용담을 담은 고대 아티카 적화식 도자기입니다."
    }
           ],
  romulus: [{
      title: "로물루스와 레무스",
      originalTitle: "Romulus and Remus",
      artist: "페테르 파울 루벤스 (Peter Paul Rubens)",
      year: "1615-1616년경",
      museum: "이탈리아 로마 카피톨리니 박물관 (Capitoline Museums)",
      license: "Public Domain",
      imgUrl: "images/romulus-1.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rubens,_Peter_Paul_-_Romulus_and_Remus_-_1614-1616.jpg",
      desc: "테베레강가에 버려진 쌍둥이 형제 로물루스와 레무스가 암늑대 루파의 젖을 먹으며 생명을 보전하고, 그 뒤편으로 목자 파우스툴루스가 다가와 이들을 발견하는 로마 건국 신화의 결정적 순간을 역동적으로 담아낸 바로크 명화입니다."
    },
    {
      title: "카피톨리노의 암늑대 (루파 카피톨리나)",
      originalTitle: "Lupa Capitolina (Capitoline Wolf)",
      artist: "작자 미상 (에트루리아 청동 공예 전통 / 안토니오 델 폴라이올로 추정 추가)",
      year: "기원전 5세기경 (쌍둥이는 15세기 말 추가)",
      museum: "이탈리아 로마 카피톨리니 박물관 보존관 (Palazzo dei Conservatori)",
      license: "Public Domain",
      imgUrl: "images/romulus-2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lupa_Capitolina,_Rome.jpg",
      desc: "버려진 핏덩이 형제 로물루스와 레무스를 품어 젖을 먹인 전설적인 암늑대 루파를 형상화한 조각으로, 제국 로마의 야생적 끈기와 불굴의 건국 정신을 증언하는 대표 유물입니다."
    },
    {
      title: "사비니 여인들의 중재",
      originalTitle: "The Intervention of the Sabine Women (Les Sabines)",
      artist: "자크 루이 다비드 (Jacques-Louis David)",
      year: "1799년",
      museum: "프랑스 파리 루브르 박물관 (Louvre Museum)",
      license: "Public Domain",
      imgUrl: "images/romulus-3.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Intervention_of_the_Sabine_Women_-_David_(Louvre_INV_3691).jpg",
      desc: "로마군을 이끄는 로물루스와 사비니군을 이끄는 타티우스 왕 사이의 격전 한가운데에서, 에르실리아를 비롯한 사비니 여인들이 어린아이들을 안고 뛰어들어 피비린내 나는 전쟁을 멈추고 두 민족의 화해와 통합을 이끌어낸 극적인 순간입니다."
    },
    {
      title: "아크론 왕을 꺾은 로물루스의 개선",
      originalTitle: "Romulus, vincitore di Acron, porta il bottino nel tempio di Giano",
      artist: "장 오귀스트 도미니크 앵그르 (Jean-Auguste-Dominique Ingres)",
      year: "1812년",
      museum: "프랑스 파리 국립고등미술학교 (Beaux-Arts de Paris)",
      license: "Public Domain",
      imgUrl: "images/romulus-4.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean-auguste-dominique_ingres,_romolo,_vincitore_di_acron,_porta_il_bottino_nel_tempio_di_giano,_1812,_00.jpg",
      desc: "로마를 침공한 카이니나의 왕 아크론을 일대일 결투로 베고 쓰러뜨린 뒤, 적장의 화려한 갑옷을 참나무에 걸어 유피테르 신전에 바치는 최초의 '스폴리아 오피마(최고 전리품)' 봉헌 행렬을 웅장하게 묘사한 신고전주의 걸작입니다."
    }
           ],
  lycurgus: [
    {
      title: "스파르타의 입법자 리쿠르고스",
      originalTitle: "Lycurgus (Lycurgus of Sparta)",
      artist: "메리 조셉 블론델 (Merry-Joseph Blondel)",
      year: "1828년",
      museum: "프랑스 아미앵 피카르디 박물관 (Musée de Picardie)",
      license: "Public Domain",
      imgUrl: "images/lycurgus-1.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lycurgus_of_Sparta,_Merry_Joseph_Blondel.jpg",
      desc: "스파르타의 전설적인 대입법관 리쿠르고스가 방패와 창을 배경으로 붉은 망토를 두른 채 깊은 사색에 잠겨 있는 역사화로, 사리사욕을 버리고 오직 조국의 기틀과 절제의 법률을 세우고자 고뇌하는 위엄을 담아냈습니다."
    },
    {
      title: "훈련하는 젊은 스파르타인들",
      originalTitle: "Young Spartans Exercising",
      artist: "에드가 드가 (Edgar Degas)",
      year: "1860년경",
      museum: "영국 런던 내셔널 갤러리 (National Gallery, London)",
      license: "Public Domain",
      imgUrl: "images/lycurgus-2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Spartans_National_Gallery_NG3860.jpg",
      desc: "플루타르코스가 전하는 리쿠르고스의 입법에 따라, 신체를 단련하여 건강한 아이를 낳고 강인한 공동체를 이루기 위해 소년들과 씨름하며 겨루기를 청하는 스파르타 소녀들과 청년들의 모습을 독창적으로 포착한 근대 역사화입니다."
    },
    {
      title: "델포이의 무녀에게 신탁을 구하는 리쿠르고스",
      originalTitle: "Lycurgus Consulting the Pythia",
      artist: "외젠 들라크루아 (Eugène Delacroix)",
      year: "1835-1845년경",
      museum: "미국 미시간 대학교 미술관 (University of Michigan Museum of Art)",
      license: "Public Domain",
      imgUrl: "images/lycurgus-3.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Eug%C3%A8ne_Delacroix_-_Lycurgus_Consulting_the_Pythia_-_Google_Art_Project_4_(detail).jpg",
      desc: "스파르타의 법률 체계를 반포하기 전, 델포이 아폴론 신전의 무녀 퓌티아를 찾아가 자신이 세울 법률이 신의 뜻에 합당한지 신탁을 구하는 리쿠르고스의 경건한 구도자적 모습을 포착한 낭만주의 유화입니다."
    },
    {
      title: "고대 스파르타의 아크로폴리스 극장 유적",
      originalTitle: "Ruins of the Theatre at Ancient Sparta",
      artist: "Peulle (사진 작가)",
      year: "2015년 촬영 (기원전 1세기경 유적)",
      museum: "그리스 스파르티 고대 유적지 현장",
      license: "CC BY-SA 4.0",
      imgUrl: "images/lycurgus-4.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sparta_teater.JPG",
      desc: "벽돌로 된 성벽 대신 단련된 시민의 결속을 조국의 방벽으로 삼았던 리쿠르고스의 철학이 깃든 고대 스파르타 극장 터와 뒤편으로 펼쳐진 현대 스파르티 시가지의 전경입니다."
    }
  ],
  numa: [],
  solon: [],
  publicola: []
};
