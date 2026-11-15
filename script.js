// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current moment
const currentDate = new Date();

// getMonth() is 0-based (January = 0), so add 1
const monthNumber = currentDate.getMonth() + 1;
const dayNumber = currentDate.getDate();
const yearNumber = currentDate.getFullYear();

// Convert to strings and pad with a leading zero so month/day are two digits
const monthText = String(monthNumber).padStart(2, "0");
const dayText = String(dayNumber).padStart(2, "0");

// Build the final message and show it on the page
const dateMessage = "Today is " + monthText + "/" + dayText + "/" + yearNumber;
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Four separate starting values (no arrays or loops allowed here)
const valueOne = "42";       // whole-number string
const valueTwo = "19.75";    // decimal string
const valueThree = "hello";  // cannot be converted
const valueFour = "100";     // whole-number string

// ---- Value one ----
const convertedOne = Number(valueOne);
const isNaNOne = Number.isNaN(convertedOne);
const isIntegerOne = Number.isInteger(convertedOne);
let messageOne;
// Conditional 1: valid number or not
if (isNaNOne) {
  messageOne = "This value is not a valid number.";
} else {
  messageOne = "This value is a valid number.";
}
const lineOne =
  "<li>Original: '" + valueOne + "' -> Converted: " + convertedOne +
  " -> isNaN: " + isNaNOne + " -> isInteger: " + isIntegerOne +
  " (" + messageOne + ")</li>";

// ---- Value two ----
const convertedTwo = Number(valueTwo);
const isNaNTwo = Number.isNaN(convertedTwo);
const isIntegerTwo = Number.isInteger(convertedTwo);
let messageTwo;
// Conditional 2: integer or not
if (isIntegerTwo) {
  messageTwo = "This value is an integer.";
} else {
  messageTwo = "This value is not an integer.";
}
const lineTwo =
  "<li>Original: '" + valueTwo + "' -> Converted: " + convertedTwo +
  " -> isNaN: " + isNaNTwo + " -> isInteger: " + isIntegerTwo +
  " (" + messageTwo + ")</li>";

// ---- Value three ----
const convertedThree = Number(valueThree);
const isNaNThree = Number.isNaN(convertedThree);
const isIntegerThree = Number.isInteger(convertedThree);
let messageThree;
// Conditional 3: valid number or not
if (isNaNThree) {
  messageThree = "This value is not a valid number.";
} else {
  messageThree = "This value is a valid number.";
}
const lineThree =
  "<li>Original: '" + valueThree + "' -> Converted: " + convertedThree +
  " -> isNaN: " + isNaNThree + " -> isInteger: " + isIntegerThree +
  " (" + messageThree + ")</li>";

// ---- Value four ----
const convertedFour = Number(valueFour);
const isNaNFour = Number.isNaN(convertedFour);
const isIntegerFour = Number.isInteger(convertedFour);
let messageFour;
// Conditional 4: integer or not
if (isIntegerFour) {
  messageFour = "This value is an integer.";
} else {
  messageFour = "This value is not an integer.";
}
const lineFour =
  "<li>Original: '" + valueFour + "' -> Converted: " + convertedFour +
  " -> isNaN: " + isNaNFour + " -> isInteger: " + isIntegerFour +
  " (" + messageFour + ")</li>";

// Combine all results into one string and display it
const conversionResults = "<ul>" + lineOne + lineTwo + lineThree + lineFour + "</ul>";
document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Option A: price calculator
const itemPrice = 49.99;
const taxRate = 0.0725;     // 7.25% sales tax
const shippingCost = 5.5;

// Calculations
const taxAmount = itemPrice * taxRate;                 // multiplication
const totalCost = itemPrice + taxAmount + shippingCost; // addition

// Formatting: toFixed() for money, toLocaleString() for a large number
const taxText = taxAmount.toFixed(2);
const totalText = totalCost.toFixed(2);
const bigNumberText = (1234567.891).toLocaleString();

// Build the results string and display it
const mathResults =
  "<ul>" +
  "<li>Item price: $" + itemPrice.toFixed(2) + "</li>" +
  "<li>Tax (" + (taxRate * 100) + "%): $" + taxText + "</li>" +
  "<li>Shipping: $" + shippingCost.toFixed(2) + "</li>" +
  "<li>Total cost: $" + totalText + "</li>" +
  "<li>Formatted large number: " + bigNumberText + "</li>" +
  "</ul>";

// ==========================
// Part 4: Conditionals
// ==========================

// Conditional 5: free shipping message based on the total
let shippingMessage;
if (totalCost >= 75) {
  shippingMessage = "Your order qualifies for a discount.";
} else {
  shippingMessage = "Spend $75 or more to qualify for a discount.";
}

// Show math results plus the conditional message
document.getElementById("mathOutput").innerHTML =
  mathResults + "<p class=\"message\">" + shippingMessage + "</p>";
