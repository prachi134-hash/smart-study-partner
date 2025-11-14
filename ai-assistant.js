// Simulated uploaded files from Library page
const uploadedFiles = [
  "Data Structures Notes.pdf",
  "Operating Systems.pdf",
  "Python Bootcamp.pdf",
  "Probability Theory.pdf"
];

// Populate dropdown menu
const materialSelect = document.getElementById("materialSelect");
uploadedFiles.forEach(file => {
  const option = document.createElement("option");
  option.value = file;
  option.textContent = file;
  materialSelect.appendChild(option);
});

// Chat functionality
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(e){
  if(e.key === "Enter") sendMessage();
});

function sendMessage(){
  const message = userInput.value.trim();
  if(!message) return;

  // User message
  const userMsgDiv = document.createElement("div");
  userMsgDiv.classList.add("user-message");
  userMsgDiv.textContent = message;
  chatBox.appendChild(userMsgDiv);
  userInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulated AI response
  setTimeout(() => {
    const botMsgDiv = document.createElement("div");
    botMsgDiv.classList.add("bot-message");
    botMsgDiv.innerHTML = `🤖 <strong>AI Study Partner:</strong> Analyzing "${materialSelect.value}" for your question: "${message}"`;
    chatBox.appendChild(botMsgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}




  // Highlight active sidebar link
  const links = document.querySelectorAll('.nav-menu a');
  links.forEach(link => {
    if(link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

