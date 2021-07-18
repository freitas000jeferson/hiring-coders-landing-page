function submitForm() {
  let name = document.getElementById("username-back-friday").value;
  let email = document.getElementById("email-back-friday").value;
  if (name && email) {
    let data = {
      name,
      email,
    };
    let convertData = JSON.stringify(data);
    localStorage.setItem("lead", convertData);
    alert(`Bem vindo ${name}!\nEnviaremos as promoções para seu email`);
  }
}
