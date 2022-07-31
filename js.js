
const formCreateAccount= document.querySelector('.form-create-account');
const createAccountButtons= document.querySelector('.create-account-buttons');

const buttonMail= ()=>{
    if(formCreateAccount.classList.contains("display-window")){
        formCreateAccount.classList.remove("display-window");
        createAccountButtons.classList.add("display-buttons")
    }else{
        formCreateAccount.classList.add("display-window");
        createAccountButtons.classList.remove("display-buttons")
    } 
}

