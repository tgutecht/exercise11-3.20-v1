var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
 var lastName = getValue('lastName');
 console.log(firstName);
 console.log(lastName);
document.getElementById("p1_fullName").innerHTML = firstName + " " + lastName;

var p1_valid2
if (firstName.length >0  && lastName.length >0)
 {
     p1_valid2 = true;
 } else {
     p1_valid2 = false;
 }
document.getElementById("p1_valid").innerHTML = p1_valid2;

document.getElementById("p1_fullNameLength").innerHTML = firstName.length + lastName.length;




    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById('p2_email').innerHTML = emailAddress;
    var emailAddressCheck;
    if (emailAddress.charAt(0)> -1)
      {
        emailAddressCheck = true;
      } else {
        emailAddressCheck = false;
      }
    document.getElementById("p2_valid").innerHTML = emailAddressCheck;
      document.getElementById("p2_emailLength").innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    document.getElementById("p3_number").innerHTML = randomNumber;
    var x ;
   if (isNaN(randomNumber))
   {x = false; } else
   {
     x = true;
   };
   document.getElementById('p3_valid').innerHTML = x;



    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    /*Add the value of `arrayInput` to the array named `arrayItems`. `arrayItems is declared on the first line of the file.
    - `p4_arraylength` - the number of items in `arrayItems`
    - `p4_valid` - the value of `arrayItems`*/
    arrayItems.push(arrayInput);
    document.getElementById('p4_arraylength').innerHTML = arrayItems.push("arrayInput");
    document.getElementById('p4_valid').innerHTML = arrayItems;

    











    ////////////////////////Your code ends here.

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
