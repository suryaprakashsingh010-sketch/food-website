
new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 40,
  speed: 800,
  grabCursor: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },

  effect: "slide",
});
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatbot = document.querySelector(".chatbot");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

openChat.onclick = () => chatbot.style.display = "flex";
closeChat.onclick = () => chatbot.style.display = "none";

sendBtn.onclick = sendMessage;

function sendMessage() {
  let msg = userInput.value.trim();
  if (msg === "") return;

  chatBody.innerHTML += `<div class="user-msg">${msg}</div>`;
  userInput.value = "";

  setTimeout(() => {
    botReply(msg);
  }, 600);
}

function botReply(message) {
  let reply = "Sorry, I didn't understand that.";

  if (message.toLowerCase().includes("menu")) reply = "🍔 We have burgers, pizza, sandwiches and more!";
  if (message.toLowerCase().includes("order")) reply = "🛒 You can order from our menu by clicking 'Add to Cart'.";
  if (message.toLowerCase().includes("delivery")) reply = "🚀 We provide fast delivery across your city.";
  if (message.toLowerCase().includes("hello")) reply = "Hi 👋 How can I help you today?";

  chatBody.innerHTML += `<div class="bot-msg">${reply}</div>`;
  chatBody.scrollTop = chatBody.scrollHeight;
}
