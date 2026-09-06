// 32x32 도트 이미지 SVG 문자열
const HERO_SPRITES = {
  theseus: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="11" y="3" width="10" height="4" fill="#b45309"/><rect x="9" y="5" width="14" height="6" fill="#d97706"/><rect x="11" y="4" width="6" height="3" fill="#f59e0b"/><rect x="10" y="8" width="12" height="2" fill="#eab308"/><rect x="12" y="8" width="3" height="1" fill="#fef08a"/><rect x="10" y="10" width="12" height="6" fill="#fed7aa"/><rect x="11" y="11" width="2" height="2" fill="#1e293b"/><rect x="17" y="11" width="2" height="2" fill="#1e293b"/><rect x="12" y="11" width="1" height="1" fill="#ffffff"/><rect x="18" y="11" width="1" height="1" fill="#ffffff"/><rect x="14" y="13" width="2" height="1" fill="#fb923c"/><rect x="13" y="15" width="4" height="1" fill="#ea580c"/><rect x="11" y="16" width="10" height="8" fill="#f8fafc"/><rect x="10" y="17" width="2" height="7" fill="#cbd5e1"/><rect x="20" y="17" width="2" height="7" fill="#cbd5e1"/><rect x="12" y="16" width="2" height="3" fill="#78350f"/><rect x="14" y="19" width="2" height="3" fill="#78350f"/><rect x="10" y="23" width="12" height="2" fill="#78350f"/><rect x="15" y="23" width="2" height="2" fill="#fbbf24"/><rect x="7" y="17" width="4" height="3" fill="#fed7aa"/><rect x="9" y="19" width="3" height="3" fill="#fed7aa"/><rect x="21" y="17" width="4" height="3" fill="#fed7aa"/><rect x="19" y="19" width="3" height="3" fill="#fed7aa"/><rect x="11" y="20" width="3" height="3" fill="#f97316"/><rect x="17" y="19" width="3" height="3" fill="#f97316"/><rect x="21" y="8" width="6" height="6" fill="#3e2723"/><rect x="22" y="9" width="4" height="4" fill="#5d4037"/><rect x="23" y="10" width="2" height="2" fill="#d7ccc8"/><rect x="19" y="13" width="3" height="4" fill="#4e342e"/><rect x="16" y="16" width="3" height="4" fill="#3e2723"/><rect x="13" y="21" width="3" height="4" fill="#4e342e"/><rect x="10" y="24" width="3" height="4" fill="#3e2723"/><rect x="8" y="27" width="3" height="3" fill="#2d1a10"/><rect x="11" y="25" width="3" height="3" fill="#fed7aa"/><rect x="17" y="25" width="3" height="3" fill="#fed7aa"/><rect x="11" y="27" width="3" height="2" fill="#78350f"/><rect x="17" y="27" width="3" height="2" fill="#78350f"/><rect x="10" y="29" width="4" height="2" fill="#451a03"/><rect x="17" y="29" width="4" height="2" fill="#451a03"/></svg>`,

  romulus: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="13" y="1" width="6" height="2" fill="#dc2626"/><rect x="11" y="2" width="10" height="2" fill="#b91c1c"/><rect x="10" y="3" width="12" height="1" fill="#991b1b"/><rect x="11" y="4" width="10" height="5" fill="#d97706"/><rect x="13" y="4" width="6" height="2" fill="#fcd34d"/><rect x="10" y="7" width="2" height="4" fill="#b45309"/><rect x="20" y="7" width="2" height="4" fill="#b45309"/><rect x="12" y="7" width="8" height="5" fill="#fed7aa"/><rect x="13" y="8" width="2" height="2" fill="#0f172a"/><rect x="17" y="8" width="2" height="2" fill="#0f172a"/><rect x="14" y="8" width="1" height="1" fill="#ffffff"/><rect x="18" y="8" width="1" height="1" fill="#ffffff"/><rect x="15" y="10" width="2" height="1" fill="#fb923c"/><rect x="14" y="11" width="4" height="1" fill="#ea580c"/><rect x="7" y="11" width="4" height="12" fill="#991b1b"/><rect x="6" y="13" width="2" height="10" fill="#7f1d1d"/><rect x="11" y="12" width="10" height="9" fill="#b45309"/><rect x="12" y="13" width="8" height="6" fill="#d97706"/><rect x="14" y="14" width="4" height="4" fill="#f59e0b"/><rect x="10" y="12" width="2" height="3" fill="#fcd34d"/><rect x="20" y="12" width="2" height="3" fill="#fcd34d"/><rect x="6" y="15" width="5" height="10" fill="#b91c1c"/><rect x="7" y="16" width="3" height="8" fill="#dc2626"/><rect x="8" y="19" width="2" height="2" fill="#fbbf24"/><rect x="24" y="2" width="1" height="4" fill="#f1f5f9"/><rect x="23" y="4" width="3" height="2" fill="#94a3b8"/><rect x="24" y="6" width="1" height="23" fill="#5c3a1e"/><rect x="22" y="16" width="3" height="3" fill="#fed7aa"/><rect x="11" y="21" width="10" height="2" fill="#78350f"/><rect x="15" y="21" width="2" height="2" fill="#fbbf24"/><rect x="12" y="23" width="2" height="3" fill="#9a3412"/><rect x="15" y="23" width="2" height="3" fill="#78350f"/><rect x="18" y="23" width="2" height="3" fill="#9a3412"/><rect x="12" y="26" width="3" height="3" fill="#fed7aa"/><rect x="17" y="26" width="3" height="3" fill="#fed7aa"/><rect x="11" y="29" width="4" height="2" fill="#451a03"/><rect x="17" y="29" width="4" height="2" fill="#451a03"/></svg>`
};

// 대표 도시 1곳씩만 남긴 지도 이벤트
const allMapEvents = [
  {
    hero: "theseus",
    heroName: "테세우스",
    title: "아테네 (통합과 민주정의 기틀)",
    desc: "아티카 지방의 흩어진 마을들을 하나로 통합(시노이키스모스)하여 위대한 도시국가 아테네의 번영을 열었습니다.",
    lat: 37.9838,
    lng: 23.7275
  },
  {
    hero: "romulus",
    heroName: "로물루스",
    title: "로마 (팔라티노 언덕의 건국)",
    desc: "기원전 753년, 팔라티노 언덕에 성벽의 경계를 긋고 망명자들을 받아들여 영원한 제국 로마를 세웠습니다.",
    lat: 41.8902,
    lng: 12.4922
  }
];

// heroDetails(개요, 명언, 그래프)는 기존 내용 그대로 유지
// 각 영웅의 4대 탭 세부 데이터 (개요, 관계망, 중요문장, 토론장)
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
    debates: [
      { topic: "질문 1: 아테네 연방 통합 vs 독재 포기", desc: "왕권을 스스로 제한하고 시민 자치를 도입한 테세우스의 결정은 시대를 앞선 민주적 결단인가, 통제력 상실의 시작인가?" },
      { topic: "질문 2: 테세우스의 배 역설", desc: "부품이 전부 교체된 테세우스의 배는 여전히 원래의 그 배인가? 국가나 개인의 정체성은 어디에서 오는가?" }
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
    debates: [
      { topic: "질문 1: 국가의 규율 vs 혈육의 정", desc: "로물루스가 국경(성벽)을 모욕한 동생 레무스를 죽인 것은 국가 기틀을 위한 정당한 결단이었는가, 권력욕에 눈먼 비극인가?" },
      { topic: "질문 2: 사비니 여인 약탈과 통합", desc: "폭력으로 시작된 결합이 과연 진정한 평화와 번영의 초석이 될 수 있었는가?" }
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
  }
};
