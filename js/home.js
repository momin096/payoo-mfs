// Add money to the account
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault(); // prevent page reload after form submit
    const addMoneyInput = document.getElementById('add-amount').value;
    const addMoney = parseInt(addMoneyInput);
    const pinNumberINput = document.getElementById('add-pin').value;

    if (pinNumberINput === '1234') {
        // get the current balance
        const balanceConst = document.getElementById('balance').innerText;
        const balance = parseInt(balanceConst);
        const newBalance = balance + addMoney;

        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('Failed to add Money ! Please Try again');
    }
})



// Cash Out 

document.getElementById('cash-out-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('cash-out-amount').value ;
    const cashOut = parseInt(cashOutInput);
    const pinNumber = document.getElementById('cash-out-pin').value;
    const balance = document.getElementById('balance').innerText;


    if(pinNumber === "1234" && balance >= cashOut){
        const balanceConst = document.getElementById('balance').innerText;
        const balance = parseInt(balanceConst);

        const newBalance = balance - cashOut;

        document.getElementById('balance').innerText = newBalance;
    }

    else{
        alert('Something wrong');
    }
})