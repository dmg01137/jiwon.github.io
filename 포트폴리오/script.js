// 포트폴리오 항목을 동적으로 추가하는 예제
const portfolioSection = document.getElementById('portfolio-items');

// 포트폴리오 항목들
const portfolioItems = [
    { title: '웹사이트 제작', description: 'HTML, CSS, JavaScript를 사용하여 동적인 웹사이트를 제작하였습니다.' },
    { title: '웹 애플리케이션 개발', description: 'React 프레임워크를 사용하여 실시간 채팅 애플리케이션을 개발하였습니다.' },
    { title: 'UI/UX 디자인', description: '사용자 경험을 개선하기 위한 디자인 개선 작업을 수행하였습니다.' }
];

// 포트폴리오 항목들을 HTML로 변환하여 추가
portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');
    portfolioItem.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;
    portfolioSection.appendChild(portfolioItem);
});
