(function() {
  emailjs.init("Luis Angel Castañeda"); // Reemplaza TU_USER_ID con tu User ID de EmailJS
})();

document.getElementById('submit').addEventListener('click', function() {
  const formData = new FormData(document.getElementById('survey-form'));
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  
  emailjs.send("service_Luiscastañeda", "template_Inclusion", data)
    .then(() => alert("Formulario enviado correctamente"))
    .catch(err => alert("Hubo un error al enviar el formulario: " + err));
});
