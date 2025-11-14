document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".feature-card button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".feature-card");

      if (card.querySelector("h4").textContent.includes("Upload Materials")) {
        // Go to library page
        window.location.href = "library.html";
      } else if (card.querySelector("h4").textContent.includes("Chat with AI")) {
        // Go to AI Assistant page
        window.location.href = "ai-assistant.html"; // update this with your AI page URL
      } else if (card.querySelector("h4").textContent.includes("Generate Quiz")) {
        // Go to quizzes page
        window.location.href = "quiz.html";
      }
    });
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
});

