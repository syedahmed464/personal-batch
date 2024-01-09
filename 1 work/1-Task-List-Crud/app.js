const selectAllInput = document.querySelector("#task-form")
// console.log(selectAllInput , "ahmed")
selectAllInput.addEventListener("submit", function(event){
  event.preventDefault();
  // console.log("ahmed")
  const selectTaskInputField = document.querySelector("#task");
  // console.log(selectTaskInputField , "ahmed");
 const selectTaskInput = selectTaskInputField.value;
//  console.log(selectTaskInput ,"" )
if(!selectTaskInput){
  alert("please fill the task input Field");
  return;
}

const collection = document.querySelector(".collection")
// console.log(collection , "ahmed")
const createLiElement = document.createElement("li");
createLiElement.className = "collection-item";
createLiElement.innerHTML = `${selectTaskInput}
                            <a href="#" class="delete-item secondary-content">
                            <i class="fa fa-remove"></i>
                            </a>`;
// console.log(selectCollection , "ahmed")
collection.append(createLiElement);
selectTaskInputField.value = "";
 })
 const selectcollection = document.querySelector(".collection")
 selectcollection.addEventListener("click", function(event){
  event.preventDefault();
  // console.log("ahmed")
  if(event.target.className === "fa fa-remove"){
  // console.log("ahmed")
 if(confirm("Are You Sure")){
  event.target.parentElement.parentElement.remove(); 
  console.log("ahmed")
 }
}
})



const selectClearTaskBtn = document.querySelector(".clear-tasks")

selectClearTaskBtn.addEventListener("click", function(event){
 event.preventDefault();
 if(confirm("Are you sure")){
  const collection = document.querySelector(".collection");
  collection.innerHTML = "";
//  console.log(collection , "ahmed")
 }
})


const filter = document.querySelector("#filter")
filter.addEventListener("keyup", function(event){
 const filterElement  = event.target;
//  console.log(filterElement , "jm,at")
 const filterInputValue = filterElement.value;
//  console.log(filterInputValue , "hamed")
const selectAllCollectionItems = document.querySelectorAll(".collection-item")
// console.log(selectAllCollectionItems , "ahmed")

 selectAllCollectionItems.forEach(function (singleLiElement){


 if(singleLiElement.innerText
  .toLowerCase()
  .indexOf(filterInputValue.toLowerCase())=== -1
 ){
 singleLiElement.style.display = "none";
 } else {
 singleLiElement.style.display = "block";
 }
//  console.log  ("ahmed")

 })



})















