function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU5167ae6c6f6728c2f9626231e3a55b9b6ea1d22e934c84f897eec8572877457c4ca5a962f1b23eb8fd58a65676ca10fe'
        },
        body: JSON.stringify({
            UserName : username,
            PassWord : password
        })
    })

    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('message');
        if (data.status === true) {
            messageElement.innerHTML = `
                <p>Login successful!</p>
                <p>Status: ${data.status}</p>
                <p>Type: ${data.type}</p>
                <p>Username: ${data.username}</p>
                <p>TU Status: ${data.tu_status}</p>
                <p>Status ID: ${data.statusid}</p>
                <p>Display Name (TH): ${data.displayname_th}</p>
                <p>Display Name (EN): ${data.displayname_en}</p>
                <p>Email: ${data.email}</p>
                <p>Department: ${data.department}</p>
                <p>Faculty: ${data.faculty}</p>
            `;
        }else{
            messageElement.innerText = 'Login failed. ' + data.message;
        }
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Error: ' + error;
    });
}



function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}
