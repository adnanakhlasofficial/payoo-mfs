let money = 400;
const moneyCurrency = Number(money).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});
document.getElementById('balance').innerText = moneyCurrency;


// Cash In Event
document.getElementById("cash-in").addEventListener("click", (event) => {
    event.preventDefault();
    const pass = getInputValueById('pin');
    
    if (pass === '2362') {
        
        const amount = getInputNumById("amount")
        money += amount;
        
        document.getElementById("balance").innerText = money.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        const cashOut = document.createElement("p");
        cashOut.innerHTML = `<p class="text-base text-blue-500">Cash In amount ${amount} Balance is ${money}`
        document.getElementById("transaction").appendChild(cashOut);
        
    } else {
        alert("Wrong Input");
    }
    
    setEmptyInput("amount");
    setEmptyInput("pin");
});


// Cash Out Event
document.getElementById("cash-out").addEventListener("click", (event) => {
    event.preventDefault();
    const pass = getInputValueById('pin');
    
    if (pass === '2362') {

        const amount = getInputNumById("amount")
        if (amount < money) {
            money -= amount;

            document.getElementById("balance").innerText = money.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });

            const cashOut = document.createElement("p");
            cashOut.innerHTML = `<p class="text-base text-red-500">Cash Out amount ${amount} Balance is ${money}`
            document.getElementById("transaction").appendChild(cashOut);
        } else {
            alert("Insufficient Balance")
            console.log(money);
            
        }

    } else {
        alert("Wrong Input")
    }

    setEmptyInput("amount");
    setEmptyInput("pin");
});

