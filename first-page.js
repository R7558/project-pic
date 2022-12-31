document.getElementById('button-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    if (userEmail=='abc@def.com' && password=='rup@#sana') {
        //window.location.href="web.html"
    }
    
})