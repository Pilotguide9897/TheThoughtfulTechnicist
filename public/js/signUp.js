const signUpHandler = async(event) => {
  preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

if (email && password) {
  try {
    const approval = await fetch('/api/register', {
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
}

document.querySelector(".signup-form").addEventListener("submit", signUpHandler);



