// Firebase 프로젝트 설정 — 갤러리 사진 "좋아요(♥)" 카운트 저장용 (Firestore)
//
// 1. https://console.firebase.google.com 에서 새 프로젝트 생성
// 2. 빌드 → Firestore Database → 데이터베이스 만들기 (프로덕션 모드, 위치 asia-northeast3 서울)
// 3. 프로젝트 설정(⚙️) → 내 앱 → 웹 앱(</>) 추가 → 표시되는 firebaseConfig 값을 아래에 붙여넣기
// 4. Firestore → 규칙 탭에 아래 규칙 붙여넣고 "게시" (likes 의 count 를 ±1 씩만 바꿀 수 있게 제한)
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /likes/{photoId} {
//          allow read: if true;
//          allow create: if request.resource.data.keys().hasOnly(['count'])
//                        && request.resource.data.count == 1;
//          allow update: if request.resource.data.keys().hasOnly(['count'])
//                        && (request.resource.data.count == resource.data.count + 1
//                         || request.resource.data.count == resource.data.count - 1);
//        }
//      }
//    }
//
// 값이 비어 있으면 좋아요 기능만 자동으로 꺼지고 사이트는 정상 동작합니다.
window.WEDDING_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDEQHLD1OMkusaw9hbwvmkjbM0ZXh0KJRE",
    authDomain: "seri-wedding-likes.firebaseapp.com",
    projectId: "seri-wedding-likes",
    storageBucket: "seri-wedding-likes.firebasestorage.app",
    messagingSenderId: "117469762295",
    appId: "1:117469762295:web:3f43a25a172193b31939f2"
};
