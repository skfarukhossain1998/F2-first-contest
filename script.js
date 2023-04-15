/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


function PrintDeveloperbyMap() {
  console.log("Using Map");
  let developers=arr.filter(employee=>employee.profession==="developer");
  developers.map(developer=>
    console.log(developer));
}

function PrintDeveloperbyForEach() {
  /* using Array */

 /*  let developerName=[];
  arr.forEach(developer=>{
      if(developer.profession=="developer")
      developerName.push(developer);
  });
  console.log(developerName); */
  
 /* using object */
 console.log("Using Foreach");
  arr.forEach(developer=>{
    if(developer.profession==="developer")
    console.log(developer);
  
  });
}

function addData() {
  console.log("Adding Data Whose id is 4");
  let developer= {id:4,name:"susan",age:"20",profession:"intern"};
 arr.push(developer);
  console.log(arr);
 
}

function removeAdmin() {
  console.log("Remove the Admin Whose id is 3");
  let remAdmin=arr.filter(employee=>employee.profession!=="admin");
  console.log(remAdmin);
}

function concatenateArray() {
  console.log("Concat new array with 3 objects whose ids are 5,6,7 respectively");
  let newArray=[
    { id: 5, name: "jonny", age: "21", profession: "analyst" },
  { id: 6, name: "jasaon", age: "22", profession: "manager" },
  { id: 7, name: "karim", age: "23", profession: "designer" },
];

let concatArray=arr.concat(newArray);
console.log(concatArray);
}

/* For Testing Purpose */
/* PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray(); */