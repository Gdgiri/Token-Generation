class SequenceTokenGenerator {
  constructor() {
    // Retrieve the counter from local storage or initialize to 0 if not found
    const savedCounter = localStorage.getItem("tokenCounter");
    this.counter = savedCounter ? parseInt(savedCounter, 10) : 0;
  }

  generateToken() {
    // Increment the counter
    this.counter++;

    // Save the updated counter to local storage
    localStorage.setItem("tokenCounter", this.counter);

    // Get the current date
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = date.getFullYear();

    // Combine all parts to form the token
    const token = `${day}-${month}-${year}-${this.counter}`;

    return token;
  }
}

// Usage example
const tokenGenerator = new SequenceTokenGenerator();

function generateAndDisplayToken() {
  const token = tokenGenerator.generateToken();
  console.log("Generated Token:", token);
  document.getElementById("tokenDisplay").textContent = token;
}

// Attach the generateAndDisplayToken function to a button click
document
  .getElementById("generateTokenButton")
  .addEventListener("click", generateAndDisplayToken);
