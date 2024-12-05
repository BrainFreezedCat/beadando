$(document).ready(function () {
  $("#myform").validate({
    rules: {
      fname: "required",
      lname: "required",
      email: { required: true, email: true },
      password: { required: true, minlenght: 6 },
      igen: "required",
      mennyiseg: { required: true, min: 2 },
    },
    messages: {
      fname: "Kérlek írd be a keresztneved!",
      lname: "Kérlek írd be a vezetékneved!",
      password: {
        required: "Add meg a jelszavad!",
        minlenght: "Írj hosszabb jelszót!",
      },
      email: "Kérlek az igazi email címed add meg!",
      mennyiseg: "Legalább 2 emailt kell kérned!",
    },
  });
});
