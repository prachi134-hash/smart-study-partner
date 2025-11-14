// Load uploaded study materials from localStorage (from Library page)
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("materialSelect");
  const stored = JSON.parse(localStorage.getItem("materials")) || [];

  if (stored.length > 0) {
    stored.forEach(material => {
      const option = document.createElement("option");
      option.textContent = material.title;
      option.value = material.title;
      select.appendChild(option);
    });
  } else {
    const opt = document.createElement("option");
    opt.textContent = "No materials uploaded yet.";
    opt.disabled = true;
    select.appendChild(opt);
  }
});

// Quiz generation preview
document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const material = document.getElementById("materialSelect").value;
  const difficulty = document.getElementById("difficultySelect").value;
  const type = document.getElementById("questionType").value;
  const num = document.getElementById("numQuestions").value;
  const preview = document.querySelector(".quiz-preview");

  if (!material || !difficulty || !type) {
    alert("⚠️ Please fill all fields before generating!");
    return;
  }

  preview.innerHTML = `
    <strong>🎓 Generated Quiz</strong><br>
    <b>Material:</b> ${material}<br>
    <b>Difficulty:</b> ${difficulty}<br>
    <b>Type:</b> ${type}<br>
    <b>Questions:</b> ${num}<br>
    <p class="text-success mt-2">✅ Quiz ready! (AI question generation coming soon.)</p>
  `;
});
  // Highlight active sidebar link
  const links = document.querySelectorAll('.nav-menu a');
  links.forEach(link => {
    if(link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

