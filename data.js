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
// 3. 영웅 상세 정보 (6인 4대 축 관계망 강화 버전)
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
        { id: "theseus", name: "테세우스", axis: "center", shapeType: "hero", type: "영웅", desc: "아테네 연방의 건국자이자 괴수 토벌자", insight: "아테네의 기틀을 다졌으나 망각으로 가족을 잃음" },
        // 북(12시): 혈통과 기원
        { id: "aegeus", name: "아이게우스", axis: "origins", shapeType: "person", type: "인간 부친", desc: "아테네의 왕", insight: "검은 돛을 보고 바다에 투신하여 에게해의 유래가 됨" },
        { id: "poseidon", name: "포세이돈", axis: "origins", shapeType: "person", type: "신적 부친", desc: "바다의 신", insight: "영웅에게 3가지 소원을 허락한 초자연적 후원자" },
        { id: "sword_sandals", name: "바위 밑 신표", axis: "origins", shapeType: "item", type: "유물", desc: "바위 밑 검과 가죽 샌들", insight: "성인이 되어 왕자임을 스스로 입증한 혈통의 징표" },
        // 동(3시): 모험과 정복
        { id: "periphetes", name: "페리페테스", axis: "labors", shapeType: "person", type: "악당", desc: "쇠곤봉을 휘두르던 도적", insight: "악당을 꺾고 그의 곤봉을 정의의 상징으로 삼음" },
        { id: "minotaur", name: "미노타우로스", axis: "labors", shapeType: "person", type: "괴수", desc: "크레타 라비린토스의 괴물", insight: "아테네가 짊어졌던 인신공양의 굴레를 끊어냄" },
        { id: "ariadne_thread", name: "아리아드네 실", axis: "labors", shapeType: "item", type: "지혜", desc: "미궁 탈출의 실타래", insight: "복잡한 난제를 푸는 '실마리'의 신화적 기원" },
        // 남(6시): 통합과 통치
        { id: "synoikismos", name: "시노이키스모스", axis: "politics", shapeType: "item", type: "정치 개혁", desc: "12개 부족 연합 통합", insight: "군주제를 버리고 민주정의 씨앗을 뿌린 위대한 결단" },
        { id: "pirithous", name: "페이리토오스", axis: "politics", shapeType: "person", type: "동맹/전우", desc: "라피테스족의 군주", insight: "지옥의 망각 의자까지 함께 묶였던 영혼의 맹우" },
        { id: "ship_of_theseus", name: "테세우스의 배", axis: "politics", shapeType: "item", type: "철학적 상징", desc: "보존된 성스러운 목선", insight: "부품이 바뀌어도 본질은 영원한가에 대한 존재론적 질문" },
        // 서(9시): 비극과 갈등
        { id: "black_sails", name: "망각의 검은 돛", axis: "tragedy", shapeType: "item", type: "비극의 표식", desc: "교체하지 못한 승전의 돛", insight: "승리의 자만이 불러온 돌이킬 수 없는 실수" },
        { id: "phaedra", name: "파이드라", axis: "tragedy", shapeType: "person", desc: "비운의 아테네 왕비", insight: "의붓아들을 연모하다 누명의 유서를 남기고 자결함" },
        { id: "hippolytus", name: "히폴리토스", axis: "tragedy", shapeType: "person", desc: "테세우스의 친아들", insight: "계모의 거짓 고발과 부친의 저주로 숨진 무고한 희생자" }
      ],
      links: [
        { source: "theseus", target: "aegeus", label: "부자 관계" },
        { source: "theseus", target: "poseidon", label: "신적 가호" },
        { source: "aegeus", target: "sword_sandals", label: "신표 안치" },
        { source: "theseus", target: "periphetes", label: "무력 징벌" },
        { source: "theseus", target: "minotaur", label: "미궁 처단" },
        { source: "minotaur", target: "ariadne_thread", label: "해법 제시" },
        { source: "theseus", target: "synoikismos", label: "연방 창건" },
        { source: "theseus", target: "pirithous", label: "혈맹 결의" },
        { source: "theseus", target: "ship_of_theseus", label: "기념 보존" },
        { source: "theseus", target: "black_sails", label: "치명적 망각" },
        { source: "theseus", target: "phaedra", label: "비극적 정략혼" },
        { source: "phaedra", target: "hippolytus", label: "무고와 참변" }
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
        { id: "romulus", name: "로물루스", axis: "center", shapeType: "hero", type: "영웅", desc: "로마 초대 국왕이자 창건자", insight: "야생의 생명력으로 영원한 도시의 문을 연 통치자" },
        // 북(12시): 신화적 기원
        { id: "mars", name: "군신 마르스", axis: "origins", shapeType: "person", type: "신적 부친", desc: "전쟁과 무용의 신", insight: "로마 민족 특유의 호전성과 군사적 패권의 영적 근원" },
        { id: "wolf", name: "암늑대 루파", axis: "origins", shapeType: "person", type: "야생의 유모", desc: "테베레강가의 늑대", insight: "문명 이전 거친 황야에서 길러진 불굴의 생명력" },
        { id: "tiber_basket", name: "갈대 바구니", axis: "origins", shapeType: "item", type: "기적의 유물", desc: "버려졌던 강가의 바구니", insight: "버려진 아이들이 제국의 시조로 살아남은 기적의 상징" },
        // 동(3시): 도시 건국과 규율
        { id: "palatine", name: "팔라티노 언덕", axis: "labors", shapeType: "person", type: "건국 터전", desc: "로마의 최초 정착지", insight: "일곱 언덕 중 최초로 흙을 파 성벽을 쌓은 중심지" },
        { id: "pomerium_plow", name: "건국의 쟁기", axis: "labors", shapeType: "item", type: "성스러운 경계", desc: "포메리움 성벽 선", insight: "도시는 목숨을 걸고 수호해야 할 신성한 법역임을 선포함" },
        { id: "remus", name: "레무스", axis: "labors", shapeType: "person", type: "쌍둥이 형제", desc: "성벽을 넘은 희생양", insight: "국가의 규율을 세우기 위해 형제애마저 꺾은 잔혹성" },
        // 남(6시): 사회 제도와 통합
        { id: "senate", name: "원로원 (100인)", axis: "politics", shapeType: "item", type: "의회 기구", desc: "원로 파트레스 회의", insight: "왕의 독주를 견제하고 제국 행정의 뼈대가 된 공화 기구" },
        { id: "hersilia", name: "에르실리아", axis: "politics", shapeType: "person", type: "사비니 왕비", desc: "평화 중재의 여인", insight: "전쟁터에 뛰어들어 로마와 사비니의 피를 하나로 결속함" },
        { id: "tatius", name: "타티우스 왕", axis: "politics", shapeType: "person", type: "공동 통치자", desc: "사비니족의 군주", insight: "적을 동반자로 끌어안은 로마식 포용과 동화의 표본" },
        // 서(9시): 참주화와 신격화
        { id: "patrician_clash", name: "귀족과의 불화", axis: "tragedy", shapeType: "item", type: "정치적 암투", desc: "원로원과의 권력 갈등", insight: "말년에 독선과 군사독재로 치달아 시민과 괴리됨" },
        { id: "capra_storm", name: "염소 늪 폭풍", axis: "tragedy", shapeType: "item", type: "의문의 실종", desc: "어둠 속의 암살 의혹", insight: "원로원에게 난도질당했다는 소문 속에 감춰진 최후" },
        { id: "quirinus", name: "신격 퀴리누스", axis: "tragedy", shapeType: "person", type: "승천의 신", desc: "수호신으로 숭배됨", insight: "폭력의 군주를 영원한 국가의 영적 수호자로 승화시킴" }
      ],
      links: [
        { source: "romulus", target: "mars", label: "혈통 전승" },
        { source: "romulus", target: "wolf", label: "야생 양육" },
        { source: "wolf", target: "tiber_basket", label: "기적적 보존" },
        { source: "romulus", target: "palatine", label: "도읍 지정" },
        { source: "palatine", target: "pomerium_plow", label: "경계 획정" },
        { source: "romulus", target: "remus", label: "형제 참살" },
        { source: "romulus", target: "senate", label: "귀족 의회" },
        { source: "romulus", target: "hersilia", label: "화해 중재" },
        { source: "hersilia", target: "tatius", label: "평화 동맹" },
        { source: "romulus", target: "patrician_clash", label: "권력 독점" },
        { source: "romulus", target: "capra_storm", label: "의문의 최후" },
        { source: "capra_storm", target: "quirinus", label: "사후 신격화" }
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
        { id: "lycurgus", name: "리쿠르고스", axis: "center", shapeType: "hero", type: "영웅", desc: "스파르타의 전설적 대입법관", insight: "자신을 온전히 비워 국가를 무적의 군사공동체로 조각함" },
        // 북(12시): 왕실과 신탁
        { id: "heracles_line", name: "헤라클레스 혈통", axis: "origins", shapeType: "person", type: "영웅적 시조", desc: "스파르타 왕가의 조상", insight: "고결한 혈통을 지녔으나 사적인 권력욕을 초월함" },
        { id: "charilaus", name: "조카 카릴라오스", axis: "origins", shapeType: "person", type: "유아 군주", desc: "왕위를 양도한 조카", insight: "섭정 자리를 탐하지 않고 갓난아이를 왕으로 옹립한 청렴함" },
        { id: "rhetra", name: "신탁 레트라", axis: "origins", shapeType: "item", type: "불변의 법률", desc: "델포이 아폴론의 신탁", insight: "인간의 입법에 신적 정당성을 부여한 스파르타의 대헌장" },
        // 동(3시): 병영 국가와 훈련
        { id: "agoge", name: "아고게 (군사교육)", axis: "labors", shapeType: "item", type: "집단 훈련", desc: "7세부터의 가혹한 규율", insight: "나약함을 거세하고 오직 조국에 헌신하는 강철 전사 육성" },
        { id: "syssitia", name: "공동식사 시시티아", axis: "labors", shapeType: "item", type: "평등의 식탁", desc: "검은 수프와 거친 빵", insight: "사치와 탐욕을 제거하고 군주와 평민이 한 솥밥을 먹음" },
        { id: "no_walls", name: "무성벽의 원칙", axis: "labors", shapeType: "item", type: "방위 철학", desc: "벽돌 없는 도시", insight: "돌벽 대신 단련된 전사들의 어깨로 국경을 둘러쌈" },
        // 남(6시): 경제와 평등 개혁
        { id: "iron_currency", name: "무거운 쇳돈", axis: "politics", shapeType: "item", type: "경제 개혁", desc: "식초에 담근 쇠 화폐", insight: "휴대가 불가능한 돈으로 뇌물, 부패, 절도를 원천 봉쇄함" },
        { id: "land_allotment", name: "균등한 농지 분배", axis: "politics", shapeType: "item", type: "토지 개혁", desc: "동등한 농지 클레로스", insight: "극빈과 극부의 격차를 없애 시민 간의 시기와 질투를 소멸시킴" },
        { id: "gerousia", name: "원로원 게루시아", axis: "politics", shapeType: "person", type: "28인 장로 의회", desc: "60세 이상 원로단", insight: "왕의 독재와 민중의 광기를 동시에 제어하는 정치적 평형추" },
        // 서(9시): 관용과 영원한 단식
        { id: "alcander", name: "알칸드로스", axis: "tragedy", shapeType: "person", type: "반대파 청년", desc: "돌을 던져 눈을 멀게 함", insight: "처벌 대신 제자로 거두어 가장 충직한 동지로 교화함" },
        { id: "eternal_oath", name: "불변의 맹세", axis: "tragedy", shapeType: "item", type: "국민적 서약", desc: "돌아올 때까지 법 수호", insight: "시민들에게 법 변경을 금지하는 영구적 서약을 맺게 함" },
        { id: "cirrha_fast", name: "키라의 자발적 단식", axis: "tragedy", shapeType: "item", type: "숭고한 순국", desc: "신전에서의 굶어 죽음", insight: "자신이 귀국하지 않음으로써 법률을 영원히 불변으로 고정함" }
      ],
      links: [
        { source: "lycurgus", target: "heracles_line", label: "혈통 자긍" },
        { source: "lycurgus", target: "charilaus", label: "왕위 양보" },
        { source: "lycurgus", target: "rhetra", label: "신탁 봉납" },
        { source: "lycurgus", target: "agoge", label: "체제 수립" },
        { source: "lycurgus", target: "syssitia", label: "식탁 공유" },
        { source: "agoge", target: "no_walls", label: "인간 방벽" },
        { source: "lycurgus", target: "iron_currency", label: "물욕 억제" },
        { source: "lycurgus", target: "land_allotment", label: "빈부 타파" },
        { source: "lycurgus", target: "gerousia", label: "장로 정치" },
        { source: "lycurgus", target: "alcander", label: "관용 교화" },
        { source: "lycurgus", target: "eternal_oath", label: "법치 서약" },
        { source: "eternal_oath", target: "cirrha_fast", label: "영속적 순국" }
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
        { id: "numa", name: "누마 폼필리우스", axis: "center", shapeType: "hero", type: "영웅", desc: "로마 2대 국왕이자 종교적 입법자", insight: "칼과 방패 대신 신앙과 예법으로 야만의 도시를 순화함" },
        // 북(12시): 사비니 은둔과 영적 교감
        { id: "sabine_retreat", name: "사비니 숲의 은둔", axis: "origins", shapeType: "item", type: "철학적 삶", desc: "쿠레스의 고요한 은둔", insight: "권력의 유혹을 뿌리치고 숲에서 철학과 명상을 즐기던 현자" },
        { id: "tatius_link", name: "타티우스 왕", axis: "origins", shapeType: "person", type: "사비니 장인", desc: "로마와 사비니의 가교", insight: "두 민족의 통합을 혈연과 지혜로 완성한 사위" },
        { id: "egeria", name: "님프 에게리아", axis: "origins", shapeType: "person", type: "신성한 뮤즈", desc: "샘의 요정이자 영적 아내", insight: "깊은 밤 숲속에서 정의로운 종교 의례와 법률의 영감을 속삭임" },
        // 동(3시): 제례와 성화의 수호
        { id: "vesta_virgins", name: "베스타 여사제단", axis: "labors", shapeType: "person", type: "순결한 무녀", desc: "영원한 불꽃의 수호자", insight: "국가의 생명력을 상징하는 꺼지지 않는 성화를 지키게 함" },
        { id: "ancilia_shield", name: "안킬레 성스러운 방패", axis: "labors", shapeType: "item", type: "하늘의 징표", desc: "하늘에서 떨어진 방패", insight: "신이 로마를 지켜준다는 믿음을 주기 위해 똑같은 모조품 11개를 만듦" },
        { id: "pontifex", name: "최고제사장 폰티펙스", axis: "labors", shapeType: "person", type: "종교 수장", desc: "신과 인간의 중재자", insight: "복잡한 제사 의식을 법제화하여 불필요한 미신과 광기를 억제함" },
        // 남(6시): 평화와 달력의 문명화
        { id: "janus_doors", name: "닫힌 야누스 신전", axis: "politics", shapeType: "item", type: "평화의 상징", desc: "전쟁이 없을 때 닫히는 문", insight: "재위 43년 동안 단 한 번도 열리지 않은 기적의 평화 시대" },
        { id: "solar_calendar", name: "12개월 태양력", axis: "politics", shapeType: "item", type: "문명 혁신", desc: "1월과 2월 추가 제정", insight: "계절과 농경 주기를 맞추어 시민의 일상을 평화로운 질서에 놓음" },
        { id: "craft_guilds", name: "직능별 길드 조직", axis: "politics", shapeType: "item", type: "사회 화합", desc: "도예, 금속, 가죽 조합", insight: "출신 민족 대신 직업으로 시민을 재분류하여 파벌 갈등을 종식시킴" },
        // 서(9시): 우상 금지와 침묵의 안식
        { id: "aniconic_rule", name: "우상 조각 금지령", axis: "tragedy", shapeType: "item", type: "영적 순수성", desc: "170년간 우상 배격", insight: "신은 형상에 가둘 수 없으며 오직 마음과 덕성으로만 닿음을 가르침" },
        { id: "fides_temple", name: "신의(피데스) 신전", axis: "tragedy", shapeType: "item", type: "신뢰의 제단", desc: "가장 엄숙한 맹세", insight: "거짓과 배신을 막기 위해 '신의와 신뢰'를 최고의 신으로 모심" },
        { id: "sacred_books_buried", name: "성스러운 서책의 매장", axis: "tragedy", shapeType: "item", type: "지혜의 봉인", desc: "유골과 함께 묻힌 서책", insight: "문자에 얽매여 본질이 왜곡될 것을 경계하여 자신의 비전을 땅에 묻음" }
      ],
      links: [
        { source: "numa", target: "sabine_retreat", label: "은둔 사색" },
        { source: "numa", target: "tatius_link", label: "혈연 계승" },
        { source: "numa", target: "egeria", label: "영적 교감" },
        { source: "numa", target: "vesta_virgins", label: "성화 위탁" },
        { source: "numa", target: "ancilia_shield", label: "신성 방호" },
        { source: "numa", target: "pontifex", label: "사제 제도" },
        { source: "numa", target: "janus_doors", label: "평화 유지" },
        { source: "numa", target: "solar_calendar", label: "시간 표준화" },
        { source: "numa", target: "craft_guilds", label: "파벌 해체" },
        { source: "numa", target: "aniconic_rule", label: "우상 배제" },
        { source: "numa", target: "fides_temple", label: "신의 숭상" },
        { source: "numa", target: "sacred_books_buried", label: "지혜 봉인" }
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
        { id: "solon", name: "솔론", axis: "center", shapeType: "hero", type: "영웅", desc: "그리스 7대 현인이자 아테네 대입법관", insight: "부유층과 빈민의 극단적 내전을 '중용의 방패'로 중재함" },
        // 북(12시): 현인의 여행과 담론
        { id: "salamis_elegy", name: "살라미스 비가(시)", axis: "origins", shapeType: "item", type: "시적 선동", desc: "미치광이 연기로 영토 탈환", insight: "시를 읊어 패배주의에 빠진 시민들을 일깨우고 섬을 수복함" },
        { id: "anacharsis", name: "아나카르시스", axis: "origins", shapeType: "person", type: "스키타이 철학자", desc: "비판적 학문 동반자", insight: "“법은 거미줄과 같아 약자만 걸리고 강자는 뚫는다”고 일침함" },
        { id: "croesus", name: "크로이소스 왕", axis: "origins", shapeType: "person", type: "리디아의 황금 군주", desc: "부귀를 뽐낸 대담자", insight: "죽음을 보기 전까지 인간은 행복을 단정할 수 없음을 가르침" },
        // 동(3시): 부채 해방과 민주정 초석
        { id: "seisachtheia", name: "세이사크테이아", axis: "labors", shapeType: "item", type: "부채 탕감", desc: "‘짐을 흔들어 벗겨냄’", insight: "가혹한 부채를 무효화하고 노예로 팔려간 시민들을 모두 속량함" },
        { id: "horos_stones", name: "뽑힌 저당 경계석", axis: "labors", shapeType: "item", type: "해방의 징표", desc: "채무 비석 호로스 철거", insight: "대지 위에 박혀 있던 절망의 멍에를 뽑아내어 토지의 자유 선언" },
        { id: "heliaia_court", name: "배심원 민중법원", axis: "labors", shapeType: "person", type: "사법 혁신", desc: "시민 배심원 헬리아이아", insight: "가장 가난한 계층에게도 판결에 참여할 권리를 주어 귀족을 견제함" },
        // 남(6시): 헌법 체계와 법치
        { id: "four_classes", name: "재산 4계급제", axis: "politics", shapeType: "item", type: "사회 계층 개혁", desc: "혈통 대신 소득 기준", insight: "가문 귀족의 특권을 깨고 생산량에 따라 군사적 의무와 참정권을 분배함" },
        { id: "boul_400", name: "400인 평의회", axis: "politics", shapeType: "person", type: "민회 안건 기구", desc: "부족별 100인 선출", insight: "민회가 감정적으로 폭주하지 않도록 균형을 잡는 안정의 닻" },
        { id: "axones_code", name: "회전식 목재 법전", axis: "politics", shapeType: "item", type: "공개 성문화", desc: "악소네스 법판", insight: "법을 누구나 볼 수 있게 공개하여 귀족의 자의적 판결을 박탈함" },
        // 서(9시): 양극단의 비난과 참주정
        { id: "middle_way_shield", name: "중용의 방패", axis: "tragedy", shapeType: "item", type: "외로운 중재", desc: "양쪽 모두의 원망", insight: "귀족에겐 재산을 덜 빼앗았다고, 빈민에겐 땅을 다 안 줬다고 욕먹음" },
        { id: "ten_year_travel", name: "10년의 자발적 망명", axis: "tragedy", shapeType: "item", type: "법의 보호", desc: "법 수정을 막기 위한 여행", insight: "자신이 아테네에 남아 독재자가 되는 것을 막기 위해 조국을 떠남" },
        { id: "peisistratos", name: "참주 페이시스트라토스", axis: "tragedy", shapeType: "person", type: "친척 독재자", desc: "무력으로 권력을 잡음", insight: "솔론의 간곡한 경고를 무시하고 무력으로 참주정을 열어 비극을 초래함" }
      ],
      links: [
        { source: "solon", target: "salamis_elegy", label: "시적 각성" },
        { source: "solon", target: "anacharsis", label: "철학적 문답" },
        { source: "solon", target: "croesus", label: "행복 경고" },
        { source: "solon", target: "seisachtheia", label: "부채 폐기" },
        { source: "seisachtheia", target: "horos_stones", label: "비석 굴착" },
        { source: "solon", target: "heliaia_court", label: "사법 민주화" },
        { source: "solon", target: "four_classes", label: "계급 재편" },
        { source: "solon", target: "boul_400", label: "평의회 창설" },
        { source: "solon", target: "axones_code", label: "법률 공개" },
        { source: "solon", target: "middle_way_shield", label: "고독한 중용" },
        { source: "solon", target: "ten_year_travel", label: "권력 회피" },
        { source: "solon", target: "peisistratos", label: "독재 경고" }
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
        { id: "publicola", name: "푸블리콜라", axis: "center", shapeType: "hero", type: "영웅", desc: "로마 공화정의 수호 집정관", insight: "스스로 권력의 높이를 낮추어 민중의 사랑과 자유를 반석 위에 올림" },
        // 북(12시): 왕정 전복과 비장한 선서
        { id: "lucretia_oath", name: "루크레티아의 피맺힌 단도", axis: "origins", shapeType: "item", type: "혁명의 도화선", desc: "폭정 규탄의 칼", insight: "순결한 여인의 희생 앞에서 왕정을 영원히 종식할 것을 결의함" },
        { id: "brutus", name: "루키우스 브루투스", axis: "origins", shapeType: "person", type: "혁명 동지", desc: "초대 집정관", insight: "공화정을 지키기 위해 반역한 친아들들까지 사형에 처한 비정한 애국자" },
        { id: "tarquin_expulsion", name: "오만한 왕 타르퀴니우스", axis: "origins", shapeType: "person", type: "추방된 폭군", desc: "로마 최후의 왕", insight: "시민들의 봉기로 축출된 뒤 왕좌를 되찾으려 외세를 끌어들임" },
        // 동(3시): 외세 침략과 영웅적 사투
        { id: "silva_arsia", name: "실바 아르시아 전투", axis: "labors", shapeType: "item", type: "공화정 수호전", desc: "에트루리아 격퇴", insight: "브루투스가 전사하는 격전 끝에 숲의 신 실바누스의 음성으로 승리함" },
        { id: "porsena", name: "라르스 포르세나 왕", axis: "labors", shapeType: "person", type: "에트루리아 군주", desc: "로마를 포위한 강적", insight: "로마인들의 굽히지 않는 기개에 경탄하여 명예로운 강화를 맺음" },
        { id: "cloelia", name: "처녀 영웅 클렐리아", axis: "labors", shapeType: "person", type: "용감한 인질", desc: "테베레강을 헤엄쳐 탈출", insight: "인질 교환 중 탈출했으나 약속을 위해 돌아와 포르세나를 감동시킴" },
        // 남(6시): 권력 절제와 ‘인민의 벗’
        { id: "fasces_lowered", name: "낮추어진 파스케스 도끼", axis: "politics", shapeType: "item", type: "권력의 겸양", desc: "의전 도끼 날 제거", insight: "민회 앞에서 집정관의 권위를 낮추고 주권이 시민에게 있음을 인정함" },
        { id: "house_demolished", name: "스스로 헌 벨리아 저택", axis: "politics", shapeType: "item", type: "의혹 해소", desc: "언덕의 요새 집 철거", insight: "왕이 되려 한다는 시민의 의심을 사자 하룻밤 사이에 호화 저택을 헐어버림" },
        { id: "provocatio", name: "시민 항소권 (프로보카티오)", axis: "politics", shapeType: "item", type: "사법 보호 장치", desc: "사형 선고 항소권", insight: "어떤 집정관도 시민을 재판 없이 즉결 처형하지 못하게 민권을 확립함" },
        // 서(9시): 반역 음모와 무소유의 서거
        { id: "vindicius", name: "노예 빈디키우스", axis: "tragedy", shapeType: "person", type: "고발자", desc: "왕정 복고 음모 폭로", insight: "청년 귀족들의 반역을 알리고 최초로 시민권을 얻은 자유민이 됨" },
        { id: "tyrant_kill_law", name: "참주 살해 허용법", axis: "tragedy", shapeType: "item", type: "극단적 방어권", desc: "독재 기도자 사살 합법화", insight: "왕권을 탐하는 자는 재판 없이 누구든 처단할 수 있도록 공포함" },
        { id: "state_funeral", name: "국고로 치른 청빈한 장례", axis: "tragedy", shapeType: "item", type: "영예로운 최후", desc: "장례비조차 없던 청빈", insight: "4번이나 집정관을 지냈으나 유산이 없어 온 시민이 모금하여 장례를 치름" }
      ],
      links: [
        { source: "publicola", target: "lucretia_oath", label: "혁명 선서" },
        { source: "publicola", target: "brutus", label: "공동 통치" },
        { source: "publicola", target: "tarquin_expulsion", label: "폭군 축출" },
        { source: "publicola", target: "silva_arsia", label: "혈전 승리" },
        { source: "publicola", target: "porsena", label: "외교 담판" },
        { source: "porsena", target: "cloelia", label: "용기 찬양" },
        { source: "publicola", target: "fasces_lowered", label: "주권 존중" },
        { source: "publicola", target: "house_demolished", label: "의혹 불식" },
        { source: "publicola", target: "provocatio", label: "인권 보장" },
        { source: "publicola", target: "vindicius", label: "음모 적발" },
        { source: "publicola", target: "tyrant_kill_law", label: "공화정 방어" },
        { source: "publicola", target: "state_funeral", label: "청빈한 안식" }
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
  numa: [
    {
      title: "님프 에게리아에게 로마의 법률을 받는 누마 폼필리우스",
      originalTitle: "Numa Pompilio riceve dalla ninfa Egeria le leggi di Roma",
      artist: "펠리체 자니 (Felice Giani)",
      year: "1806년",
      museum: "이탈리아 로마 스페인 대사관 궁전 (Palazzo di Spagna - Sala dei Legislatori)",
      license: "Public Domain",
      imgUrl: "images/numa-1.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Giani,_-Felice_-_Numa_Pompilio_riceve_dalla_ninfa_Egeria_le_leggi_di_Roma_-_center_-_1806.jpg",
      desc: "성스러운 숲의 샘가에서 지혜와 예언의 님프 에게리아와 영적으로 교감하며, 거칠고 호전적이던 초기 로마 시민들을 교화할 종교 의례와 평화의 법률을 전수받는 현왕 누마의 모습을 장엄하게 묘사한 신고전주의 벽화입니다."
    },
    {
      title: "베스타의 여사제 투키아",
      originalTitle: "The Vestal Virgin Tuccia",
      artist: "시모네 피뇨니 (Simone Pignoni)",
      year: "17세기 후반",
      museum: "영국 리버풀 워커 아트 갤러리 (Walker Art Gallery)",
      license: "Public Domain",
      imgUrl: "images/numa-2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Simone_Pignoni_(1611-1698)_-_The_Vestal_Virgin_Tuccia_-_WAG_6261_-_Walker_Art_Gallery.jpg",
      desc: "누마 폼필리우스가 창설하여 로마의 영원한 성화를 수호하게 했던 베스타 사제단의 대표적 일화로, 부당하게 순결을 의심받자 체로 테베레강의 물을 떠내는 기적으로 결백을 증명한 여사제 투키아를 그린 바로크 회화입니다."
    },
    {
      title: "야누스 신전의 문을 닫음",
      originalTitle: "Closing of the Temple of Janus by Augustus",
      artist: "루이 드 실베스트르 (Louis de Silvestre)",
      year: "1757년",
      museum: "독일 드레스덴 국립미술관 (Staatliche Kunstsammlungen Dresden)",
      license: "Public Domain",
      imgUrl: "images/numa-3.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Closing_of_the_Temple_of_Janus_by_Augustus,_by_Louis_de_Silvestre_(1757).jpg",
      desc: "누마 폼필리우스가 창건하여 전쟁 시에는 열고 평화 시에는 닫도록 규정한 야누스 신전의 문을 닫는 의식을 그린 작품입니다. 누마의 43년 치세 내내 이 문은 단 한 번도 열리지 않아 평화와 번영의 황금시대를 상징했습니다."
    },
    {
      title: "포로 로마노의 베스타 신전 원형 유적",
      originalTitle: "Round remains of the temple of Vesta, Forum Romanum, Rome",
      artist: "Jebulon (사진 작가)",
      year: "2013년 촬영 (기원전 7세기경 기원 유적)",
      museum: "이탈리아 로마 포로 로마노 (Forum Romanum)",
      license: "Public Domain (CC0)",
      imgUrl: "images/numa-4.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Temple_Vesta_Forum_Romanum_Rome_Italy.jpg",
      desc: "누마 폼필리우스가 국가의 안녕과 영속성을 기원하며 세운 성스러운 베스타 신전의 원형 잔존 유적입니다. 제국의 꺼지지 않는 불꽃을 수호하던 베스타 무녀들의 헌신과 초기 로마 종교 제도의 원형을 간직하고 있습니다."
    }
  ],
  solon: [
    {
      title: "솔론과 크로이소스",
      originalTitle: "Solon and Croesus",
      artist: "헤라르트 판 혼트호르스트 (Gerard van Honthorst)",
      year: "1624년",
      museum: "독일 함부르크 미술관 (Hamburger Kunsthalle)",
      license: "Public Domain",
      imgUrl: "images/solon-1.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Honthorst_solon_and_croesus.jpg",
      desc: "자신의 엄청난 금은보화를 과시하며 세상에서 가장 행복한 사람이 누구냐고 묻는 리디아의 부유한 왕 크로이소스에게, 인간의 삶은 끝까지 지켜보기 전에는 행복을 단정할 수 없다는 지혜의 경고를 전하는 현인 솔론의 일화를 담은 바로크 역사화입니다."
    },
    {
      title: "아테네의 현인 솔론 초상",
      originalTitle: "Solon (from the series of Famous characters)",
      artist: "유스투스 판 헨트 (Justus van Gent) & 페드로 베루게테 (Pedro Berruguete)",
      year: "1474년경",
      museum: "프랑스 파리 루브르 박물관 (Louvre Museum)",
      license: "Public Domain",
      imgUrl: "images/solon-2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Giusto_di_gand_e_pedro_berruguete,_solone.jpg",
      desc: "우르비노 공작의 서재를 위해 제작된 '역사적 위인 연작' 중 하나로, 법전과 지혜의 서책을 손에 든 채 깊은 통찰을 담은 눈빛으로 응시하는 고대 그리스 7대 현인이자 입법가 솔론의 르네상스 걸작 초상화입니다."
    },
    {
      title: "헤르마 기둥 위의 솔론 대리석 흉상",
      originalTitle: "Portrait bust on Herm (known as Solon)",
      artist: "Yair Haklai (사진 작가) / 고대 로마 조각가",
      year: "서기 1-2세기경 (2019년 촬영)",
      museum: "이탈리아 피렌체 우피치 미술관 (Uffizi Gallery)",
      license: "CC BY-SA 4.0",
      imgUrl: "images/solon-3.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Portrait_bust_of_Sophocles_on_Herm_(known_as_Solon)-Uffizi.jpg",
      desc: "펜텔리콘 대리석으로 조각된 고대 그리스의 대표적 사상가 두상 양식으로, 우피치 미술관에 전해지며 시민 부채를 탕감하고 공평한 법치를 세우려 고뇌했던 입법가 솔론의 엄정한 기품을 상징하는 대표적 조각 유물입니다."
    },
    {
      title: "아테네 민회의 중심지 프닉스 언덕 유적",
      originalTitle: "The Pnyx plateau in Athens",
      artist: "George E. Koronaios (사진 작가)",
      year: "2021년 촬영 (기원전 6-4세기 유적)",
      museum: "그리스 아테네 프닉스 유적지 현장",
      license: "CC BY-SA 2.0",
      imgUrl: "images/solon-4.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Pnyx_plateau_in_Athens_on_February_19,_2021.jpg",
      desc: "솔론의 개혁으로 평민들의 정치 참여가 확대되면서 모든 시민이 모여 법을 논하고 투표하던 고대 아테네 민회(에클레시아)의 중심 무대이자 민주주의가 태동한 프닉스 언덕 광장 터입니다."
    }
  ],
  publicola: [
    {
      title: "테베레강을 건너는 클렐리아",
      originalTitle: "Cloelia Passing the Tiber (Clélie passant le Tibre)",
      artist: "페테르 파울 루벤스 공방 (Workshop of Peter Paul Rubens)",
      year: "1625-1675년경",
      museum: "프랑스 파리 루브르 박물관 (Louvre Museum)",
      license: "Public Domain",
      imgUrl: "images/publicola-1.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Workshop_of_Peter_Paul_Rubens,_possibly_Jan_van_den_Hoecke_-_Cloelia_Passing_the_Tiber.jpg",
      desc: "푸블리콜라가 에트루리아의 왕 포르센나와 평화 조약을 맺을 당시 인질로 보내졌던 용감한 로마 처녀 클렐리아가 다른 여성 인질들을 이끌고 헤엄쳐 테베레강을 건너 탈출하는 역동적인 일화를 그린 바로크 역사화입니다."
    },
    {
      title: "고대 로마 공화정의 심장 포로 로마노 전경",
      originalTitle: "Forum Romanum in Rome, Lazio, Italy",
      artist: "Krzysztof Golik (사진 작가)",
      year: "2018년 촬영 (기원전 6세기경 기원 유적)",
      museum: "이탈리아 로마 포로 로마노 (Forum Romanum)",
      license: "CC BY-SA 4.0",
      imgUrl: "images/publicola-2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Forum_Romanum_(5).jpg",
      desc: "푸블리콜라가 시민들의 오해를 풀기 위해 벨리아 언덕의 웅장한 자택을 스스로 허물고 평지에 다시 집을 지어 '인민의 벗'으로 거듭난 뒤, 공화정의 기초 법률을 반포하고 공무를 수행하던 고대 로마 공화정 정치와 시민 집회의 중심 무대입니다."
    },
    {
      title: "브루투스의 선서 (루크레티아의 죽음 앞에서의 맹세)",
      originalTitle: "The Oath of Brutus",
      artist: "개빈 해밀턴 (Gavin Hamilton)",
      year: "1763-1764년",
      museum: "미국 예일 영국 미술 센터 (Yale Center for British Art)",
      license: "Public Domain",
      imgUrl: "images/publicola-3.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gavin_Hamilton_-_the_oath_of_brutus.jpg",
      desc: "폭군 타르퀴니우스 왕가의 폭정에 맞서 숨을 거둔 루크레티아의 시신 앞에서 피 묻은 단도를 치켜들고, 왕정을 영원히 폐지하며 자유로운 공화국을 수립할 것을 결의하는 브루투스와 푸블리콜라 일행의 비장한 건국 선서를 묘사한 신고전주의 명작입니다."
    },
    {
      title: "푸블리우스 발레리우스 푸블리콜라 초상 드로잉",
      originalTitle: "A drawing of Publius Valerius Publicola",
      artist: "오스트리아 국립도서관(ÖNB) 소장 작자 미상",
      year: "2019년 디지털화 (근대 역사 판화 드로잉)",
      museum: "오스트리아 빈 국립도서관 (Austrian National Library)",
      license: "CC BY-SA 4.0",
      imgUrl: "images/publicola-4.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Publius_Valerius_Publicola_(cropped).jpg",
      desc: "집정관의 권력을 스스로 낮추고 사법 항소권을 보장하여 로마 평민들로부터 '인민을 위하는 자(Publicola)'라는 영예로운 칭호를 얻은 로마 공화정 건국의 주역 푸블리우스 발레리우스 푸블리콜라의 위엄 있는 초상 판화입니다."
    }
  ]
};
