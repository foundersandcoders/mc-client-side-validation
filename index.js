var submit = document.getElementById('submit');
var emailBox = document.getElementById('email');
var passwordBox = document.getElementById('password');
var confirmPasswordBox = document.getElementById('confirmPassword');
var passwordWarning = document.getElementById('passwordWarning');
var emailWarning = document.getElementById('emailWarning');
var noEmailWarning = document.getElementById('noEmailWarning');

function passwordCheck(password, passwordConfirm) {
  if (password !== passwordConfirm) {
    passwordWarning.classList.remove('invisible');
    passwordBox.classList.add('warning');
    confirmPasswordBox.classList.add('warning');
  }
};

submit.addEventListener('click', function (e){
  // e.preventDefault();
  var email = e.path[1].elements[0].value;
  var password = e.path[1].elements[1].value;
  var passwordConfirm = e.path[1].elements[2].value;
  passwordCheck(password, passwordConfirm);

});
