const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick = function(){
    title.innerHTML = "Sign up";
    nameField.style.display = "block";
}
signipBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}