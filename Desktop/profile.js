// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Simulated user profile data (in real app, fetch from backend)
const userProfile = {
  name: "Sindhu Devi",
  email: "sindhu@example.com",
  phone: "+91 9876543210",
  address: "Nagapattinam, Tamil Nadu",
  role: "Eco Warrior",
  pickupsScheduled: 3,
  totalEwasteKg: 24.5
};

// Populate profile data into HTML
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('name').innerText = userProfile.name;
  document.getElementById('email').innerText = userProfile.email;
  document.getElementById('phone').innerText = userProfile.phone;
  document.getElementById('address').innerText = userProfile.address;
  document.getElementById('role').innerText = userProfile.role;
  document.getElementById('pickupsScheduled').innerText = userProfile.pickupsScheduled;
  document.getElementById('totalEwasteKg').innerText = userProfile.totalEwasteKg + " KG";
});

// Optional: Add animated alert on update/save
function showAlert(message) {
  const alert = document.createElement('div');
  alert.className = 'alert-message';
  alert.innerText = message;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 3000);
}

// Save changes event (if you want edit functionality)
const saveBtn = document.getElementById('saveBtn');
if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    showAlert("Profile changes saved!");
  });
}
