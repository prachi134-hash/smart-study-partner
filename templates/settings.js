// Account form submission
const accountForm = document.getElementById('accountForm');
accountForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Account details updated successfully!");
});

// Password form submission
const passwordForm = document.getElementById('passwordForm');
passwordForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  if(newPass !== confirmPass) {
    alert("Passwords do not match!");
  } else {
    alert("Password changed successfully!");
  }
});

// Preferences form submission
const preferencesForm = document.getElementById('preferencesForm');
preferencesForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const darkMode = document.getElementById('darkMode').checked;
  const notifications = document.getElementById('notifications').checked;
  alert(`Preferences saved!\nDark Mode: ${darkMode}\nNotifications: ${notifications}`);
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