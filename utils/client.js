async function sendLoginData(dataToSend) {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Server response:', responseData);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function sendRegisterData(dataToSend) {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Server response:', responseData);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

document.querySelector('.login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  const dataToSend = { email, password };
  sendLoginData(dataToSend);
});

document.querySelector('.register-form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Assuming you have email, password, and other input fields for registration
  const email = document.getElementById('email-register').value;
  const password = document.getElementById('password-register').value;

  const dataToSend = { email, password };
  sendRegisterData(dataToSend);
});
