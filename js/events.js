//define functions here

function getIt(){
  $('p').on('click', ()=>{
    alert("Hey!");
  })
}
function frameIt(){
  $('img').on('load', ()=>{
    $('img').addClass('tasty');
  })
}
function pressIt(){
  $('#typing').on('keydown', ()=>{

  })
}
function submitIt(){

}

$(document).ready(function(){
  getIt();
// call functions here

});
