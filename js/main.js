const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
$.each(range(currentYear, currentYear - 72, -1), function(key, value) {   
   $('#birth_year')
       .append($("<option></option>")
                  .attr("value", key)
                  .text(value)); 
});

// form validation
function validateForm(){
   alert("tes")
}