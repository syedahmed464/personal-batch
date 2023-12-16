const selectAllButton = document.querySelector(".buttons");
// console.log(selectAllButton , "ahmed");
const screenInput = document.querySelector(".screen");
//  console.log(screenInput , "ahmed");
// const btnClear2 = document.querySelector(".btn-clear" );
const selectDeleteBtn = document.querySelector(".btn-delete")
//  console.log(selectDeleteBtn , "ahmed")


selectAllButton.addEventListener("click" ,function(event){
  event.preventDefault();
//  console.log("ahmed");
  const currentElement = event.target;
//   console.log(currentElement.classList, "currentElement");
if(currentElement.classList.contains("btn")){
//   console.log("ahmed");
 const getNumAttri = currentElement.getAttribute("data-num");
// console.log(getNumAttri , "ahmed");
screenInput.value += getNumAttri;
// console.log(getNumAttri , "ahmed")

}

});
const btnClear = document.querySelector(".btn-clear" );
// console.log(btnClear , "ahmed");
btnClear.addEventListener("click", function(event) {
  event.preventDefault();
  screenInput.value = "";


})
const selectEqualBtn = document.querySelector(".btn-equal");
// console.log(selectEqualBtn , "ahmed");
selectEqualBtn.addEventListener("click", function(event){
  event.preventDefault();
  screenInput.value = eval(screenInput.value);

})

screenInput.addEventListener("input", function(event){
  event.preventDefault();
  const currentElement = event.target;
  if(testOnlyLetters(currentElement.value)){
    currentElement.value = "";
    console.log("ahmed");   

  }
});

function testOnlyLetters(string =""){
     return /[a-zA-Z]+$/.test(string);
}

selectDeleteBtn.addEventListener("click", function(event) {
  // console.log(selectDeleteBtn ,"ahmed");
  event.preventDefault();
  if(alert("confirm Delete")){
    return;
    screenInput.value = "";
    console.log("ahmed")
  }
  screenInput.value = "";
  console.log("ahmed")
  
})  
