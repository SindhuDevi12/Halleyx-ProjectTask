// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Dark mode toggle functionality
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.innerText = body.classList.contains("dark-mode") ? "🌞 Light Mode" : "🌙 Dark Mode";
  });

  // Navigation buttons (Optional: You can use these to redirect or animate)
  document.getElementById("navHome").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.getElementById("navProduct").addEventListener("click", () => {
    window.location.href = "product.html";
  });

  document.getElementById("navPickup").addEventListener("click", () => {
    window.location.href = "pickup.html";
  });

  document.getElementById("navProfile").addEventListener("click", () => {
    window.location.href = "profile.html";
  });

  document.getElementById("navLogout").addEventListener("click", () => {
    alert("Logged out successfully!");
    // Optional: Add logic to clear session or redirect
  });
});
