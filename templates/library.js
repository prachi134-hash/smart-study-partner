
    const uploadForm = document.getElementById("uploadForm");
    const materialsContainer = document.getElementById("materialsContainer");
    let materials = JSON.parse(localStorage.getItem("materials")) || [];

    function renderMaterials() {
      materialsContainer.innerHTML = "";
      if (materials.length === 0) {
        materialsContainer.innerHTML = '<p class="text-muted">No materials uploaded yet.</p>';
        return;
      }

      materials.forEach((mat, i) => {
        const card = document.createElement("div");
        card.classList.add("material-card");
        card.innerHTML = `
          <div class="material-info">
            <h6><i class="ri-file-text-line"></i> ${mat.title}</h6>
            <p>${mat.description}</p>
          </div>
          <div class="actions">
            <a href="${mat.file}" target="_blank" class="btn-view">View</a>
            <button onclick="deleteMaterial(${i})" class="btn-delete" title="Delete"><i class="ri-delete-bin-line"></i></button>
          </div>
        `;
        materialsContainer.appendChild(card);
      });
    }

    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("materialTitle").value.trim();
      const desc = document.getElementById("materialDesc").value.trim();
      const file = document.getElementById("materialFile").files[0];
      if (!file) return alert("Please select a file!");

      const fileURL = URL.createObjectURL(file);
      materials.push({ title, description: desc, file: fileURL });
      localStorage.setItem("materials", JSON.stringify(materials));

      uploadForm.reset();
      renderMaterials();
    });

    function deleteMaterial(i) {
      materials.splice(i, 1);
      localStorage.setItem("materials", JSON.stringify(materials));
      renderMaterials();
    }

    renderMaterials();
   // Highlight active sidebar link
  
  const links = document.querySelectorAll('.nav-menu a');
  links.forEach(link => {
    if(link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });