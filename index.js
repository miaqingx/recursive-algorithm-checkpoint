
// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20


function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else if (age >= 18) {
        return "$20";
    } else {
        return "Invalid age";
    }
}

// Prompt the user for their age
const age = parseInt(prompt("Enter your age:"), 10);

if (!isNaN(age) && age >= 0) {
    const price = getTicketPrice(age);
    console.log(`The ticket price for age ${age} is ${price}.`);
} else {
    console.log("Please enter a valid age.");
}



// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function fibonacci(n) {
    if (n < 0) {
        return "Invalid input. Please enter a non-negative integer.";
    } else if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}

console.log(fibonacci(0)); 
