function generatePassword() {
  const characters =
    "A/BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/";

  let passwordLength = 15;
  let passwordOneText = " ";
  let passwordTwoText = " ";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);

    passwordOneText += characters.substring(randomIndexOne, randomIndexOne + 1);
    passwordTwoText += characters.substring(randomIndexTwo, randomIndexTwo + 1);
  }

  let passwordOne = document.getElementById("password-one");
  let passwordTwo = document.getElementById("password-two");

  passwordOne.textContent = passwordOneText;
  passwordTwo.textContent = passwordTwoText;
}
