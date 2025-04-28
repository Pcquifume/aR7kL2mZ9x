let passwordHex = "626f6e64696265737365"; 

function hexToString(hex) {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

function checkPassword() {
    let enteredPassword = document.getElementById('password').value;
    let decodedPassword = hexToString(passwordHex);
    
    if (enteredPassword === decodedPassword) {
        window.location.href = "config.html"; 
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
}
