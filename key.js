let eventKey = document.querySelector('.event_Key');
let eventKeycode = document.querySelector('.event_Keycode');
let eventcode = document.querySelector('.event_code');

document.addEventListener('keydown', (event)=>{
    eventKey.innerHTML = event.key;
    eventKeycode.innerHTML = event.which;
    eventcode.innerHTML = event.code;
})