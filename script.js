// Change text content dynamically
const dynamicText = document.getElementById("dynamic-text");
dynamicText.textContent = "The text has been changed via JavaScript!";
dynamicText.classList.add("highlight");

// Function to add/remove an element on button click
function toggleMessage() {
  const container = document.getElementById("extra-message");

  if (container.textContent === "") {
    const newMessage = document.createElement("p");
    newMessage.textContent = "Here is a new message!";
    newMessage.style.color = "green";
    newMessage.id = "message";
    container.appendChild(newMessage);
  } else {
    container.innerHTML = "";
  }
}
