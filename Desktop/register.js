// js/register.js
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  try {
    const res = await fetch('http://localhost:5001/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Registration successful! 🎉 Now login.');
      window.location.href = 'login.html';
    } else {
      alert(data.message || 'Registration failed.');
    }
  } catch (err) {
    console.error(err);
    alert('Server error!');
  }
});
