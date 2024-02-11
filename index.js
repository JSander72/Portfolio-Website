// Function to handle scroll event
const handleScroll = () => {
  boxes.forEach((box) => {
    if (isInViewport(box)) {
      box.classList.add("visible");
    } else {
      box.classList.remove("visible");
    }
  });
};
