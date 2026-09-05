const heroDatabase = {
  theseus: {
    name: "테세우스 (Theseus)",
    tagline: "아테네의 기틀을 다진 연방의 건국자이자 비극적 방랑 영웅",
    overview: {
      lineage: "아이게우스 왕과 아이트라 공주의 아들 (포세이돈의 혈통)",
      achievements: "코린토스 악당 토벌, 미노타우로스 처단, 아테네 연방(시노이키스모스) 통합",
      personality: "정의롭고 명예를 갈망하나 약속 망각으로 비극을 초래하는 결함",
      verdict: "군주제를 버리고 시민 자치 연방을 구축한 위대한 개혁가."
    },
    quotes: [
      { text: "“헤라클레스의 발자취를 따르겠다는 열망뿐이었다.”", context: "안전한 해로 대신 험난한 육로를 택하며." },
      { text: "“낡은 판자를 수리한 배는 사물의 정체성에 관한 끝없는 논쟁을 낳았다.”", context: "테세우스의 배 역설." }
    ],
    center: [37.6, 23.6], zoom: 7,
    places: [
      { id: 1, name: "트로이젠", lat: 37.5008, lng: 23.3644, story: "바위를 들어 올리고 검과 샌들을 얻어 여정을 시작한 곳." },
      { id: 2, name: "아테네", lat: 37.9715, lng: 23.7257, story: "부친 상봉 및 촌락을 통합하여 연방제를 선포함." },
      { id: 3, name: "크레타 크노소스", lat: 35.2984, lng: 25.1595, story: "미궁 속 미노타우로스를 처단하고 공납을 끝냄." }
    ],
    graph: {
      nodes: [
        { id: "theseus", name: "테세우스", r: 24, color: "#e5be75", desc: "아테네 연방의 건국자.", insight: "명예를 쫓다 약속을 잊은 모순적 영웅." },
        { id: "aegeus", name: "아이게우스", r: 18, color: "#3b82f6", desc: "친부이자 아테네 왕.", insight: "검은 돛을 보고 투신한 비운의 부친." },
        { id: "ariadne", name: "아리아드네", r: 18, color: "#3b82f6", desc: "실타래와 칼을 준 크레타 공주.", insight: "탈출의 은인이자 버림받은 여인." },
        { id: "minotaur", name: "미노타우로스", r: 20, color: "#ef4444", desc: "미궁의 반인반우 괴물.", insight: "원초적 공포와 폭력성의 상징." },
        { id: "ship", name: "테세우스의 배", r: 16, color: "#a855f7", desc: "수리하며 보존된 배.", insight: "동일성에 관한 철학적 화두." }
      ],
      links: [
        { source: "theseus", target: "aegeus" },
        { source: "theseus", target: "ariadne" },
        { source: "theseus", target: "minotaur" },
        { source: "theseus", target: "ship" }
      ]
    }
  },
  romulus: {
    name: "로물루스 (Romulus)",
    tagline: "거친 야생에서 자라 세계 제국 로마의 초석을 놓은 개척자",
    overview: {
      lineage: "군신 마르스와 공주 레아 실비아의 쌍둥이 아들",
      achievements: "로마 성벽 경계 축조 및 건국, 원로원 창설, 사비니 통합",
      personality: "결단력 넘치나 독단적인 권력 행사",
      verdict: "허허벌판에 법과 질서를 세웠으나 형제 살해의 원죄를 남김."
    },
    quotes: [
      { text: "“새들의 징조를 통해 신들이 이 언덕에 도시를 세우라 하셨다.”", context: "팔라티노 언덕에서 도시 터를 잡으며." }
    ],
    center: [41.9, 12.5], zoom: 9,
    places: [
      { id: 101, name: "알바 롱가", lat: 41.7483, lng: 12.6500, story: "형제가 버려진 비극의 시작점." },
      { id: 102, name: "팔라티노 언덕", lat: 41.8892, lng: 12.4875, story: "로마 성벽의 첫 경계를 그은 장소." }
    ],
    graph: {
      nodes: [
        { id: "romulus", name: "로물루스", r: 24, color: "#e5be75", desc: "로마 초대 건국자.", insight: "규율을 위해 형제마저 벤 지도자." },
        { id: "wolf", name: "늑대", r: 18, color: "#3b82f6", desc: "형제에게 젖을 먹인 수호자.", insight: "로마인의 강인한 야생성 상징." },
        { id: "remus", name: "레무스", r: 20, color: "#ef4444", desc: "성벽을 넘다 살해된 동생.", insight: "국경과 법질서의 가혹한 대가." },
        { id: "senate", name: "원로원", r: 18, color: "#10b981", desc: "100인 원로원 의회.", insight: "로마 공화정의 기틀." }
      ],
      links: [
        { source: "romulus", target: "wolf" },
        { source: "romulus", target: "remus" },
        { source: "romulus", target: "senate" }
      ]
    }
  }
};
