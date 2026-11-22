// 청첩장 정보 — 실제 결혼식 정보를 여기에 입력하세요.
// 이 파일만 수정하면 다른 부분 손댈 필요 없습니다.

window.WEDDING = {
  // 신랑
  groom: {
    name: "서규원",
    father: "서만석",
    mother: "김미정",
    accounts: [
      { holder: "서규원 (신랑)", bank: "신한은행", number: "110-625-163212" },
    ],
  },

  // 신부
  bride: {
    name: "박세리",
    father: "박신규",
    mother: "이현숙",
    accounts: [
      { holder: "박세리 (신부)", bank: "국민은행", number: "596402-01-245734" },
    ],
  },

  accountHideMessage: "축하하는 마음만 받겠습니다 감사합니다 😄",

  // 결혼식 일시 (KST) — 시작 / 종료 (endDate 는 선택: 넣으면 "17:00 ~ 19:00" 처럼 표시)
  date: "2027-02-13T17:00:00+09:00",

  // 예식장 정보
  venue: {
    name: "노블발렌티 삼성",
    hall: "채플홀",
    address: "서울 강남구 봉은사로 637",
    // 좌표: 예식장 바로 앞 "노블발렌티웨딩홀" 버스정류장 (OpenStreetMap)
    lat: 37.5150389,
    lng: 127.0647123,
    // 교통편 — 항목별 { title, lines }
    transit: [
      {
        title: "대중교통",
        lines: [
          "지하철 9호선 봉은사역 4번 출구 도보 4분",
          "지하철 2호선 삼성역 7번 출구 도보 15분",
        ],
      },
      {
        title: "셔틀버스",
        lines: ["9호선 봉은사역 5번 출구 우측 (5분 간격)"],
      },
      {
        title: "주차",
        lines: ["2시간 무료", "본관 주차장 우선 이용, 만차 시 제2주차장 안내"],
      },
    ],
  },

  // 인사말
  greeting: `감사한 마음을 담아 초대하오니
참석하시어 자리를 빛내주시기를 바랍니다.`,

  // 메인 사진 (히어로)
  mainPhoto: "photos/seri_main.jpg",
  // 메인 사진 확대 — scale: 배율(1 = 원본), x/y: 확대 기준점 (사람이 작게 나온 사진용)
  // 사진 바꾸면 이것도 같이 조정하거나 지우세요.
  heroZoom: { scale: 1.8, x: "52%", y: "70%" },

  // 갤러리 사진들 (메인 사진 제외) — photos/ 에 파일 넣고 여기에 한 줄씩 추가
  // ※ 파일 이름 대소문자까지 똑같이 (GitHub Pages 는 .JPG / .jpg 구분함)
  gallery: [
    "photos/gallery-01.jpg",
    "photos/gallery-02.jpg",
    "photos/gallery-03.jpg",
    "photos/gallery-04.jpg",
    "photos/gallery-05.jpg",
    "photos/gallery-06.jpg",
    "photos/gallery-07.jpg",
    "photos/gallery-08.jpg",
    "photos/gallery-09.jpg",
  ],

  // 카카오 공유 (실제 사용 시 og:image URL 채우기)
  shareImage: "",
};
