// 1. 32x32 도트 이미지 SVG
const HERO_SPRITES = {
  theseus: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="11" y="3" width="10" height="4" fill="#b45309"/><rect x="9" y="5" width="14" height="6" fill="#d97706"/><rect x="11" y="4" width="6" height="3" fill="#f59e0b"/><rect x="10" y="8" width="12" height="2" fill="#eab308"/><rect x="12" y="8" width="3" height="1" fill="#fef08a"/><rect x="10" y="10" width="12" height="6" fill="#fed7aa"/><rect x="11" y="11" width="2" height="2" fill="#1e293b"/><rect x="17" y="11" width="2" height="2" fill="#1e293b"/><rect x="12" y="11" width="1" height="1" fill="#ffffff"/><rect x="18" y="11" width="1" height="1" fill="#ffffff"/><rect x="14" y="13" width="2" height="1" fill="#fb923c"/><rect x="13" y="15" width="4" height="1" fill="#ea580c"/><rect x="11" y="16" width="10" height="8" fill="#f8fafc"/><rect x="10" y="17" width="2" height="7" fill="#cbd5e1"/><rect x="20" y="17" width="2" height="7" fill="#cbd5e1"/><rect x="12" y="16" width="2" height="3" fill="#78350f"/><rect x="14" y="19" width="2" height="3" fill="#78350f"/><rect x="10" y="23" width="12" height="2" fill="#78350f"/><rect x="15" y="23" width="2" height="2" fill="#fbbf24"/><rect x="7" y="17" width="4" height="3" fill="#fed7aa"/><rect x="9" y="19" width="3" height="3" fill="#fed7aa"/><rect x="21" y="17" width="4" height="3" fill="#fed7aa"/><rect x="19" y="19" width="3" height="3" fill="#fed7aa"/><rect x="11" y="20" width="3" height="3" fill="#f97316"/><rect x="17" y="19" width="3" height="3" fill="#f97316"/><rect x="21" y="8" width="6" height="6" fill="#3e2723"/><rect x="22" y="9" width="4" height="4" fill="#5d4037"/><rect x="23" y="10" width="2" height="2" fill="#d7ccc8"/><rect x="19" y="13" width="3" height="4" fill="#4e342e"/><rect x="16" y="16" width="3" height="4" fill="#3e2723"/><rect x="13" y="21" width="3" height="4" fill="#4e342e"/><rect x="10" y="24" width="3" height="4" fill="#3e2723"/><rect x="8" y="27" width="3" height="3" fill="#2d1a10"/><rect x="11" y="25" width="3" height="3" fill="#fed7aa"/><rect x="17" y="25" width="3" height="3" fill="#fed7aa"/><rect x="11" y="27" width="3" height="2" fill="#78350f"/><rect x="17" y="27" width="3" height="2" fill="#78350f"/><rect x="10" y="29" width="4" height="2" fill="#451a03"/><rect x="17" y="29" width="4" height="2" fill="#451a03"/></svg>`,

  romulus: `<svg viewBox="0 0 32 32" width="100%" height="100%" style="image-rendering:pixelated;shape-rendering:crispEdges;"><rect x="13" y="1" width="6" height="2" fill="#dc2626"/><rect x="11" y="2" width="10" height="2" fill="#b91c1c"/><rect x="10" y="3" width="12" height="1" fill="#991b1b"/><rect x="11" y="4" width="10" height="5" fill="#d97706"/><rect x="13" y="4" width="6" height="2" fill="#fcd34d"/><rect x="10" y="7" width="2" height="4" fill="#b45309"/><rect x="20" y="7" width="2" height="4" fill="#b45309"/><rect x="12" y="7" width="8" height="5" fill="#fed7aa"/><rect x="13" y="8" width="2" height="2" fill="#0f172a"/><rect x="17" y="8" width="2" height="2" fill="#0f172a"/><rect x="14" y="8" width="1" height="1" fill="#ffffff"/><rect x="18" y="8" width="1" height="1" fill="#ffffff"/><rect x="15" y="10" width="2" height="1" fill="#fb923c"/><rect x="14" y="11" width="4" height="1" fill="#ea580c"/><rect x="7" y="11" width="4" height="12" fill="#991b1b"/><rect x="6" y="13" width="2" height="10" fill="#7f1d1d"/><rect x="11" y="12" width="10" height="9" fill="#b45309"/><rect x="12" y="13" width="8" height="6" fill="#d97706"/><rect x="14" y="14" width="4" height="4" fill="#f59e0b"/><rect x="10" y="12" width="2" height="3" fill="#fcd34d"/><rect x="20" y="12" width="2" height="3" fill="#fcd34d"/><rect x="6" y="15" width="5" height="10" fill="#b91c1c"/><rect x="7" y="16" width="3" height="8" fill="#dc2626"/><rect x="8" y="19" width="2" height="2" fill="#fbbf24"/><rect x="24" y="2" width="1" height="4" fill="#f1f5f9"/><rect x="23" y="4" width="3" height="2" fill="#94a3b8"/><rect x="24" y="6" width="1" height="23" fill="#5c3a1e"/><rect x="22" y="16" width="3" height="3" fill="#fed7aa"/><rect x="11" y="21" width="10" height="2" fill="#78350f"/><rect x="15" y="21" width="2" height="2" fill="#fbbf24"/><rect x="12" y="23" width="2" height="3" fill="#9a3412"/><rect x="15" y="23" width="2" height="3" fill="#78350f"/><rect x="18" y="23" width="2" height="3" fill="#9a3412"/><rect x="12" y="26" width="3" height="3" fill="#fed7aa"/><rect x="17" y="26" width="3" height="3" fill="#fed7aa"/><rect x="11" y="29" width="4" height="2" fill="#451a03"/><rect x="17" y="29" width="4" height="2" fill="#451a03"/></svg>`
};

// 2. 지도 대표 거점 핀
const allMapEvents = [
  {
    hero: "theseus",
    heroName: "테세우스",
    title: "아테네 (통합과 민주정의 기틀)",
    desc: "아티카 지방의 흩어진 마을들을 하나로 통합하여 위대한 도시국가 아테네의 번영을 열었습니다.",
    lat: 37.9838,
    lng: 23.7275
  },
  {
    hero: "romulus",
    heroName: "로물루스",
    title: "로마 (팔라티노 언덕의 건국)",
    desc: "기원전 753년, 팔라티노 언덕에 성벽의 경계를 긋고 망명자들을 모아 영원한 제국 로마를 세웠습니다.",
    lat: 41.8902,
    lng: 12.4922
  }
];

// 3. 영웅 상세 정보
const heroDetails = {
  theseus: {
    name: "테세우스 (Theseus)",
    overview: {
      birth: "아테네 왕 아이게우스(또는 포세이돈)와 트로이젠 공주 아이트라 사이에서 태어났습니다.",
      feat: "크레타 미궁의 미노타우로스 처치, 아티카 도시 통합(시노이키스모스), 아마존 정벌.",
      character: "불의를 참지 못하고 강자에게 엄격하며 약자를 보호하는 정의파 모험가 기질.",
      verdict: "용기와 도덕성으로 국가를 세웠으나, 말년에 민중의 지지를 잃고 비극적인 최후를 맞이함."
    },
    quotes: [
      { text: "테세우스의 배는 부품을 모두 교체해도 본래의 배라 부를 수 있는가?", source: "플루타르코스 『비교열전』 테세우스 편" },
      { text: "헤라클레스의 명성이 밤낮으로 나를 깨워 영웅의 길로 이끌었다.", source: "플루타르코스 『비교열전』" }
    ],
    graph: {
      nodes: [
        { id: "theseus", name: "테세우스", r: 24, color: "#eab308", type: "주인공", desc: "아테네의 건국 영웅", insight: "정의와 용기로 통합을 이룬 왕" },
        { id: "aegeus", name: "아이게우스", r: 16, color: "#3b82f6", type: "부친", desc: "아테네의 선왕", insight: "검은 돛을 보고 바다에 투신" },
        { id: "ariadne", name: "아리아드네", r: 16, color: "#ec4899", type: "조력자", desc: "크레타의 공주", insight: "실타래로 미궁 탈출을 도움" },
        { id: "minotaur", name: "미노타우로스", r: 18, color: "#ef4444", type: "적", desc: "미궁의 괴수", insight: "폭력과 야만성의 상징" }
      ],
      links: [
        { source: "theseus", target: "aegeus", label: "부자 관계" },
        { source: "theseus", target: "ariadne", label: "조력/동행" },
        { source: "theseus", target: "minotaur", label: "숙명의 결투" }
      ]
    }
  },

  romulus: {
    name: "로물루스 (Romulus)",
    overview: {
      birth: "전쟁의 신 마르스와 실비아 공주 사이에서 태어나 늑대의 젖을 먹고 자랐습니다.",
      feat: "팔라티노 언덕에 로마 건국, 원로원 및 레기온(군단) 창설, 사비니인과의 융합.",
      character: "냉철한 현실주의자, 통치 조직을 구축하는 탁월한 정치적·군사적 감각의 소유자.",
      verdict: "무에서 유를 창조해 최강의 군사 국가를 세웠으나, 독선적인 통치로 원로원의 반발을 삼."
    },
    quotes: [
      { text: "누구든 내 성벽을 넘는 자는 이와 같은 운명을 맞이하리라.", source: "플루타르코스 『비교열전』 로물루스 편" },
      { text: "로마는 망명자와 용사들에게 피난처를 제공함으로써 비로소 강대해졌다.", source: "플루타르코스 『비교열전』" }
    ],
    graph: {
      nodes: [
        { id: "romulus", name: "로물루스", r: 24, color: "#dc2626", type: "주인공", desc: "로마의 초대 국왕", insight: "국가 질서를 위해 혈육도 배제함" },
        { id: "remus", name: "레무스", r: 16, color: "#f97316", type: "형제", desc: "쌍둥이 형제", insight: "성벽을 조롱하다 비극적 죽음을 맞음" },
        { id: "mars", name: "마르스", r: 16, color: "#b91c1c", type: "신화적 부친", desc: "전쟁의 신", insight: "로마 군사력의 영적 기원" },
        { id: "tatius", name: "타티우스", r: 16, color: "#8b5cf6", type: "동업자", desc: "사비니의 왕", insight: "공동 통치로 로마의 융합을 이룸" }
      ],
      links: [
        { source: "romulus", target: "remus", label: "형제/갈등" },
        { source: "romulus", target: "mars", label: "신성한 혈통" },
        { source: "romulus", target: "tatius", label: "공동 통치" }
      ]
    }
  }
};

// 4. 영웅 퀘스트 및 천칭 분기 데이터
const HERO_QUESTS = {
  theseus: [
    {
      chapter: "CHAPTER 1",
      title: "트로이젠의 바위와 첫 출정",
      lat: 37.5000, lng: 23.3667,
      story: "성인이 된 당신은 바위 밑에서 아버지 아이게우스의 검과 샌들을 꺼냈습니다. 이제 아테네로 가야 합니다. 외할아버지는 안전한 바닷길을 권하지만, 육로에는 흉악한 노상강도들이 들끓고 있습니다.",
      choices: [
        {
          text: "안전한 바닷길을 택해 조용히 이동한다.",
          courage: -10, prudence: 15, justice: 0,
          outcome: "무사히 아테네에 도착했으나 세상 사람들은 당신의 용기를 알지 못합니다."
        },
        {
          text: "험난한 육로를 걸으며 노상강도들을 직접 평정한다.",
          courage: 20, prudence: -10, justice: 10,
          outcome: "에피다우로스에서 노상강도를 물리치고 청동 곤봉을 전리품으로 얻었습니다!"
        }
      ]
    },
    {
      chapter: "CHAPTER 2",
      title: "크레타의 미궁과 미노타우로스",
      lat: 35.2979, lng: 25.1632,
      story: "아테네 청년들을 구하기 위해 제물로 자원해 크레타에 도착했습니다. 미궁에 들어가기 전날 밤, 공주 아리아드네가 찾아와 미궁을 탈출할 실타래와 칼을 건네며 구혼을 청합니다.",
      choices: [
        {
          text: "실타래와 지혜를 빌려 공주와 함께 살아서 빠져나간다.",
          courage: 0, prudence: 15, justice: 10,
          outcome: "미노타우로스를 처단하고 실타래를 따라 모두를 안전하게 구출했습니다!"
        },
        {
          text: "외부 도움을 거부하고 오직 칼 한 자루와 감각만으로 미궁에 도전한다.",
          courage: 25, prudence: -20, justice: 0,
          outcome: "괴수를 베었으나 깊은 상처를 입고 동료들을 잃을 뻔한 위기를 겪었습니다."
        }
      ]
    }
  ],

  romulus: [
    {
      chapter: "CHAPTER 1",
      title: "팔라티노 언덕의 경계선",
      lat: 41.8890, lng: 12.4875,
      story: "새 도시의 터전으로 팔라티노 언덕을 정하고 성벽의 고랑을 파기 시작했습니다. 그러나 쌍둥이 형제 레무스가 성벽이 너무 낮다며 조롱하고 경계선을 뛰어넘었습니다.",
      choices: [
        {
          text: "국가의 기강과 법을 위해 형제라 할지라도 엄벌에 처한다.",
          courage: 10, prudence: 0, justice: 15,
          outcome: "'누구든 내 성벽을 넘는 자는 이와 같으리라!' 국가의 지엄한 법을 세웠습니다."
        },
        {
          text: "분노를 억누르고 레무스를 설득하여 언덕 밖으로 추방한다.",
          courage: -5, prudence: 15, justice: -5,
          outcome: "형제의 피는 피했으나 건국 초기 군사들의 기강이 잠시 흔들렸습니다."
        }
      ]
    },
    {
      chapter: "CHAPTER 2",
      title: "사비니 여인 축제와 국가의 존속",
      lat: 41.8986, lng: 12.5000,
      story: "새로 세운 로마에는 젊은 망명자들만 가득하여 대가 끊길 위기입니다. 이웃 부족들은 통혼을 거절합니다. 축제를 열어 사비니족을 초대한 지금, 결단을 내려야 합니다.",
      choices: [
        {
          text: "신호를 내려 여인들을 확보하고 로마의 영구적 시민으로 결합시킨다.",
          courage: 15, prudence: -10, justice: -15,
          outcome: "국가의 존속은 확보했으나 사비니 부족과의 혹독한 전쟁을 피할 수 없게 되었습니다."
        },
        {
          text: "무리한 행동을 멈추고 평화적인 동맹과 통혼 협상을 끝까지 시도한다.",
          courage: -10, prudence: 20, justice: 15,
          outcome: "정의로운 명분은 지켰으나 당분간 로마의 인구 부족은 지속되었습니다."
        }
      ]
    }
  ]
};
