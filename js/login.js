
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    


    // get the phone number
    const phoneNumber = document.getElementById('phone');
    const phone = phoneNumber.value ;

    // get the pin
    const pinNumber = document.getElementById('pin');
    const pin = pinNumber.value ; 

    console.log(phone, pin)

})