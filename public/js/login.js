const logInHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
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
        } else {

    }

}

document.querySelector(".login-form").addEventListener("submit", logInHandler);
