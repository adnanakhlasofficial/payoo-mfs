document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault();
    
    const phone = getInputValueById('phone');
    const pin = getInputValueById('pin');
    
    if(phone === '345635' && pin === '2362') {
        console.log(phone, pin);
        window.location.href = './home.html'
    } else { 
        alert("Wrong Input!!!");
    }
    
    document.getElementById("phone").value = "";
    document.getElementById("pin").value = "";
})