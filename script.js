// ==========================
// Part 1: Date Display
// ==========================

// 1. Create a Date object
const today = new Date();

// 2. Get the current month, day, and year
var month = today.getMonth(); // 0-based (0 = January)
var day = today.getDate();
var year = today.getFullYear();

// 3. Adjust month (add 1 because it's 0-based)
month = month + 1;

// 4. Add leading zeros if needed
if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

// 5. Create formatted string
const formattedDate = `Today is ${month}/${day}/${year}`;

// 6. Display in the page
document.getElementById("dateOutput").textContent = formattedDate;

// ==========================
// Part 2: Number Conversion
// ==========================

// 1. Create variables
var value1 = "10";
var value2 = "123456789";
var value3 = "102938.4756";
var value4 = "COMPUTER SCIENCE WEB ENGINEERING";

// 2. Convert values
var converted1 = Number(value1);
var converted2 = Number(value2);
var converted3 = Number(value3);
var converted4 = Number(value4);

// 3. Check NaN
var isNaN1 = Number.isNaN(converted1);
var isNaN2 = Number.isNaN(converted2);
var isNaN3 = Number.isNaN(converted3);
var isNaN4 = Number.isNaN(converted4);

// 4. Check Integer
var isInt1 = Number.isInteger(converted1);
var isInt2 = Number.isInteger(converted2);
var isInt3 = Number.isInteger(converted3);
var isInt4 = Number.isInteger(converted4);

// 5. Create result strings
var result1 = `Original: "${value1}" → Converted: ${converted1} → isNaN: ${isNaN1} → isInteger: ${isInt1}`;
var result2 = `Original: "${value2}" → Converted: ${converted2} → isNaN: ${isNaN2} → isInteger: ${isInt2}`;
var result3 = `Original: "${value3}" → Converted: ${converted3} → isNaN: ${isNaN3} → isInteger: ${isInt3}`;
var result4 = `Original: "${value4}" → Converted: ${converted4} → isNaN: ${isNaN4} → isInteger: ${isInt4}`;

// 6. Combine into ONE string
var finalOutput = result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4;

// 7. Display on webpage
document.getElementById("numberConversionOutput").innerHTML = finalOutput;

// ==========================
// Part 3: Math & Formatting
// ==========================

// 1. Create numeric variables
var itemPrice = 49.99;
var taxRate = 0.0825; // 8.25%
var shipping = 5.50;

// 2. Perform calculations
var subtotal = itemPrice + shipping; // addition
var taxAmount = subtotal * taxRate; // multiplication
var total = subtotal + taxAmount; // addition

// 3. Format numbers
var formattedSubtotal = subtotal.toFixed(2);
var formattedTax = taxAmount.toFixed(2);
var formattedTotal = total.toFixed(2);

// 4. Build output string
var mathResults =
  `Item Price: $${itemPrice}<br>` +
  `Shipping: $${shipping}<br>` +
  `Subtotal: $${formattedSubtotal}<br>` +
  `Tax (8.25%): $${formattedTax}<br>` +
  `Total Cost: $${formattedTotal}`;

// 5. Display on webpage
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

//Check if a value is NaN
var message1;

if (Number.isNaN(converted1)) {
  message1 = "The 1st value is NOT a valid number.";
} else {
  message1 = "The 1st value is a valid number.";
}

//Check if total cost is greater than 50
var message2;

if (total > 50) {
  message2 = "Total cost is greater than $50.";
} else {
  message2 = "Total cost is $50 or less.";
}

// Combine messages
var conditionalOutput = "<br><br><strong>Conditional Messages:</strong><br>" +
  message1 + "<br>" +
  message2;

// Display by APPENDING to math section
document.getElementById("mathOutput").innerHTML += conditionalOutput;