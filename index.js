// Code your solutions in this file

function writeCards(names, event) {
    // Create a new, empty array to hold the messages
    let messages = [];
  
    // Iterate through the input array of names
    for (let i = 0; i < names.length; i++) {
      // Build a 'thank you' message using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); // Add the message to the array
    }
  
    // Return the new array containing all the messages
    return messages;
  }
  
  // Example usage of writeCards
  const names = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages); // Log the array of thank-you messages
  
  // Define the countDown function
  function countDown(number) {
    // Use a loop to count down from the given number to 0
    for (let i = number; i >= 0; i--) {
      console.log(i); // Log the current number
    }
  }
  
  // Example usage of countDown
  countDown(5); // Counts down from 5 to 0
  function countDown(number) {
    // Use a while loop to count down to 0
    while (number >= 0) {
    
  