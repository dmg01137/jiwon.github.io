// script_lock_screen.js

function checkPassword() {
    var password = document.getElementById("password").value;
    // 비밀번호 확인
    if (password === "1234") {
        // 올바른 경우 페이지 이동
        window.location.href = "phone.html";
    } else {
        // 잘못된 경우 알림 표시
        alert("Incorrect password. Please try again.");
    }
    // 폼 전송 방지
    return false;
}
