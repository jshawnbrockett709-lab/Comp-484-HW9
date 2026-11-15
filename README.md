
A single webpage that uses an external `script.js` to show the current date, test string-to-number conversions, and display formatted math results.

GitHub Pages link:

https://jshawnbrockett709-lab.github.io/Comp-484-HW9/

The easiest part was the date section, because the steps were clear once I figured things out. The hardest part was Part 2, since I had to repeat the same steps for each value without arrays or loops. I learned that `Date` months start at 0, so `getMonth()` needs `+ 1`, and that numbers need a leading zero added by hand. With `Number`, I learned that `Number("hello")` gives `NaN` and that `Number.isInteger()` is `false` for decimals like 19.75. I also learned that JavaScript can write results straight into the page by changing an element's `textContent` or `innerHTML`.

Extra credit:

Added light CSS styling so each section looks like its own panel.
