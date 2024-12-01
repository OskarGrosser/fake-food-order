const pageContent = document.querySelector(".page__content");
const toggleCartButton = document.querySelector("[aria-controls=cart]");

const cart = document.querySelector(".cart");
const menu = document.querySelector(".menu");

const queryLargeScreen = window.matchMedia("screen and (min-width: 1280px)");
queryLargeScreen.addEventListener("change", () => layoutPageContent(queryLargeScreen.matches));
layoutPageContent(queryLargeScreen.matches);

function layoutPageContent(isLargeScreen) {
  toggleCartButton.hidden = isLargeScreen;

  pageContent.classList.toggle("layered", !isLargeScreen);
  cart.classList.toggle("layered__child--order-1", !isLargeScreen);
  menu.classList.toggle("layered__child", !isLargeScreen);

  pageContent.classList.toggle("separated--inline-start", isLargeScreen);
  cart.classList.toggle("separated__child--order-1", isLargeScreen);
  menu.classList.toggle("separated__child", isLargeScreen);

  toggleCart({ toVisible: isLargeScreen, animated: false });
}

toggleCartButton.addEventListener("click", () => {
  toggleCart({ animated: true });
});

function toggleCart(options = {}) {
  const {
    toVisible = !cart.checkVisibility(),
    animated = true
  } = options;

  if (toVisible) {
    showCart(animated);
  } else {
    hideCart(animated);
  }
}

const cartContent = document.querySelector(".cart__content");

function showCart(animated) {
  cart.style.cssText = "";

  if (animated) {
    const animOptions = { duration: 250, easing: "ease-out" };

    const cartKeyframes = [
      { backgroundColor: "transparent" },
      { backgroundColor: "rgba(0, 0, 0, .5)" }
    ];
    cart.animate(cartKeyframes, animOptions).finished.then(() => {
      cart.style.backgroundColor = "rgba(0, 0, 0, .5)";
    });

    const cartContentKeyframes = [
      {
        transform: "translateX(100%)",
        boxShadow: "0 0 1rem transparent"
      },
      {
        transform: "translateX(0)",
        boxShadow: "0 0 1rem black"
      }
    ];
    cartContent.animate(cartContentKeyframes, animOptions);
  }
}
function hideCart(animated) {
  cart.style.pointerEvents = "none";

  if (animated) {
    const animOptions = { duration: 500, easing: "ease-in" };

    const cartKeyframes = [
      { backgroundColor: "rgba(0, 0, 0, .5)" },
      { backgroundColor: "transparent" }
    ];
    cart.animate(cartKeyframes, animOptions).finished.then(() => {
      cart.style.display = "none";
    });

    const cartContentKeyframes = [
      {
        transform: "translateX(0)",
        boxShadow: "0 0 1rem black"
      },
      {
        transform: "translateX(100%)",
        boxShadow: "0 0 1rem transparent"
      }
    ];
    cartContent.animate(cartContentKeyframes, animOptions);
  } else {
    cart.style.display = "none";
  }
}
