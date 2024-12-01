<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="/resources/styles/index.css">
    <script type="module" src="/resources/scripts/index.js"></script>
  </head>
  <body class="page">
    <header class="page__header separated--inline-start">
      <div class="separated__child flexed">
        <a class="page__logo flexed__child flexed--center" href="/">Food Order</a>
      </div>
      <div class="separated__child flexed">
        <button class="flexed__child ratio--1-1" aria-controls="cart">Cart</button>
      </div>
    </header>
    <main class="page__content layered">
      <section id="cart" class="cart layered__child--order-1">
        <div class="cart__content"></div>
      </section>
      <section class="menu layered__child">
        <header class="menu__header restaurant">
          <div class="banner">
            <div class="banner__content menu__content">
              <img class="restaurant__logo" width="80" height="80" src="https://picsum.photos/id/625/80/80" alt="Tim's Trucker Tables">
            </div>
          </div>
          <div class="menu__content collapsed">
            <h1 class="restaurant__name collapsed__end--block">Tim's Trucker Tables</h1>
            <p class="restaurant__rating collapsed__start--block rating">
              <span class="rating__label">Rating:</span>
              <span class="rating__stars">&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</span>
              <span class="rating__numeric">(3/5)</span>
            </p>
          </div>
        </header>
      </section>
    </main>
    <footer class="page__footer"></footer>
  </body>
</html>
