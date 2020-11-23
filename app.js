
//correction
const pics = [
    "pic-0.jpg",
    "pic-1.jpg",
    "pic-2.jpg",
    "pic-3.jpg",
    "pic-4.jpg",
    "pic-5.jpg",
    "pic-6.jpg",
    "pic-7.jpg",
  ];
  let myCount = 0;
  let imageContainer = document.getElementById("imageCon");
  let buttons = document.querySelectorAll(".button1");
  buttons.forEach((element) => {
    element.addEventListener("click", function () {
      if (element.classList.contains("back")) {
        myCount--;
        if (myCount < 0) {
          myCount = pics.length - 1;
        }
        imageContainer.style.backgroundImage = `url(./images/${pics[myCount]})`;
      }
      if (element.classList.contains("forward")) {
        myCount++;
        if (myCount > pics.length - 1) {
          myCount = 0;
        }
        imageContainer.style.backgroundImage = `url(./images/${pics[myCount]})`;
      }
    });
  });