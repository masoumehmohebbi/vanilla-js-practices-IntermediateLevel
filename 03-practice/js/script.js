let usersInformation ={
    ros:['123'],
    ali:['456'],
    rayan:['789'],
    jessy:['1011'],
}
let inputUsername = document.querySelector('.input-username'),
    inputPassword = document.querySelector('.input-password')

let messagePassword = document.querySelector('.message-password')

let formButton = document.querySelector('button')

function checkingDatas() {
    if (inputUsername.value || inputUsername.value) {
        if ((usersInformation[inputUsername.value]) === undefined) {
            alert("Sorry, You have not sigIn")
        }else{
            let userPass = (usersInformation[inputUsername.value])
            userPass = userPass.join()
    
            if ((userPass === inputPassword.value)){
                alert("Welcome To Your Dashboard!")
            }else{
                messagePassword.innerHTML="Your Pass in not Correct!"
            }
        }
    }else{
        alert('Please Insert Correct Value!!')
    }
    inputUsername.value = ""
    inputPassword.value = ""
}

function defaultColersFunc() {
    setInterval(() => {
        let redColor = Math.floor(Math.random() * 255)
        let blueColor = Math.floor(Math.random() * 255)
        let grenColor = Math.floor(Math.random() * 255)

        document.body.style.backgroundColor='rgb('+ redColor + ',' + grenColor + ',' + blueColor +')'
    }, 2000);
} 

function InputBlurFunc() {
  inputUsername.style.backgroundColor = "#fff"
}
function PasswordBlurFunc() {
    inputPassword.style.backgroundColor = "#fff"
}
function InputFocusFunc() {
    inputUsername.style.backgroundColor = "pink"
    inputUsername.style.outline="none"
}
function PasswordFocusFunc() {
    inputPassword.style.backgroundColor = "pink"
    inputPassword.style.outline="none"
}
 
inputUsername.addEventListener('focus', InputFocusFunc)
inputPassword.addEventListener('focus', PasswordFocusFunc)
inputUsername.addEventListener('blur', InputBlurFunc)
inputPassword.addEventListener('blur', PasswordBlurFunc)
formButton.addEventListener('click', checkingDatas)
window.addEventListener('load', defaultColersFunc)