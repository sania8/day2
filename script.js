const buttons = document.querySelectorAll(".buttons button");
const heading = document.querySelector(".heading");
let currentColor = '';

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const color = button.getAttribute("data-color");
    if (color === "random") {
      // Generate a random color
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;
      heading.style.backgroundImage = "linear-gradient(to right, black, black)";
      currentColor = '';
    } else {
      document.body.style.backgroundColor = color;
      heading.style.backgroundImage = "linear-gradient(to right, black, black)";
      if (currentColor === color) {
        document.body.style.backgroundColor = "white";
        heading.style.backgroundImage = "linear-gradient(blue, coral, blue)";
        currentColor = '';
      } else {
        currentColor = color;
      }
    }
  });
});
