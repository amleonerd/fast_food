function getValue(){
    var customerOrder = document.getElementById('fastFoodApp');
    var x = document.getElementById('food').value;
    var z = document.getElementById('qty').value;
    customerOrder.innerHTML=x +  z;
    console.log(x+z);
    var customerOrder = "food, qty";
    var myArray = customerOrder.split(",");
}


function clearText()  
{
    document.getElementById('food').value = "";
    document.getElementById('qty').value = "";
}  
//object named menu, properties i.e. string like "fries", number as the value
function updateInventory(menu){
    var inventory= (menu).reduce(function(acc, next){
        if (acc[next[1]])
            acc[next[1]]+= next[0];
    else {
        acc[next[1]] = next[0];
    }
    return acc;
    }, {});
    return inventory;
}
var menu = [
    [45, "fries"],
    [50, "hamburger"],
    [30, "cheeseburger"],
    [25, "shakes"]
];
updateInventory(menu)
var x = menu.length;
var y = menu [45];
var i;
for (i = 25; i < 51; i++){
    console.log(i);
}
var text = "";
var a;
for (a in menu) {
  text += menu[a] + " ";
}
if (menu < 25) {
    greeting = "shakes";
  } else if (time < 30) {
    greeting = "cheeseburger";
    } else if (time < 45) {
    greeting = "fries";  
        } else if (time < 50) {
    greeting = "hamburger";
  } else {
    greeting = "Not on the menu";
  }

  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("reload").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
  const reload = document.querySelector('#reload');
  reload.addEventListener('click', () => {
    log.textContent ='';
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
  });
  
  window.addEventListener('load', (event) => {
      log.textContent = log.textContent + 'load\n';
  });
  
  document.addEventListener('readystatechange', (event) => {
      log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
  });

 

/*Fast Food app Frontend - Exercise 1
Create an html text input box, our customers are going to put their orders in here. Their orders are going to look like: "1: french fries, 2: shakes"
Add an order button. When we click this button it will send our order to the kitchen.
Attach a Javascript event listener to the order button and listen for the click event. We are going to need to query the order button and then attach the event listener to it.
In the listener take the customer's order and save it to a variable named customerOrder. log the customer's order to the console.
Clear the contents in the input box. We want to free it up for the next customer's order
Bonus Make a string with the customer's order in it and repeat back to the customer what they ordered. */

/*Fast Food app Frontend - Exercise 2
Create an object named menu where we'll save the menu for the restaurant. For each property Each property should be a string like "fries" and add a number as the value. That will be the amount of stock the store has.
Take the customerOrder variable, which should be a string and split it on the comma character. Save the result to the order array variable. This will turn it into an array that is comma delimeted. Because usually there is a space after a comma we are going to need to trim the white space. This will make it so there is no extra white space.
Create a loop can be any kind of loop, while, for, foreach whatever you are comfortable with. Loop through the entire order array from 0 to the length of the array
In the loop split each item of this array on the colon character. You will probably have to trim the leading and trailing whitespace again.
Now that we have the customer's item they would like to order, create a conditional if statement and check to see if the customer actually ordered something off of the menu. This is going to require a for...in loop to loop through the menu object. Just check to see if the property exists. If it doesn't exist log to the console how the customer did not order something off of the menu.
If the previous statement was true make another conditional statement that checks to see if there is enough stock in the restaurant to fulfill the customer's order. If there is not enough, then let the customer know that you can not fulfill that particular order.
If the customer ordered something on the menu and it is in stock then deduct the number the customer ordered from the restaurant's stock.
Bonus Create a button that you could click to display the restaurant's inventory. */