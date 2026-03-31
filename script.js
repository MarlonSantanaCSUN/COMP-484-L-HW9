// ==========================
// Part 1: Date Display
// ==========================

// 1. Create a Date object
const today = new Date();

// 2. Get the current month, day, and year
let month = today.getMonth(); // 0-based (0 = January)
let day = today.getDate();
let year = today.getFullYear();

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
let value1 = "42";
let value2 = "100";
let value3 = "19.75";
let value4 = "hello";

// 2. Convert values
let converted1 = Number(value1);
let converted2 = Number(value2);
let converted3 = Number(value3);
let converted4 = Number(value4);

// 3. Check NaN
let isNaN1 = Number.isNaN(converted1);
let isNaN2 = Number.isNaN(converted2);
let isNaN3 = Number.isNaN(converted3);
let isNaN4 = Number.isNaN(converted4);

// 4. Check Integer
let isInt1 = Number.isInteger(converted1);
let isInt2 = Number.isInteger(converted2);
let isInt3 = Number.isInteger(converted3);
let isInt4 = Number.isInteger(converted4);

// 5. Create result strings
let result1 = `Original: "${value1}" → Converted: ${converted1} → isNaN: ${isNaN1} → isInteger: ${isInt1}`;
let result2 = `Original: "${value2}" → Converted: ${converted2} → isNaN: ${isNaN2} → isInteger: ${isInt2}`;
let result3 = `Original: "${value3}" → Converted: ${converted3} → isNaN: ${isNaN3} → isInteger: ${isInt3}`;
let result4 = `Original: "${value4}" → Converted: ${converted4} → isNaN: ${isNaN4} → isInteger: ${isInt4}`;

// 6. Combine into ONE string
let finalOutput = result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4;

// 7. Display on webpage
document.getElementById("numberConversionOutput").innerHTML = finalOutput;

// ==========================
// Part 3: Math & Formatting
// ==========================

// 1. Create numeric variables
let itemPrice = 49.99;
let taxRate = 0.0825; // 8.25%
let shipping = 5.5;

// 2. Perform calculations
let subtotal = itemPrice + shipping; // addition
let taxAmount = subtotal * taxRate; // multiplication
let total = subtotal + taxAmount; // addition

// 3. Format numbers
let formattedSubtotal = subtotal.toFixed(2);
let formattedTax = taxAmount.toFixed(2);
let formattedTotal = total.toFixed(2);

// 4. Build output string
let mathResults =
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

// Condition 1: Check if a value is NaN
let message1;

if (Number.isNaN(converted4)) {
  message1 = "Value 'hello' is NOT a valid number.";
} else {
  message1 = "Value 'hello' is a valid number.";
}

// Condition 2: Check if total cost is greater than 50
let message2;

if (total > 50) {
  message2 = "Total cost is greater than $50.";
} else {
  message2 = "Total cost is $50 or less.";
}

// Combine messages
let conditionalOutput = "<br><br><strong>Conditional Messages:</strong><br>" +
  message1 + "<br>" +
  message2;

// Display by APPENDING to math section
document.getElementById("mathOutput").innerHTML += conditionalOutput;