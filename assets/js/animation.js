const selectorAnimation = document.querySelectorAll('.animation');

const active = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}
const itemObserve = new IntersectionObserver(active);
for (let i = 0; i < selectorAnimation.length; i++) {
    itemObserve.observe(selectorAnimation[i]);
}

const productLinks = document.querySelectorAll(".product-link");

productLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    productLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

