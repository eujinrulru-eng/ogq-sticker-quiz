import type { Quiz } from './schema';

export const quiz: Quiz = {
  id: 'ogq-personality',
  title: '나에게 어울리는 OGQ 스티커는?',
  description: '세 갈래 길에서 시작되는 재미있는 심리테스트',
  emoji: '✨',
  color: 'from-pink-200 via-purple-200 to-blue-200',
  questions: [
    {
      id: 'start',
      text: '세 갈래 길 앞에 선 당신. 어떤 길을 선택할래?',
      options: [
        { text: '예쁜 꽃이 양쪽으로 난 따뜻한 꽃길', nextQuestionId: 'path1-q1' },
        { text: '하늘 끝까지 멋진 가로수가 펼쳐진 시원한 나무길', nextQuestionId: 'path2-q1' },
        { text: '은은한 파도가 치는 햇살 좋은 해변길', nextQuestionId: 'path3-q1' }
      ]
    },
    // Path 1: 꽃길
    {
      id: 'path1-q1',
      text: '옷가게에서 옷을 골라보자. 어떤 옷이 제일 먼저 눈에 들어와?',
      options: [
        { text: '내가 좋아하는 색의 옷', nextQuestionId: 'path1-q1-1' },
        { text: '최신 유행 디자인', nextQuestionId: 'path1-q1-2' },
        { text: '오래 입을 수 있는 클래식한 옷', nextQuestionId: 'path1-q1-3' },
        { text: '마네킹이 입고있는 옷', nextQuestionId: 'path1-q1-4' }
      ]
    },
    {
      id: 'path1-q1-1',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '바닥에서 5센치 날 수 있음', resultId: 'r1' },
        { text: '얼굴만 투명해짐', resultId: 'r2' },
        { text: '아무리 먹어도 살 안 찜', resultId: 'r3' },
        { text: '안 웃긴 이야기도 빵빵 터트림', resultId: 'r4' }
      ]
    },
    {
      id: 'path1-q1-2',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '평생 피곤하지 않음', resultId: 'r5' },
        { text: '외출하고 들어오면 방정리 자동', resultId: 'r6' },
        { text: '대중교통 탑승시 늘 이상형 있음', resultId: 'r7' },
        { text: '평생 감기 안 걸림', resultId: 'r8' }
      ]
    },
    {
      id: 'path1-q1-3',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '추위 안 탐', resultId: 'r9' },
        { text: '가위바위보 매번 이김', resultId: 'r10' },
        { text: '방귀 낄때마다 10원 생김', resultId: 'r11' },
        { text: '노래방 무조건 100점', resultId: 'r12' }
      ]
    },
    {
      id: 'path1-q1-4',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '신호등 무조건 파란불', resultId: 'r13' },
        { text: '눈동자 반짝 거릴 수 있음', resultId: 'r14' },
        { text: '하루종일 물구나무 서기 가능', resultId: 'r15' },
        { text: '핸드폰 떨어뜨려도 안 부서짐', resultId: 'r16' }
      ]
    },
    // Path 2: 나무길
    {
      id: 'path2-q1',
      text: '길에서 배가 아픈데... 화장실이 너무 급할 때 나는?',
      options: [
        { text: '가장 높아 보이는 건물로 뛴다', nextQuestionId: 'path2-q2-1' },
        { text: '주변 사람에게 화장실 물어본다', nextQuestionId: 'path2-q2-2' },
        { text: '골목을 찾아 적당히 배출', nextQuestionId: 'path2-q2-3' },
        { text: '나와의 싸움이다 참아본다', nextQuestionId: 'path2-q2-4' }
      ]
    },
    {
      id: 'path2-q2-1',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '보기 싫은 것 흐린 눈 기능 자동 장착', resultId: 'r17' },
        { text: '야채를 고기맛 나게 먹을 수 있음', resultId: 'r18' },
        { text: '내가 싫은 말만 자동 검열 처리', resultId: 'r19' },
        { text: '배고플때 음식위치 냄새 레이더 발동', resultId: 'r20' }
      ]
    },
    {
      id: 'path2-q2-2',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '귀 크기 크거나 작게 조절 가능', resultId: 'r21' },
        { text: '1분 동안 물속에서 숨쉬기 가능', resultId: 'r22' },
        { text: '얼굴에 마음대로 털 나는 능력', resultId: 'r23' },
        { text: '물건 살 때마다 나에게만 박수 소리 들리기', resultId: 'r24' }
      ]
    },
    {
      id: 'path2-q2-3',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '지렁이 위치 탐색 레이더', resultId: 'r25' },
        { text: '한번 산 팬티는 절대 낡지 않음', resultId: 'r26' },
        { text: '볼 발그레 온오프 능력', resultId: 'r27' },
        { text: '샤워하고 거울 보면 반짝이 배경 능력', resultId: 'r28' }
      ]
    },
    {
      id: 'path2-q2-4',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '손으로 땅 파기 세계 1인자', resultId: 'r29' },
        { text: '손가락만으로 귓밥 완벽 제거 가능', resultId: 'r30' },
        { text: '뜨아 아아 변경 가능', resultId: 'r31' },
        { text: '눈싸움 세계 1인자', resultId: 'r32' }
      ]
    },
    // Path 3: 해변길
    {
      id: 'path3-q1',
      text: '뷔페에서 나는?',
      options: [
        { text: '사람들이 많은 곳으로 먼저 가본다', nextQuestionId: 'path3-q3-1' },
        { text: '샐러드부터 차근차근 먹는다', nextQuestionId: 'path3-q3-2' },
        { text: '보이는 대로 일단 담기 시작한다', nextQuestionId: 'path3-q3-3' },
        { text: '뭐가 가장 비싼지 계산부터 한다', nextQuestionId: 'path3-q3-4' }
      ]
    },
    {
      id: 'path3-q3-1',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '10초간 투명인간', resultId: 'r33' },
        { text: '1년에 한번 원하는 꿈 꾸기', resultId: 'r34' },
        { text: '손톱 모양 변경 가능', resultId: 'r35' },
        { text: '태양으로 여행가기', resultId: 'r36' }
      ]
    },
    {
      id: 'path3-q3-2',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '평생 여드름 안 남', resultId: 'r37' },
        { text: '콧물이 꿀맛임', resultId: 'r38' },
        { text: '평생 변비 없음', resultId: 'r39' },
        { text: '자가 피부 태닝 가능', resultId: 'r40' }
      ]
    },
    {
      id: 'path3-q3-3',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '똥에서 카레맛이 남', resultId: 'r41' },
        { text: '세상을 흑백으로 보기 가능', resultId: 'r42' },
        { text: '선 채로 잘 수 있음', resultId: 'r43' },
        { text: '생선가시 평생 자동 발라짐', resultId: 'r44' }
      ]
    },
    {
      id: 'path3-q3-4',
      text: '마법사가 특별한 능력을 준다면?',
      options: [
        { text: '아침에 입냄새가 안 남', resultId: 'r45' },
        { text: '1초 앞 미래 알기', resultId: 'r46' },
        { text: '세계 모든 언어로 욕 가능', resultId: 'r47' },
        { text: '오렌지를 귤로 만들기 가능', resultId: 'r48' }
      ]
    }
  ],
  results: [
    { id: 'r1', name: '평범한 동군', description: '일상의 소소한 행복을 즐기는 당신! 평범하지만 특별한 매력을 가진 성격이에요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6433d4e9e35ee', imagePath: '/attached_assets/ogq/r1.png' },
    { id: 'r2', name: '짠내나는 소금이의 일상', description: '현실적이고 알뜰한 당신! 소소한 행복을 찾는 재미가 있어요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=642fabbaa7f47', imagePath: '/attached_assets/ogq/r2.png' },
    { id: 'r3', name: '뚱뚱한건 지겨워', description: '먹방과 맛집 탐방을 좋아하는 당신! SNS에 공유하는 것도 즐겨요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6433cbd530ac0', imagePath: '/attached_assets/ogq/r3.png' },
    { id: 'r4', name: '요구르팅팅', description: '유쾌하고 밝은 에너지의 당신! 주변 사람들에게 웃음을 선물해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6427238f78c64', imagePath: '/attached_assets/ogq/r4.png' },
    { id: 'r5', name: '피곤 할 만두', description: '항상 열심히 사는 당신! 가끔은 쉬어가도 괜찮아요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=64184b93713bf', imagePath: '/attached_assets/ogq/r5.png' },
    { id: 'r6', name: '화사한 오늘', description: '밝고 긍정적인 당신! 매일이 새로운 시작이에요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=640d8f6dc3bb3', imagePath: '/attached_assets/ogq/r6.png' },
    { id: 'r7', name: '리액션 좋은 벼라리는 블로거', description: '감정 표현이 풍부한 당신! 솔직한 리뷰로 많은 사람들에게 도움을 줘요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=63356178498b2', imagePath: '/attached_assets/ogq/r7.png' },
    { id: 'r8', name: '별뿡! 껙구리', description: '건강하고 활기찬 당신! 긍정적인 에너지가 넘쳐나요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=622cb7de5cd7f', imagePath: '/attached_assets/ogq/r8.png' },
    { id: 'r9', name: '뚜숭이의 겨울일상', description: '추운 겨울도 따뜻하게 보내는 당신! 소소한 일상이 특별해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6433865777db7', imagePath: '/attached_assets/ogq/r9.png' },
    { id: 'r10', name: '황금 복돼지', description: '행운과 재물운이 따르는 당신! 좋은 일이 가득할 거예요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=643b4dcc57231', imagePath: '/attached_assets/ogq/r10.png' },
    { id: 'r11', name: '피자 쏩니다! ^^', description: '너그럽고 베푸는 것을 좋아하는 당신! 주변 사람들과 함께 즐거워요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=636d0a7b7a2dc', imagePath: '/attached_assets/ogq/r11.png' },
    { id: 'r12', name: '편식하는 낼름이', description: '자신만의 취향이 확실한 당신! 좋아하는 것에 진심이에요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=62a1604fcfcbf', imagePath: '/attached_assets/ogq/r12.png' },
    { id: 'r13', name: '넹', description: '순응적이고 긍정적인 당신! "넹" 한마디로 분위기 메이커예요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6141a79059ba3', imagePath: '/attached_assets/ogq/r13.png' },
    { id: 'r14', name: '귀요미의 하루', description: '사랑스럽고 귀여운 매력의 당신! 주변 사람들에게 힐링을 줘요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=610f3b292beb7', imagePath: '/attached_assets/ogq/r14.png' },
    { id: 'r15', name: '냥주의 다이어리', description: '자유롭고 독특한 당신! 나만의 방식으로 하루를 기록해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6103768b07f38', imagePath: '/attached_assets/ogq/r15.png' },
    { id: 'r16', name: '대충 생겨먹은 한글자', description: '단순하고 직관적인 당신! 복잡한 것보다 심플한 게 좋아요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6113f76ef88ec', imagePath: '/attached_assets/ogq/r16.png' },
    { id: 'r17', name: '헹냥헹냥 겨울', description: '겨울을 사랑하는 당신! 눈 오는 날이 가장 행복해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=64333f8b2cc8a', imagePath: '/attached_assets/ogq/r17.png' },
    { id: 'r18', name: '밭 친구들', description: '건강한 식습관을 가진 당신! 채소도 맛있게 즐겨요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=636bc24bce2f1', imagePath: '/attached_assets/ogq/r18.png' },
    { id: 'r19', name: '내맘대로 얄미냥', description: '자유롭고 당당한 당신! 내 마음대로 하는 게 최고예요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=642fa3a7df496', imagePath: '/attached_assets/ogq/r19.png' },
    { id: 'r20', name: '진짜 귀여운 쪼꼬', description: '귀엽고 사랑스러운 당신! 식욕이 왕성한 매력이 넘쳐요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6426e17293fa4', imagePath: '/attached_assets/ogq/r20.png' },
    { id: 'r21', name: '소심 다정 울망울망 울망쥐', description: '소심하지만 다정한 당신! 작고 귀여운 매력이 넘쳐요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6434a6b1217f6', imagePath: '/attached_assets/ogq/r21.png' },
    { id: 'r22', name: '오리너구리~ 지롱', description: '독특하고 특별한 당신! 물과 땅 어디서나 적응력이 뛰어나요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6433edd7eccc5', imagePath: '/attached_assets/ogq/r22.png' },
    { id: 'r23', name: '오늘의 바미', description: '자연스러운 매력의 당신! 있는 그대로의 모습이 아름다워요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=643253742fb43', imagePath: '/attached_assets/ogq/r23.png' },
    { id: 'r24', name: '뚜비쓰 즐거운 쇼핑생활', description: '쇼핑을 즐기는 당신! 소비의 즐거움을 아는 성격이에요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=643249694380a', imagePath: '/attached_assets/ogq/r24.png' },
    { id: 'r25', name: '두덕티콘', description: '자연을 사랑하는 당신! 생명의 소중함을 아는 성격이에요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=64323054ff151', imagePath: '/attached_assets/ogq/r25.png' },
    { id: 'r26', name: '나는 싯구곰이다 -움티-', description: '검소하고 실용적인 당신! 오래 사용하는 것을 좋아해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=642af926b664b', imagePath: '/attached_assets/ogq/r26.png' },
    { id: 'r27', name: '긍정회로가동! 노랑댕댕이', description: '언제나 긍정적인 당신! 밝은 에너지로 주변을 환하게 해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=64303040f6d70', imagePath: '/attached_assets/ogq/r27.png' },
    { id: 'r28', name: '헬스하는 곰아저씨', description: '건강 관리를 중요하게 생각하는 당신! 운동을 즐겨요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=642f78c8232d8', imagePath: '/attached_assets/ogq/r28.png' },
    { id: 'r29', name: '피그 아니고 기니피그', description: '부지런하고 끈기있는 당신! 목표를 향해 꾸준히 나아가요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=643c557897cfe', imagePath: '/attached_assets/ogq/r29.png' },
    { id: 'r30', name: '무표정한 테토끼', description: '차분하고 꼼꼼한 당신! 디테일을 놓치지 않는 완벽주의자예요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6433aedd1df03', imagePath: '/attached_assets/ogq/r30.png' },
    { id: 'r31', name: '냥이의 일상', description: '자유롭고 유연한 당신! 상황에 맞게 잘 적응하는 성격이에요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6433d7a1e5e57', imagePath: '/attached_assets/ogq/r31.png' },
    { id: 'r32', name: '부릎눈 곰', description: '경쟁심이 강하고 승부욕이 있는 당신! 지는 걸 싫어해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=64336527f1235', imagePath: '/attached_assets/ogq/r32.png' },
    { id: 'r33', name: '영혼잃은 내일상', description: '때론 투명인간처럼 조용히 지내고 싶은 당신! 나만의 시간이 소중해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=642d089f693f8', imagePath: '/attached_assets/ogq/r33.png' },
    { id: 'r34', name: '프룽이의 그림일기', description: '꿈과 상상력이 풍부한 당신! 매일을 그림일기처럼 소중하게 기록해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=63d2e3598fc3f', imagePath: '/attached_assets/ogq/r34.png' },
    { id: 'r35', name: '용감한 아기 뱀', description: '작지만 용감한 당신! 도전을 두려워하지 않는 용기가 있어요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=637f13dbf024c', imagePath: '/attached_assets/ogq/r35.png' },
    { id: 'r36', name: '외계에서 온 개구리 왜구리', description: '독특하고 개성 넘치는 당신! 남들과 다른 길을 가는 매력이 있어요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=60e8bf8efefa4', imagePath: '/attached_assets/ogq/r36.png' },
    { id: 'r37', name: '말랑식빵 퐁실이', description: '부드럽고 따뜻한 성격의 당신! 주변 사람들에게 편안함을 줘요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=63d1f58b00dda', imagePath: '/attached_assets/ogq/r37.png' },
    { id: 'r38', name: '우람다람쥐', description: '귀엽지만 씩씩한 당신! 작은 것에서 큰 행복을 찾아요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=638669323055f', imagePath: '/attached_assets/ogq/r38.png' },
    { id: 'r39', name: '엉뚱한 매력 키피바라', description: '느긋하고 평화로운 당신! 여유로운 모습이 매력적이에요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=623879d3c3bff', imagePath: '/attached_assets/ogq/r39.png' },
    { id: 'r40', name: '운동하는 냥냥이', description: '건강을 중요하게 생각하는 당신! 활동적인 라이프스타일을 즐겨요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=61372bab9876f', imagePath: '/attached_assets/ogq/r40.png' },
    { id: 'r41', name: '카레곰 스티커', description: '독특한 취향의 당신! 남들이 생각 못한 조합을 즐겨요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=5f48c2d3e250c', imagePath: '/attached_assets/ogq/r41.png' },
    { id: 'r42', name: '깜냥이 스티커', description: '차분하고 안정적인 당신! 흑백처럼 명확한 판단력이 있어요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=642becd80c653', imagePath: '/attached_assets/ogq/r42.png' },
    { id: 'r43', name: '마루는 강쥐', description: '충실하고 사랑스러운 당신! 언제나 곁에 있어주는 든든한 친구예요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=60d76a0a265f1', imagePath: '/attached_assets/ogq/r43.png' },
    { id: 'r44', name: '문어 최숙희와 개 김형식', description: '다재다능한 당신! 여러 가지 일을 동시에 잘 해내요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=5aff60a9904a1', imagePath: '/attached_assets/ogq/r44.png' },
    { id: 'r45', name: '좀비고 눈요미', description: '밤낮이 바뀐 올빼미족! 늦은 시간에 더 집중력이 좋아요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=59a19958d97bd', imagePath: '/attached_assets/ogq/r45.png' },
    { id: 'r46', name: '왕왕이', description: '직감이 뛰어난 당신! 앞을 내다보는 통찰력이 있어요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6435171370583', imagePath: '/attached_assets/ogq/r46.png' },
    { id: 'r47', name: '이런저런 리액션', description: '감정 표현이 풍부한 당신! 다양한 리액션으로 대화를 풍성하게 해요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=6434b97f8a149', imagePath: '/attached_assets/ogq/r47.png' },
    { id: 'r48', name: '귤곰이의 느긋한 일상', description: '여유롭고 달콤한 당신! 작은 것에서 큰 기쁨을 느껴요.', ogqLink: 'https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=64341176649d7', imagePath: '/attached_assets/ogq/r48.png' }
  ]
};
