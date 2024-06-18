function generateBotResponse(userInput) {
  // 특정 키워드를 확인하고 이에 따라 응답
  if (/잘자|잘 자/.test(userInput)) {
      return '좋은 꿈 꾸세요.';
  }
  if (/안녕|안녕하세요/.test(userInput)) {
      return '반가워요.';
  }
  if (/고민/.test(userInput)) {
      return '걱정이 많나봐요.';
  }
  if (/기분/.test(userInput)) {
      return '좋은 하루 보냈으면 좋겠네요.';
  }
  if (/여행|여행지/.test(userInput)) {
      return '어떤 지역으로 여행을 가고 싶으세요? 대구, 서울, 강원도, 제주, 부산, 경기도, 대전, 울산 중에서 선택해주세요.';
  }
  if (/대구/.test(userInput)) {
      return '대구에서는 이월드, 팔공산, 경북대학교 등을 추천해요.';
  }
  if (/서울/.test(userInput)) {
      return '서울에서는 경복궁, 남산 타워, 홍대 등을 추천해요.';
  }
  if (/강원도/.test(userInput)) {
      return '강원도에서는 설악산, 남이섬, 강릉 등을 추천해요.';
  }
  if (/제주/.test(userInput)) {
      return '제주도에서는 성산일출봉, 용두암, 휴암해변 등을 추천해요.';
  }
  if (/부산/.test(userInput)) {
      return '부산에서는 해운대, 광안리, 태종대 등을 추천해요.';
  }
  if (/경기도/.test(userInput)) {
      return '경기도에서는 에버랜드, 남한산성, 수원화성 등을 추천해요.';
  }
  if (/대전/.test(userInput)) {
      return '대전에서는 엑스포 공원, 대전 동물원, 한밭 수목원 등을 추천해요.';
  }
  if (/울산/.test(userInput)) {
      return '울산에서는 울산 대공원, 울산바위 등을 추천해요.';
  }

  // 기본 응답
  const responses = [
      '그렇군요',
      '좋은 대화에요',
      '그래요..요즘 기분이 어떤가요?',
      '하하',
      '오! 그렇군요',
      '네',
      '날씨가 좋죠?',
      '그렇구나. 오늘 점심은 뭐 먹었어요?',
      '오...!',
      '재밌네요.'
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");
  
  // 사용자 입력을 채팅창에 추가
  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add("chat-message", "user-message"); // 사용자 메시지에 user-message 클래스 추가
  userMessageElement.textContent = userInput;
  chatBox.appendChild(userMessageElement);
  
  // 챗봇 응답 생성
  const botResponse = generateBotResponse(userInput);
  
  // 챗봇 응답을 채팅창에 추가
  const botMessageElement = document.createElement("div");
  botMessageElement.classList.add("chat-message", "bot-message"); // 챗봇 메시지에 bot-message 클래스 추가
  botMessageElement.textContent = botResponse;
  chatBox.appendChild(botMessageElement);


}
