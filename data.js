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


// ==========================================
// 4. 고전 명화 아카이브 데이터 (각 영웅당 4점)
// ==========================================
// ==========================================
// 4. 고전 명화 아카이브 데이터 (직결 검증 주소)
// ==========================================
const heroGalleries = {
  theseus: [
    {
      title: "바위를 들어 올리는 테세우스",
      originalTitle: "Thésée retrouve l'épée de son père",
      artist: "니콜라 푸생 (Nicolas Poussin)",
      year: "1638년경",
      museum: "프랑스 샹티이 콩데 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Th%C3%A9s%C3%A9e_retrouve_l%27%C3%A9p%C3%A9e_de_son_p%C3%A8re_-_Poussin_-_c1638.jpg/800px-Th%C3%A9s%C3%A9e_retrouve_l%27%C3%A9p%C3%A9e_de_son_p%C3%A8re_-_Poussin_-_c1638.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Th%C3%A9s%C3%A9e_retrouve_l%27%C3%A9p%C3%A9e_de_son_p%C3%A8re_-_Poussin_-_c1638.jpg",
      desc: "어머니 아이트라의 안내를 받아 부친 아이게우스가 숨겨둔 검과 샌들을 꺼내는 결의를 묘사한 작품입니다."
    },
    {
      title: "미노타우로스와 싸우는 테세우스",
      originalTitle: "Theseus Fighting the Minotaur",
      artist: "앙투안 루이 바리 (Antoine-Louis Barye)",
      year: "1857년경",
      museum: "미국 워싱턴 국립 미술관",
      license: "Public Domain (CC0)",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Antoine-Louis_Barye%2C_Theseus_Fighting_the_Minotaur%2C_model_n.d.%2C_cast_1857-1873%2C_NGA_195000.jpg/800px-Antoine-Louis_Barye%2C_Theseus_Fighting_the_Minotaur%2C_model_n.d.%2C_cast_1857-1873%2C_NGA_195000.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Antoine-Louis_Barye,_Theseus_Fighting_the_Minotaur,_model_n.d.,_cast_1857-1873,_NGA_195000.jpg",
      desc: "크레타 미궁에서 괴물 미노타우로스를 쓰러뜨리는 영웅 테세우스의 격투를 역동적으로 조형한 청동상입니다."
    },
    {
      title: "테세우스에게 실타래를 건네는 아리아드네",
      originalTitle: "Ariadne Helping Theseus by Giving him a Ball of Thread",
      artist: "요한 하인리히 티슈바인 (Johann Heinrich Tischbein)",
      year: "1779년",
      museum: "개인 소장",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Johann_Heinrich_Tischbein_-_Ariadne_Helping_Theseus_by_Giving_him_a_Ball_of_Thread%2C_1779.jpg/800px-Johann_Heinrich_Tischbein_-_Ariadne_Helping_Theseus_by_Giving_him_a_Ball_of_Thread%2C_1779.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Johann_Heinrich_Tischbein_-_Ariadne_Helping_Theseus_by_Giving_him_a_Ball_of_Thread,_1779.jpg",
      desc: "미궁 속으로 향하는 테세우스가 무사히 길을 찾아 돌아올 수 있도록 붉은 실타래를 쥐여주는 장면입니다."
    },
    {
      title: "악당을 소탕하고 여인들을 구출하는 테세우스와 페이리토오스",
      originalTitle: "Theseus and Pirithous Clearing the Earth of Brigands",
      artist: "앙젤리크 몽제 (Angélique Mongez)",
      year: "1806년",
      museum: "아르한겔스코예 궁전 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Theseus_and_Pirithous%2C_1806%2C_by_Angelique_Mongez.jpg/800px-Theseus_and_Pirithous%2C_1806%2C_by_Angelique_Mongez.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Theseus_and_Pirithous,_1806,_by_Angelique_Mongez.jpg",
      desc: "도적 떼와 약탈자들을 평정하고 질서를 바로잡는 테세우스와 친구 페이리토오스의 기백을 묘사한 대작입니다."
    }
  ],
  romulus: [
    {
      title: "카피톨리노의 암늑대 (로물루스와 레무스)",
      originalTitle: "Capitoline Wolf (Lupa Capitolina)",
      artist: "고대 에트루리아 / 안토니오 델 폴라이올로",
      year: "기원전 5세기경 (쌍둥이는 15세기경 추가)",
      museum: "이탈리아 로마 카피톨리니 박물관",
      license: "Public Domain (CC0)",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Capitoline_Wolf%2C_Musei_Capitolini.jpg/800px-Capitoline_Wolf%2C_Musei_Capitolini.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Capitoline_Wolf,_Musei_Capitolini.jpg",
      desc: "팔라티노 언덕 근처에 버려진 쌍둥이 형제를 암늑대 루파가 젖을 물려 길러낸, 로마 제국의 영원한 상징입니다."
    },
    {
      title: "로물루스와 레무스를 거두는 파우스툴루스",
      originalTitle: "Romulus and Remus Given Shelter by Faustulus",
      artist: "피에트로 다 코르토나 (Pietro da Cortona)",
      year: "1643년경",
      museum: "프랑스 파리 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cortona_Romulus_and_Remus_Given_Shelter_by_Faustulus_01.jpg/800px-Cortona_Romulus_and_Remus_Given_Shelter_by_Faustulus_01.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cortona_Romulus_and_Remus_Given_Shelter_by_Faustulus_01.jpg",
      desc: "테베레강가에서 늑대의 젖을 먹고 자란 쌍둥이 형제를 양치기 파우스툴루스가 발견하여 집으로 데려오는 순간입니다."
    },
    {
      title: "아크론 왕을 꺾은 로물루스의 개선",
      originalTitle: "Romulus' Victory Over Acron",
      artist: "장 오귀스트 도미니크 앵그르 (J.A.D. Ingres)",
      year: "1812년",
      museum: "프랑스 파리 국립고등미술학교",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Jean-auguste-dominique_ingres%2C_romolo%2C_vincitore_di_acron%2C_porta_il_bottino_nel_tempio_di_giano%2C_1812%2C_00.jpg/800px-Jean-auguste-dominique_ingres%2C_romolo%2C_vincitore_di_acron%2C_porta_il_bottino_nel_tempio_di_giano%2C_1812%2C_00.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean-auguste-dominique_ingres,_romolo,_vincitore_di_acron,_porta_il_bottino_nel_tempio_di_giano,_1812,_00.jpg",
      desc: "로마를 침공한 카이니나의 왕 아크론을 결투로 베고 최초의 최고 전리품(Spolia Opima)을 운반하는 장면입니다."
    },
    {
      title: "사비니 여인들의 중재",
      originalTitle: "The Intervention of the Sabine Women",
      artist: "자크 루이 다비드 (Jacques-Louis David)",
      year: "1799년",
      museum: "프랑스 파리 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/The_Intervention_of_the_Sabine_Women.jpg/800px-The_Intervention_of_the_Sabine_Women.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Intervention_of_the_Sabine_Women.jpg",
      desc: "로마와 사비니족 간의 전쟁터에서 어린아이들을 안고 평화를 호소하며 분쟁을 종식시킨 여인들의 모습입니다."
    }
  ],
  lycurgus: [
    {
      title: "스파르타인들에게 법을 주는 리쿠르고스",
      originalTitle: "Lycurgus of Sparta Giving Laws to the Spartans",
      artist: "메리 조셉 블론델 (Merry-Joseph Blondel)",
      year: "1828년",
      museum: "프랑스 피카르디 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Merry-Joseph_Blondel_-_Lycurgus.jpg/800px-Merry-Joseph_Blondel_-_Lycurgus.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Merry-Joseph_Blondel_-_Lycurgus.jpg",
      desc: "델포이에서 가져온 신탁에 기초해 엄격하고 평등한 군사 국가 스파르타의 헌법을 반포하는 리쿠르고스의 위엄을 그렸습니다."
    },
    {
      title: "시민들에게 법 준수를 맹세시키는 리쿠르고스",
      originalTitle: "Lycurgus Swears the Spartans to Obey his Laws",
      artist: "외젠 들라크루아 (Eugène Delacroix)",
      year: "1840년대",
      museum: "프랑스 파리 부르봉 궁전",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Delacroix_Lycurgus.jpg/800px-Delacroix_Lycurgus.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Delacroix_Lycurgus.jpg",
      desc: "법을 결코 바꾸지 않겠다는 맹세를 시민들에게 받고 스스로 굶어 죽음으로써 법을 영구화한 일화를 담았습니다."
    },
    {
      title: "스파르타 청년들의 체력 단련",
      originalTitle: "Young Spartans Exercising",
      artist: "에드가 드가 (Edgar Degas)",
      year: "1860년경",
      museum: "영국 런던 내셔널 갤러리",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Edgar_Degas_-_Young_Spartans_Exercising.jpg/800px-Edgar_Degas_-_Young_Spartans_Exercising.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_Young_Spartans_Exercising.jpg",
      desc: "리쿠르고스의 국가 교육 체계(아고게)에 따라 강인한 신체와 전사 정신을 기르는 스파르타 청년들의 훈련 모습입니다."
    },
    {
      title: "스파르타의 공동 식사 (시시티아)",
      originalTitle: "A Spartan Meal",
      artist: "루이지 무시니 (Luigi Mussini)",
      year: "1850년",
      museum: "이탈리아 피렌체 피티 궁전 현대미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Luigi_mussini%2C_un_pasto_spartano%2C_1850%2C_02.JPG/800px-Luigi_mussini%2C_un_pasto_spartano%2C_1850%2C_02.JPG",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Luigi_mussini,_un_pasto_spartano,_1850,_02.JPG",
      desc: "빈부격차와 사치를 없애기 위해 왕부터 일반 시민까지 한자리에 모여 검소한 음식을 나누어 먹던 규율입니다."
    }
  ],
  numa: [
    {
      title: "숲속의 님프 에게리아와 상의하는 누마 폼필리우스",
      originalTitle: "Numa Pompilius and the Nymph Egeria",
      artist: "펠리체 자니 (Felice Giani)",
      year: "1806년경",
      museum: "이탈리아 국립 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Giani_-_Numa_Pompilio_consigliato_dalla_ninfa_Egeria.jpg/800px-Giani_-_Numa_Pompilio_consigliato_dalla_ninfa_Egeria.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Giani_-_Numa_Pompilio_consigliato_dalla_ninfa_Egeria.jpg",
      desc: "성스러운 숲속 샘가에서 지혜의 님프 에게리아를 만나 로마의 제례와 종교 규율에 관한 영감을 받는 누마의 모습입니다."
    },
    {
      title: "베스타의 영원한 불꽃을 지키는 여사제들",
      originalTitle: "The Vestal Virgins",
      artist: "장 라우 (Jean Raoux)",
      year: "1727년",
      museum: "프랑스 릴 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jean_Raoux_-_Les_Vierges_vestales.jpg/800px-Jean_Raoux_-_Les_Vierges_vestales.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean_Raoux_-_Les_Vierges_vestales.jpg",
      desc: "누마 폼필리우스 왕이 창설하여 로마의 성스러운 불꽃이 꺼지지 않도록 지키는 순결한 여사제들의 의식입니다."
    },
    {
      title: "야누스 신전의 문을 닫는 로마인들",
      originalTitle: "The Temple of Janus Closed in Peace",
      artist: "샤를 르 브룅 (Charles Le Brun)",
      year: "1681년",
      museum: "프랑스 베르사유 궁전",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Charles_Le_Brun_-_The_Temple_of_Janus_Closed.jpg/800px-Charles_Le_Brun_-_The_Temple_of_Janus_Closed.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Charles_Le_Brun_-_The_Temple_of_Janus_Closed.jpg",
      desc: "전쟁 중에는 열려 있고 평화 시에는 닫히는 야누스의 문을 43년 치세 내내 닫아두며 이룩한 태평성대를 기린 그림입니다."
    },
    {
      title: "로마 왕관을 사양하는 현자 누마",
      originalTitle: "Numa Pompilius Refusing the Crown of Rome",
      artist: "알렉상드르 기유모 (Alexandre-François Caminade)",
      year: "1820년대",
      museum: "프랑스 국립 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Numa_Pompilius_refusing_the_crown.jpg/800px-Numa_Pompilius_refusing_the_crown.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Numa_Pompilius_refusing_the_crown.jpg",
      desc: "원로원 사절들이 찾아와 왕위에 오를 것을 청했으나 권력보다 평화로운 은둔을 더 귀하게 여겨 사양하던 순간입니다."
    }
  ],
  solon: [
    {
      title: "크로이소스 왕 앞의 솔론",
      originalTitle: "Solon and Croesus",
      artist: "헤라르트 판 혼토르스트 (Gerard van Honthorst)",
      year: "1624년",
      museum: "독일 함부르크 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gerard_van_Honthorst_-_Solon_and_Croesus_-_1624.jpg/800px-Gerard_van_Honthorst_-_Solon_and_Croesus_-_1624.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gerard_van_Honthorst_-_Solon_and_Croesus_-_1624.jpg",
      desc: "세상에서 가장 부유함을 뽐내는 리디아의 왕 크로이소스에게 '인간의 진정한 행복은 죽음을 맞이하기 전까지는 결코 속단할 수 없다'고 가르치는 솔론의 일화입니다."
    },
    {
      title: "솔론의 법전 제정과 연설",
      originalTitle: "Solon",
      artist: "메리 조셉 블론델 (Merry-Joseph Blondel)",
      year: "1828년",
      museum: "프랑스 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Merry-Joseph_Blondel_-_Solon.jpg/800px-Merry-Joseph_Blondel_-_Solon.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Merry-Joseph_Blondel_-_Solon.jpg",
      desc: "부유한 귀족과 가난한 평민 사이에서 균형을 맞추며, 채무 노예제를 철폐하고 아테네의 새로운 법전을 반포하는 대현자 솔론의 엄숙한 모습입니다."
    },
    {
      title: "아테네 아크로폴리스의 전경",
      originalTitle: "The Acropolis at Athens",
      artist: "레오 폰 클렌체 (Leo von Klenze)",
      year: "1846년",
      museum: "독일 뮌헨 노이에 피나코테크",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Leo_von_Klenze_-_The_Acropolis_at_Athens_-_Neue_Pinakothek.jpg/800px-Leo_von_Klenze_-_The_Acropolis_at_Athens_-_Neue_Pinakothek.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Leo_von_Klenze_-_The_Acropolis_at_Athens_-_Neue_Pinakothek.jpg",
      desc: "솔론의 법치 개혁과 민주주의적 제도 확립을 바탕으로 번영을 꽃피운 고대 아테네의 중심 성역을 재현한 풍경화입니다."
    },
    {
      title: "아테네 학당의 현자들",
      originalTitle: "The School of Athens",
      artist: "라파엘로 산치오 (Raphael)",
      year: "1511년",
      museum: "바티칸 사도 궁전",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/800px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
      desc: "솔론을 비롯한 7대 현인들이 뿌린 지혜와 합리주의 법치 철학의 전통 위에 서서 학문을 논하는 고대 그리스 사상가들의 모습입니다."
    }
  ],
  publicola: [
    {
      title: "브루투스와 푸블리콜라의 맹세",
      originalTitle: "The Lictors Bring to Brutus the Bodies of His Sons",
      artist: "자크 루이 다비드 (Jacques-Louis David)",
      year: "1789년",
      museum: "프랑스 파리 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jacques-Louis_David_-_The_Lictors_Bring_to_Brutus_the_Bodies_of_His_Sons_-_WGA5997.jpg/800px-Jacques-Louis_David_-_The_Lictors_Bring_to_Brutus_the_Bodies_of_His_Sons_-_WGA5997.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David_-_The_Lictors_Bring_to_Brutus_the_Bodies_of_His_Sons_-_WGA5997.jpg",
      desc: "공화정 전복 음모를 꾸민 친아들들을 처형한 동지 브루투스의 비극과, 그 뒤를 이어 홀로 로마 공화정의 헌정 질서를 지켜낸 푸블리콜라의 결단을 상징하는 대작입니다."
    },
    {
      title: "무키우스 스카이볼라의 용기",
      originalTitle: "Mucius Scaevola in the Presence of Lars Porsenna",
      artist: "마티아스 스톰 (Matthias Stom)",
      year: "1640년대",
      museum: "호주 뉴사우스웨일스 주립 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Matthias_Stom_-_Mucius_Scaevola_in_the_Presence_of_Lars_Porsenna.jpg/800px-Matthias_Stom_-_Mucius_Scaevola_in_the_Presence_of_Lars_Porsenna.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Matthias_Stom_-_Mucius_Scaevola_in_the_Presence_of_Lars_Porsenna.jpg",
      desc: "푸블리콜라가 이끌던 로마를 포위한 에트루리아 왕 포르세나 앞에서 자신의 오른손을 화로에 태우며 굴복하지 않는 로마 시민의 기개를 보인 순간입니다."
    },
    {
      title: "포르세나 진영을 탈출하는 클로엘리아",
      originalTitle: "Cloelia Passing the Tiber",
      artist: "자크 스텔라 (Jacques Stella)",
      year: "1640년경",
      museum: "프랑스 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Jacques_Stella_-_Cloelia_passing_the_Tiber.jpg/800px-Jacques_Stella_-_Cloelia_passing_the_Tiber.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jacques_Stella_-_Cloelia_passing_the_Tiber.jpg",
      desc: "푸블리콜라가 포르세나 왕과 평화 협정을 맺기 위해 보낸 인질 중, 테베레강을 헤엄쳐 탈출하며 로마의 자유를 지켜낸 영웅적 소녀 클로엘리아의 일화입니다."
    },
    {
      title: "원로원과 시민 앞의 집정관",
      originalTitle: "Cicero Denounces Catiline",
      artist: "체사레 마카리 (Cesare Maccari)",
      year: "1889년",
      museum: "이탈리아 로마 마다마 궁전",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Maccari-Cicero.jpg/800px-Maccari-Cicero.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Maccari-Cicero.jpg",
      desc: "집정관의 상징 도끼를 낮추고 민회에 머리 숙여 주권이 시민에게 있음을 천명한 푸블리콜라의 입법 원칙이 살아 숨 쉬는 로마 공화정 의회의 모습입니다."
    }
  ]
};
