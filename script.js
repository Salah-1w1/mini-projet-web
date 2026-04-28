function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Veuillez remplir tous les champs");
    return false;
  }

  alert("Message envoyé !");
  return true;
}