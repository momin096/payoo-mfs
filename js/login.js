
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    
    // get the phone number
    const phoneNumber = document.getElementById('phone').value;
    // get the pin
    const pinNumber = document.getElementById('pin').value; 
    // check phone and pin
    if(phoneNumber === '01611175626' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = './home.html';
    }
    else{
        alert('Wrong Phone number or Pin');
    }

})