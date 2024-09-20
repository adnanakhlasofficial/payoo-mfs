let money = 400;
const moneyCurrency = Number(money).toLocaleString('bn-BD', { style: 'currency', currency: 'BDT', minimumFractionDigits: 0, maximumFractionDigits: 0 });
document.getElementById('balance').innerText = moneyCurrency;


// Cash In Event
document.getElementById("cash-in").addEventListener("click", (event) => {
    event.preventDefault();
    const pass = getInputValueById('pin');

    if (pass === '2362') {

        const amount = getInputNumById("amount")
        money += amount;

        document.getElementById("balance").innerText = money.toLocaleString('bn-BD', { style: 'currency', currency: 'BDT', minimumFractionDigits: 0, maximumFractionDigits: 0 });

        const cashOut = document.createElement("p");
        cashOut.innerHTML = `<p class="text-base text-blue-500">Cash In amount ${amount} Balance is ${money}`
        document.getElementById("transaction").appendChild(cashOut);

        Swal.fire({
            title: "Successfull Cash In",
            text: "Your Money has been Deposit.",
            icon: "success"
          });

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
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

            document.getElementById("balance").innerText = money.toLocaleString('bn-BD', { style: 'currency', currency: 'BDT', minimumFractionDigits: 0, maximumFractionDigits: 0 });

            const cashOut = document.createElement("p");
            cashOut.innerHTML = `<p class="text-base text-red-500">Cash Out amount ${amount} Balance is ${money}`
            document.getElementById("transaction").appendChild(cashOut);

            Swal.fire({
                title: "Successfull Cash Out",
                text: "Your Money has been withdraw.",
                icon: "success"
              });
        } else {
            Swal.fire({
                icon: "error",
                title: "Insufficient Fund",
                text: "Please Check your Balance",
              });

        }

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    setEmptyInput("amount");
    setEmptyInput("pin");
});

