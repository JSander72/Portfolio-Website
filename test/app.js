const boxes = document.querySelectorAll(".box");

    // Function to check if an element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      boxes.forEach((box) => {
        if (isInViewport(box)) {
          box.classList.add("visible");
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
