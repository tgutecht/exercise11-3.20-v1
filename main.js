var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
    document.getElementById('p1_fullName').innerHTML= firstName+" "+lastName;

    var p1_valid2
    if (firstName.Length>0 && lastName.Length>0) {
      p1_valid2 = true;
    } else {
      p1_valid2 = false;
    };
    document.getElementById('p1_valid').innerHTML=p1_valid2;
    document.getElementById('p1_fullNameLength').innerHTML = firstName.length + lastName.length;

    // Part 2
    var emailAddress = getValue('emailAddress');
    document.getElementById("p2_email").innerHTML= emailAddress;
    var p2_email2;
    if (emailAddress.indexOf('@')==-1){
      p2_email2=false;
    } else {
      p2_email2=true;
    };
    document.getElementById("p2_valid").innerHTML= p2_email2;
    document.getElementById('p2_emailLength').innerHTML=emailAddress.length;



    // Part 3
    // var ranNum = getValue('randomNumber');
    // document.getElementById('p3_number').innerHTML=ranNum;
    // var p3_validVar;
    // if (isNaN("ranNum")) {
    //   p3_validVar = No;
    // } else {
    //   p3_validVar = Yes;
    // };
    // document.getElementById('p3_valid').innerHTML=p3_validVar;




    // Part 4
    var arrayInput = getValue('arrayValue');
    document.getElementById('p4_valid').innerHTML = arrayInput;
    document.getElementById('p4_arraylength').innerHTML = arrayItems.push("arrayInput");
  // WHY arrayy items

  ar fruits = ["Banana", "Banana", "Apple", "Apple","Banana","Apple"];

// super challange
  var newArray = [];
  for(var i = 0; i < fruits.length; i++){
  if(newArray.indexOf(fruits[i]) === -1){
       newArray.push(fruits[i]);
       var newVar;
     }
   }


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
