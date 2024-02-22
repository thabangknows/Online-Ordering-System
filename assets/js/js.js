





function validate_form() {
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('password2');
    let btn = document.getElementById('btn_01')
    let error_msg = document.getElementById('error_msg')
   

    if(pass1.value === pass2.value){
        btn.style.display = 'block'
        error_msg.display = 'none'
    }else {
        btn.style.display = 'none'
        error_msg.display = 'block'
    }
}