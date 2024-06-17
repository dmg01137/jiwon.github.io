// 로그인 폼 요소 가져오기
const loginForm = document.getElementById("login-form");

// 로그인 폼 제출 이벤트 리스너 추가
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    // 사용자명과 비밀번호 가져오기
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 서버로 전송할 데이터 생성
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    // POST 요청 설정
    fetch("http://localhost:8080/login", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("서버 응답 오류: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // 서버 응답 처리
        alert(data.message); // 서버로부터 받은 메시지 알림으로 표시
    })
    .catch(error => {
        // 오류 처리
        alert("에러 발생: " + error.message); // 오류 메시지 알림으로 표시
    });
});
