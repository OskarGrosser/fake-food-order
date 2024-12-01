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

  toggleCart(isLargeScreen);
}

toggleCartButton.addEventListener("click", () => {
  toggleCart();
});

function toggleCart(toVisible) {
  if (toVisible ?? !cart.checkVisibility()) {
    cart.style.cssText = "";
  } else {
    cart.style.display = "none";
  }
}
