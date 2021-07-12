// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateText();
  });

  updateText = () => {
      document.getElementById("text").textContent = "This is really cool!";
  };