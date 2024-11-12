export const isValidEmail = function(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

export const simulateTyping = function(inputElement, text, delay = 100) {
    let index = 0;
  
    // Define a function to "type" each character with a delay
    function typeCharacter() {
      if (index < text.length) {
        // Update the input value by adding one character at a time
        inputElement.value += text[index];
        
        // Dispatch an input event to reflect the change
        inputElement.dispatchEvent(new Event('input'));
  
        // Move to the next character
        index++;
  
        // Call typeCharacter again after the specified delay
        setTimeout(typeCharacter, delay);
      }
    }
  
    // Clear any existing text and start typing
    inputElement.value = '';
    typeCharacter();
  }