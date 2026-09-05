const heroDatabase = {
  theseus: {
    name: "테세우스 (Theseus)",
    tagline: "아테네의 기틀을 다진 연방의 건국자이자 비극적 방랑 영웅",
    overview: {
      lineage: "아테네 왕 아이게우스와 트로이젠 공주 아이트라의 아들 (동시에 포세이돈의 혈통)",
      achievements: "코린토스 지협 악당 토벌, 크레타 미노타우로스 처단, 아테네 통합(시노이키스모스 연방제) 건국",
      personality: "정의롭고 명예를 갈망하나 충동적이며 약속 망각으로 비극을 부르는 영웅적 결함",
      verdict: "테세우스는 스스로 군주제를 버리고 시민 중심의 연방 민주정을 열어준 위대한 개혁가였다."
    },
    quotes: [
      {
        text: "“헤라클레스의 영웅적 용기를 흠모하던 테세우스의 마음속에는 낮이나 밤이나 오직 그의 발자취를 따르겠다는 열망뿐이었다.”",
        context: "안전한 해로 대신 악당이 우글거리는 육로를 선택하며.",
        question: "진정한 지도자는 안전한 길보다 대중의 고통을 몸소 겪는 험로를 택해야 하는가?"
      },
      {
        text: "“낡은 판자를 계속 수리한 테세우스의 배는 철학자들에게 '사물의 동일성'에 관한 끝없는 논쟁거리를 제공했다.”",
        context: "아테네인들이 승리의 배를 수백 년간 수리하며 보존한 일화.",
        question: "모든 부품과 제도가 바뀐 국가는 과거와 동일한 국가라고 부를 수 있는가?"
      }
    ],
    center: [37.6, 23.6], zoom: 7,
    places: [
      {
        id: 1, name: "트로이젠 (Troezen)", lat: 37.5008, lng: 23.3644,
        story: "성인이 된 테세우스가 바위를 들어 올리고 검과 샌들을 얻어 여정을 시작한 곳.",
        insight: "플루타르코스는 테세우스가 험로를 택한 동기를 '헤라클레스를 향한 흠모'로 해석합니다.",
        question: "지도자의 길에서 평탄함보다 고난을 자처하는 것이 왜 대중에게 깊은 울림을 주는가?",
        image: "https://images.unsplash.com/photo-1548625361-0967265882b4?w=600&auto=format&fit=crop&q=60"
      },
      {
        id: 2, name: "아테네 (Athens)", lat: 37.9715, lng: 23.7257,
        story: "부친과 상봉하고 흩어진 촌락들을 통합하여 아테네 연방 민주정의 기틀을 마련함.",
        insight: "무력 정복보다 '설득을 통한 평화적 자치 연방 설립'을 가장 위대한 공적으로 평가합니다.",
        question: "지역적 이해관계가 첨예한 부족들을 하나로 묶어낸 소통의 비결은 무엇인가?",
        image: "https://images.unsplash.com/photo-1555993539-1732916b8235?w=600&auto=format&fit=crop&q=60"
      },
      {
        id: 3, name: "크레타 크노소스 (Knossos)", lat: 35.2984, lng: 25.1595,
        story: "미궁 속 미노타우로스를 처단하고 아테네 청년들의 조공 비극을 종식시킴.",
        insight: "승리의 귀환선 보존 과정에서 그 유명한 '테세우스의 배' 역설이 탄생했습니다.",
        question: "국가의 정체성은 법과 건축물에 있는가, 아니면 역사적 기억에 있는가?",
        image: ""
      }
    ],
    milestones: [
      {
        stage: "STAGE 1", title: "출생과 성년식",
        left: { style: "character-style", pill: "bond", pillText: "🧬 혈통과 약속", name: "아이게우스 왕", role: "친부 / 아테네 왕", text: "바위를 들어 올릴 힘이 생기거든 칼과 샌들을 챙겨 아테네로 오라는 정통성 부여." },
        right: { style: "relic-style", pill: "give", pillText: "🗝️ 증표 획득", name: "바위 밑의 검과 샌들", role: "영웅의 성물", text: "바위를 들어 올려 나약한 유년기를 벗어나 영웅의 운명을 자각하는 도화선." }
      },
      {
        stage: "STAGE 2", title: "정복과 아테네 입성",
        left: { style: "nemesis-style", pill: "clash", pillText: "⚔️ 보복적 응징", name: "코린토스 6대 악당", role: "시니스·스키론 등", text: "악당들이 나그네를 해치던 수법 그대로 처단하여 민중의 영웅으로 추앙받음." },
        right: { style: "nemesis-style", pill: "clash", pillText: "🧪 독살 음모 격돌", name: "마녀 메데이아", role: "계모 / 권력자", text: "독살하려 했으나 칼의 문양을 알아본 부친에 의해 음모가 발각되고 추방당함." }
      },
      {
        stage: "STAGE 3", title: "크노소스 미궁 결전",
        left: { style: "character-style", pill: "give", pillText: "❤️ 지혜의 조력", name: "아리아드네", role: "크레타 공주", text: "테세우스에게 실타래와 검을 건네 탈출을 도움. 이후 낙소스 섬에 남겨짐.", quote: "“출구 없는 미궁에서 실타래를 쥐어주다”" },
        right: { style: "nemesis-style", pill: "clash", pillText: "💀 숙명의 격돌", name: "미노타우로스", role: "반인반우 괴물", text: "조공 제물을 삼키던 공포의 근원. 테세우스에게 처단당하며 굴종이 종식됨." }
      },
      {
        stage: "STAGE 4", title: "건국과 철학적 유산",
        left: { style: "relic-style", pill: "clash", pillText: "🏴 망각의 비극", name: "검은 돛 (Black Sail)", role: "비극적 상징", text: "승리의 기쁨으로 흰 돛 교체를 잊어 부친 아이게우스가 바다에 투신하는 비극 초래." },
        right: { style: "relic-style", pill: "bond", pillText: "🏛️ 철학적 패러독스", name: "테세우스의 배", role: "동일성의 역설", text: "수리 보존된 배를 통해 국가와 인격의 영속성에 관한 불멸의 화두를 남김." }
      },
      {
        stage: "STAGE 5", title: "말년의 실각과 비극",
        left: { style: "character-style", pill: "bond", pillText: "🤝 맹우의 결탁", name: "페이리토오스", role: "라피타이 왕", text: "페르세포네를 납치하러 명계에 내려갔다 망각의 의자에 갇혀 권위를 실추함." },
        right: { style: "nemesis-style", pill: "clash", pillText: "📉 민중의 배반", name: "아테네 시민과 추방", role: "추방과 최후", text: "선동과 배은망덕으로 추방되어 스키로스 섬에서 절벽에 밀려 쓸쓸히 사망." }
      }
    ]
  },
  romulus: {
    name: "로물루스 (Romulus)",
    tagline: "거친 야생에서 자라 세계 제국 로마의 초석을 놓은 개척자",
    overview: {
      lineage: "전쟁의 신 마르스(아레스)와 알바 롱가의 공주 레아 실비아 사이의 쌍둥이 아들",
      achievements: "로마 성벽 경계 축조 및 건국, 원로원(100인 파트레스) 창설, 사비니족 흡수 통합",
      personality: "결단력 넘치는 군사적 지휘관이었으나 독단적 권력 행사로 원로원의 반발을 삼",
      verdict: "로물루스는 아무것도 없는 황무지에서 법과 군대를 세워 로마를 건국했으나 형제 살해의 비극을 남겼다."
    },
    quotes: [
      {
        text: "“새들이 날아오는 징조를 통해 신들이 나에게 이 언덕 위에 영원한 도시를 세우도록 명령하셨다.”",
        context: "팔라티노 언덕에서 동생 레무스와의 점괘 경합 끝에 도시의 경계를 쟁취하며.",
        question: "고대 건국자들에게 종교적 권위와 신화적 정통성은 왜 절대적이었을까?"
      },
      {
        text: "“로물루스는 폭력이 아닌 법과 원로원의 제도를 통해 방랑자 무리를 하나의 시민 공동체로 묶어냈다.”",
        context: "로마 최초의 정치 제도와 100인 원로원 의회를 창설하며.",
        question: "국가의 성립 조건에서 군사적 무력과 제도적 합의 중 무엇이 우선하는가?"
      }
    ],
    center: [41.9, 12.5], zoom: 9,
    places: [
      {
        id: 101, name: "알바 롱가 (Alba Longa)", lat: 41.7483, lng: 12.6500,
        story: "쌍둥이 형제가 태어났으나 폭군 아물리우스에 의해 바구니에 담겨 테베레 강에 버려진 곳.",
        insight: "플루타르코스는 쌍둥이가 기적적으로 살아남은 배경 뒤에 숨겨진 신화적 윤색을 합리적으로 고찰합니다.",
        question: "밑바닥 고난의 출신 배경이 영웅의 개척 정신에 어떤 영향을 주었는가?",
        image: ""
      },
      {
        id: 102, name: "팔라티노 언덕 (Palatine Hill)", lat: 41.8892, lng: 12.4875,
        story: "로물루스가 쟁기를 끌어 로마의 첫 성벽 경계를 긋고 도시의 건국을 선포한 역사적 현장.",
        insight: "성벽을 조롱하며 뛰어넘은 레무스를 벤 사건은 법과 국경의 절대적 엄정함을 세우기 위함이었습니다.",
        question: "국가 규율의 신성함을 위해 혈육의 정을 버린 행위는 지도자로서 불가피했는가?",
        image: ""
      }
    ],
    milestones: [
      {
        stage: "STAGE 1", title: "야생에서의 생존",
        left: { style: "character-style", pill: "bond", pillText: "🐺 기적의 양육", name: "카피톨리노 늑대", role: "모성과 야생의 상징", text: "테베레 강가에 표류한 갓난아기 형제에게 젖을 물려 생명을 구원함." },
        right: { style: "character-style", pill: "give", pillText: "🏡 양부모의 보호", name: "파우스툴루스 부부", role: "양치기 / 양부모", text: "아이들을 거두어 목동으로 키워내며 훗날 왕실 혈통의 비밀을 알려줌." }
      },
      {
        stage: "STAGE 2", title: "정통성 회복과 복수",
        left: { style: "nemesis-style", pill: "clash", pillText: "⚔️ 폭군 축출", name: "아물리우스 왕", role: "찬탈자 폭군", text: "외조부의 왕위를 빼앗고 형제를 버렸던 폭군을 처단하여 알바 롱가의 정의를 바로잡음." },
        right: { style: "character-style", pill: "bond", pillText: "👑 왕권 복위", name: "누미토르 왕", role: "외조부", text: "적법한 왕위를 되찾아 드린 뒤, 형제는 자신들만의 새 도시를 세우기 위해 독립함." }
      },
      {
        stage: "STAGE 3", title: "건국과 형제 살해",
        left: { style: "character-style", pill: "clash", pillText: "⚡ 비극적 충돌", name: "레무스 (Remus)", role: "쌍둥이 동생", text: "새의 점괘 갈등 끝에, 형이 쌓은 성벽을 뛰어넘으며 조롱하다 살해당함." },
        right: { style: "relic-style", pill: "give", pillText: "🏛️ 건국 의례", name: "신성한 도랑(Mundus)", role: "로마의 경계", text: "쟁기로 고랑을 파며 세운 국경선. '이 경계를 넘는 자는 누구든 죽으리라'는 법 선포." }
      },
      {
        stage: "STAGE 4", title: "연합과 제도 정착",
        left: { style: "character-style", pill: "bond", pillText: "🕊️ 평화의 중재자", name: "사비니 여인들", role: "헤르실리아와 여인들", text: "로마군과 사비니족의 격돌 한가운데 뛰어들어 피바다를 막고 두 민족의 완전 통합을 이룸." },
        right: { style: "character-style", pill: "give", pillText: "🏛️ 공화정의 싹", name: "100인 원로원", role: "파트레스(Patres)", text: "유력 가문의 원로들을 모아 국정을 의논하게 함으로써 훗날 로마 공화정의 뼈대를 만듦." }
      },
      {
        stage: "STAGE 5", title: "실종과 신격화",
        left: { style: "nemesis-style", pill: "clash", pillText: "🤫 암살 음모 의혹", name: "원로원 귀족들", role: "정치적 반대파", text: "독재자로 군림하던 로물루스를 폭풍우 속에서 암살하고 시신을 숨겼다는 플루타르코스의 가설." },
        right: { style: "relic-style", pill: "bond", pillText: "⚡ 신격화", name: "신 퀴리누스 (Quirinus)", role: "국가 수호신", text: "하늘로 승천하여 로마를 수호하는 군신 퀴리누스가 되었다고 공포되어 숭배받음." }
      }
    ]
  }
};
