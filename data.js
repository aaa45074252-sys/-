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
// 4. 고전 명화 아카이브 데이터 (공식 Open Access 직결 주소)
// ==========================================
const heroGalleries = {
  theseus: [
    {
      title: "미노타우로스를 쓰러뜨리는 테세우스",
      originalTitle: "Theseus and the Minotaur",
      artist: "앙투안 루이 바리 (Antoine-Louis Barye)",
      year: "1857년",
      museum: "미국 메트로폴리탄 미술관",
      license: "Public Domain (CC0)",
      imgUrl: "https://images.metmuseum.org/CRDImages/ep/original/DP-14286-001.jpg",
      sourceUrl: "https://www.metmuseum.org/art/collection/search/435621",
      desc: "크레타의 미궁 속에서 청년들을 위협하던 괴물 미노타우로스를 단숨에 제압하는 영웅 테세우스의 조형미를 담은 걸작입니다."
    },
    {
      title: "낙소스 섬에 잠든 아리아드네",
      originalTitle: "Ariadne Asleep on the Island of Naxos",
      artist: "존 반더린 (John Vanderlyn)",
      year: "1814년",
      museum: "미국 펜실베이니아 미술아카데미",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/John_Vanderlyn_-_Ariadne_Asleep_on_the_Island_of_Naxos_-_Google_Art_Project.jpg/800px-John_Vanderlyn_-_Ariadne_Asleep_on_the_Island_of_Naxos_-_Google_Art_Project.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Vanderlyn_-_Ariadne_Asleep_on_the_Island_of_Naxos_-_Google_Art_Project.jpg",
      desc: "미궁의 비밀을 알려주고 테세우스와 함께 탈출했으나, 신탁에 의해 낙소스 섬에 홀로 남겨진 비운의 공주 아리아드네입니다."
    },
    {
      title: "페이리토오스의 결혼식과 켄타우로스의 난투",
      originalTitle: "The Battle of the Lapiths and Centaurs",
      artist: "피에로 디 코시모 (Piero di Cosimo)",
      year: "1482년경",
      museum: "영국 런던 내셔널 갤러리",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Piero_di_Cosimo_-_The_Fight_between_the_Lapiths_and_the_Centaurs.jpg/800px-Piero_di_Cosimo_-_The_Fight_between_the_Lapiths_and_the_Centaurs.jpg",
      desc: "벗 페이리토오스의 혼인 잔치에서 난동을 부리는 반인반마 켄타우로스 종족을 격퇴하는 테세우스의 용맹을 묘사했습니다."
    },
    {
      title: "아테네의 아크로폴리스 전경",
      originalTitle: "The Parthenon",
      artist: "프레더릭 에드윈 처치 (Frederic Edwin Church)",
      year: "1871년",
      museum: "미국 메트로폴리탄 미술관",
      license: "Public Domain (CC0)",
      imgUrl: "https://images.metmuseum.org/CRDImages/am/original/DP118942.jpg",
      sourceUrl: "https://www.metmuseum.org/art/collection/search/10484",
      desc: "테세우스가 흩어진 부족들을 규합하여 연방을 세우고 고대 지중해 민주정의 번영을 꽃피운 아테네의 영광을 그린 풍경화입니다."
    }
  ],
  romulus: [
    {
      title: "카피톨리노의 암늑대와 쌍둥이",
      originalTitle: "The Capitoline Wolf with Romulus and Remus",
      artist: "루벤스 공방 (Peter Paul Rubens Workshop)",
      year: "1616년경",
      museum: "이탈리아 카피톨리니 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Peter_Paul_Rubens_-_Romulus_and_Remus_-_WGA20297.jpg/800px-Peter_Paul_Rubens_-_Romulus_and_Remus_-_WGA20297.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_-_Romulus_and_Remus_-_WGA20297.jpg",
      desc: "버려진 쌍둥이 형제 로물루스와 레무스를 거두어 젖을 먹여 살려낸 암늑대 루파와 티베르 신의 보호를 묘사한 작품입니다."
    },
    {
      title: "사비니 여인들의 중재",
      originalTitle: "The Intervention of the Sabine Women",
      artist: "자크 루이 다비드 (Jacques-Louis David)",
      year: "1799년",
      museum: "프랑스 파리 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/The_Intervention_of_the_Sabine_Women.jpg/800px-The_Intervention_of_the_Sabine_Women.jpg",
      desc: "로마군과 사비니 전사들 사이에 어린아이들을 안고 뛰어들어 양측의 유혈 충돌을 멈추게 한 여인들의 헌신입니다."
    },
    {
      title: "로물루스의 개선과 전리품 봉헌",
      originalTitle: "Romulus, Conqueror of Acron",
      artist: "장 오귀스트 도미니크 앵그르 (J.A.D. Ingres)",
      year: "1812년",
      museum: "프랑스 파리 국립고등미술학교",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Jean-auguste-dominique_ingres%2C_romolo%2C_vincitore_di_acron%2C_porta_il_bottino_nel_tempio_di_giano%2C_1812%2C_00.jpg/800px-Jean-auguste-dominique_ingres%2C_romolo%2C_vincitore_di_acron%2C_porta_il_bottino_nel_tempio_di_giano%2C_1812%2C_00.jpg",
      desc: "도시를 위협한 카이니나 왕 아크론을 직접 꺾고 최고의 전리품을 바치며 로마의 국격을 확립하는 장면입니다."
    },
    {
      title: "로물루스와 레무스의 발견",
      originalTitle: "The Shepherd Faustulus Finding Romulus and Remus",
      artist: "니콜라 샤프롱 (Nicolas Chaperon)",
      year: "1638년경",
      museum: "미국 댈러스 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cortona_Romulus_and_Remus_Given_Shelter_by_Faustulus_01.jpg/800px-Cortona_Romulus_and_Remus_Given_Shelter_by_Faustulus_01.jpg",
      desc: "왕실 양치기 파우스툴루스가 무화과나무 아래에서 암늑대의 젖을 먹던 영웅 형제를 찾아내 가정으로 데려오는 순간입니다."
    }
  ],
  lycurgus: [
    {
      title: "스파르타 청년들의 체력 단련",
      originalTitle: "Young Spartans Exercising",
      artist: "에드가 드가 (Edgar Degas)",
      year: "1860년경",
      museum: "영국 런던 내셔널 갤러리",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Edgar_Degas_-_Young_Spartans_Exercising.jpg/800px-Edgar_Degas_-_Young_Spartans_Exercising.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_Young_Spartans_Exercising.jpg",
      desc: "리쿠르고스의 국가 교육 체계(아고게)에 따라 강인한 신체와 용기를 단련하는 스파르타의 소년·소녀들입니다."
    },
    {
      title: "스파르타의 검소한 공동 식사",
      originalTitle: "A Spartan Meal",
      artist: "루이지 무시니 (Luigi Mussini)",
      year: "1850년",
      museum: "이탈리아 피티 궁전 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Luigi_mussini%2C_un_pasto_spartano%2C_1850%2C_02.JPG/800px-Luigi_mussini%2C_un_pasto_spartano%2C_1850%2C_02.JPG",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Luigi_mussini,_un_pasto_spartano,_1850,_02.JPG",
      desc: "귀족과 평민의 차별과 사치를 없애기 위해 같은 식탁에서 소박한 음식을 나누게 한 시시티아 제도입니다."
    },
    {
      title: "레오니다스와 테르모필레의 전사들",
      originalTitle: "Leonidas at Thermopylae",
      artist: "자크 루이 다비드 (Jacques-Louis David)",
      year: "1814년",
      museum: "프랑스 파리 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/David_-_Leonidas_at_Thermopylae.jpg/800px-David_-_Leonidas_at_Thermopylae.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:David_-_Leonidas_at_Thermopylae.jpg",
      desc: "리쿠르고스의 입법 정신을 이어받아 성벽 대신 조국을 위해 목숨을 바친 스파르타 전사들의 비장한 기개입니다."
    },
    {
      title: "델포이의 신탁을 받는 여사제",
      originalTitle: "The Priestess of Delphi",
      artist: "존 콜리어 (John Collier)",
      year: "1891년",
      museum: "호주 빅토리아 국립 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/John_Collier_-_Priestess_of_Delphi.jpg/800px-John_Collier_-_Priestess_of_Delphi.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Collier_-_Priestess_of_Delphi.jpg",
      desc: "리쿠르고스가 스파르타 헌법 레트라를 제정하기 전, 입법의 정당성을 묻기 위해 찾았던 아폴론 신탁소의 제례 장면입니다."
    }
  ],
  numa: [
    {
      title: "베스타의 성스러운 불꽃을 지키는 여사제들",
      originalTitle: "The Vestal Virgins Offering Sacrifice",
      artist: "장 라우 (Jean Raoux)",
      year: "1727년",
      museum: "프랑스 릴 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jean_Raoux_-_Les_Vierges_vestales.jpg/800px-Jean_Raoux_-_Les_Vierges_vestales.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean_Raoux_-_Les_Vierges_vestales.jpg",
      desc: "누마 왕이 제정하여 로마의 평화와 안녕을 기원하며 순결한 처녀들이 꺼지지 않는 불꽃을 받들던 제례입니다."
    },
    {
      title: "야누스 신전의 문을 닫는 평화의 의식",
      originalTitle: "The Temple of Janus Closed in Peace",
      artist: "샤를 르 브룅 (Charles Le Brun)",
      year: "1681년",
      museum: "프랑스 베르사유 궁전",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Charles_Le_Brun_-_The_Temple_of_Janus_Closed.jpg/800px-Charles_Le_Brun_-_The_Temple_of_Janus_Closed.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Charles_Le_Brun_-_The_Temple_of_Janus_Closed.jpg",
      desc: "전쟁이 없을 때만 닫히는 야누스 신전의 문을 43년의 치세 내내 닫아두며 이룩한 태평성대를 기리는 그림입니다."
    },
    {
      title: "신전의 제단에 바치는 제례",
      originalTitle: "A Sacrificial Altar in Ancient Rome",
      artist: "조반니 바티스타 피라네시 (G.B. Piranesi)",
      year: "1778년",
      museum: "미국 메트로폴리탄 미술관",
      license: "Public Domain (CC0)",
      imgUrl: "https://images.metmuseum.org/CRDImages/dp/original/DP823798.jpg",
      sourceUrl: "https://www.metmuseum.org/art/collection/search/362572",
      desc: "누마 폼필리우스가 정비한 사제단(폰티펙스)과 12개월 종교 달력에 따라 거행되던 고대 로마의 경건한 제단입니다."
    },
    {
      title: "숲속의 샘과 명상",
      originalTitle: "Landscape with Nymphs and a Sacred Spring",
      artist: "클로드 로랭 (Claude Lorrain)",
      year: "1650년경",
      museum: "스페인 프라도 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Claude_Lorrain_-_Landscape_with_the_Nymph_Egeria.jpg/800px-Claude_Lorrain_-_Landscape_with_the_Nymph_Egeria.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Claude_Lorrain_-_Landscape_with_the_Nymph_Egeria.jpg",
      desc: "누마 왕이 홀로 숲속으로 들어가 샘의 님프 에게리아와 교감하며 정의로운 법률의 영감을 얻던 성스러운 숲입니다."
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
      desc: "부귀를 뽐내는 리디아의 왕에게 '인간의 행복은 생의 마지막 날까지는 결코 알 수 없다'고 일침을 놓는 솔론의 일화입니다."
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
      desc: "솔론이 세운 법치와 민주주의의 바탕 위에서 인류 문명의 지혜를 꽃피운 고대 그리스 철학자들의 군상입니다."
    },
    {
      title: "아테네 아크로폴리스의 위용",
      originalTitle: "The Acropolis of Athens",
      artist: "레오 폰 클렌체 (Leo von Klenze)",
      year: "1846년",
      museum: "독일 뮌헨 노이에 피나코테크",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Leo_von_Klenze_-_The_Acropolis_at_Athens_-_Neue_Pinakothek.jpg/800px-Leo_von_Klenze_-_The_Acropolis_at_Athens_-_Neue_Pinakothek.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Leo_von_Klenze_-_The_Acropolis_at_Athens_-_Neue_Pinakothek.jpg",
      desc: "채무 노예제를 없애고 시민 법원을 열어 평민들의 권리를 세운 솔론의 개혁 위에 완성된 아테네의 중심지입니다."
    },
    {
      title: "파르테논 신전의 고전 회화",
      originalTitle: "Ruins of the Parthenon",
      artist: "샌퍼드 로빈슨 기포드 (Sanford Robinson Gifford)",
      year: "1880년",
      museum: "미국 워싱턴 국립 미술관",
      license: "Public Domain (CC0)",
      imgUrl: "https://images.metmuseum.org/CRDImages/am/original/DT80.jpg",
      sourceUrl: "https://www.metmuseum.org/art/collection/search/10928",
      desc: "지혜의 여신 아테나를 모시며 합리적인 법치와 토론 문화를 꽃피운 아테네 민주정의 주춧돌을 기리는 명화입니다."
    }
  ],
  publicola: [
    {
      title: "브루투스와 공화정의 결단",
      originalTitle: "The Lictors Bring to Brutus the Bodies of His Sons",
      artist: "자크 루이 다비드 (Jacques-Louis David)",
      year: "1789년",
      museum: "프랑스 파리 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jacques-Louis_David_-_The_Lictors_Bring_to_Brutus_the_Bodies_of_His_Sons_-_WGA5997.jpg/800px-Jacques-Louis_David_-_The_Lictors_Bring_to_Brutus_the_Bodies_of_His_Sons_-_WGA5997.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David_-_The_Lictors_Bring_to_Brutus_the_Bodies_of_His_Sons_-_WGA5997.jpg",
      desc: "동지 브루투스와 함께 폭군 왕정을 몰아내고, 개인의 비극 앞에서도 공화정의 기틀을 바로 세운 푸블리콜라의 시대입니다."
    },
    {
      title: "화로에 손을 태우는 무키우스 스카이볼라",
      originalTitle: "Mucius Scaevola in the Presence of Lars Porsenna",
      artist: "마티아스 스톰 (Matthias Stom)",
      year: "1640년대",
      museum: "호주 뉴사우스웨일스 주립 미술관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Matthias_Stom_-_Mucius_Scaevola_in_the_Presence_of_Lars_Porsenna.jpg/800px-Matthias_Stom_-_Mucius_Scaevola_in_the_Presence_of_Lars_Porsenna.jpg",
      desc: "푸블리콜라가 이끌던 초기 로마 공화정을 침공한 적장 앞에서 자유를 지키기 위해 불굴의 용기를 보여준 로마 시민입니다."
    },
    {
      title: "테베레강을 건너는 클로엘리아",
      originalTitle: "Cloelia Passing the Tiber",
      artist: "자크 스텔라 (Jacques Stella)",
      year: "1640년경",
      museum: "프랑스 파리 루브르 박물관",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Jacques_Stella_-_Cloelia_passing_the_Tiber.jpg/800px-Jacques_Stella_-_Cloelia_passing_the_Tiber.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jacques_Stella_-_Cloelia_passing_the_Tiber.jpg",
      desc: "외적의 포위 속에서 평화 조약을 맺던 푸블리콜라 집정관 시절, 포로로 잡혔다 테베레강을 헤엄쳐 탈출한 용감한 로마 소녀입니다."
    },
    {
      title: "로마 공화정 원로원 의회",
      originalTitle: "The Roman Senate in Session",
      artist: "체사레 마카리 (Cesare Maccari)",
      year: "1889년",
      museum: "이탈리아 로마 마다마 궁전",
      license: "Public Domain",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Maccari-Cicero.jpg/800px-Maccari-Cicero.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Maccari-Cicero.jpg",
      desc: "집정관의 권한을 상징하는 도끼를 낮추고 시민들에게 주권이 있음을 선언한 '시민의 벗' 푸블리콜라의 헌정 질서가 이어진 로마 의회입니다."
    }
  ]
};
