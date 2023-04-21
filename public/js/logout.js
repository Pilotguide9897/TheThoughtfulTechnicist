const logOutHandler = async () => {
    try {
 const attempt = await fetch('/add route here', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

      if (attempt.ok) {
    document.location.replace('/');
  } else {
    alert(attempt.statusText);
  }
    } catch {
        //res.status(500).
    }
};

document.getElementById('logout').addEventListener('click', logOutHandler);