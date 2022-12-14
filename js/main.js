const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
$.each(range(currentYear, currentYear - 72, -1), function (key, value) {
   $('#birth_year')
      .append($("<option></option>")
         .attr("value", key)
         .text(value));
});

function onlyLetters(str) {
   return /^[a-zA-Z]+$/.test(str);
}
// form validation
function validateForm() {
   let name = document.getElementById('name').value;
   let lname = document.getElementById('lname').value;
   let amka = document.getElementById('amka').value;
   //lname
   let errors = [];
   if (name == "") {
      errors.push("Συμπληρώστε το όνομα");
   }
   if (lname == "") {
      errors.push("Συμπληρώστε το επίθετο");
   }

   if (name != "" && !(onlyLetters(name))) {
      errors.push("Το όνομα πρέπει να έχει μόνο γράμματα");
   }
   if (lname != "" && !(onlyLetters(lname))) {
      errors.push("Το επίθετο πρέπει να έχει μόνο γράμματα");
   }
   if (amka != 11) {
      errors.push("Το ΑΜΚΑ έχει 11 αριθμούς");
   }

   displayErrorMessages(errors);

}
function displayErrorMessages(errors) {
   $('#error_handling').empty();
   $.each(errors, function (key, value) {
      $('#error_handling')
         .append($("<span></span><br/>")
            .attr("value", key)
            .text(value));
   });
}