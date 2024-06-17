let cartItems = [];

function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '<h3>주문 내역</h3>';

  let totalPrice = 0;
  cartItems.forEach(item => {
    cartDiv.innerHTML += `<div>${item.name} - ${item.price}원</div>`;
    totalPrice += item.price;
  });

  cartDiv.innerHTML += `<div>총 가격: ${totalPrice}원</div>`;
}

function signup(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // 여기에 회원가입 처리 로직을 추가합니다.
  console.log('가입한 사용자:', username);
  console.log('가입한 비밀번호:', password);
}
