//define functions here
function getIt() {
  alert("Hey!");
}
function frameIt() {
  $('img').addClass('tasty');
}
function pressIt(key) {
  if (key.which == 71) {
      alert('G was pressed');
  }
}
function submitIt() {
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){

  // call functions here
  $('p').on('click', getIt());
  $('form').on('submit', submitIt());
  $('#typing').on('keydown', pressIt());
  $('img').on('load', frameIt());
  $('form').on('submit', submitIt());
});
