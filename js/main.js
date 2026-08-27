// MONEY — JS mínimo (menú móvil + búsqueda local)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // búsqueda local: filtra tarjetas de artículos por texto
  var box = document.querySelector('[data-local-search]');
  if (box) {
    var input = box.querySelector('input');
    var cards = document.querySelectorAll('.card[data-title]');
    input.addEventListener('input', function () {
      var q = input.value.toLowerCase();
      cards.forEach(function (card) {
        var match = card.getAttribute('data-title').toLowerCase()
          .indexOf(q) !== -1;
        card.style.display = match ? '' : 'none';
      });
      var empty = document.querySelector('[data-search-empty]');
      if (empty) {
        var visible = Array.prototype.some.call(cards, function (c) {
          return c.style.display !== 'none'; });
        empty.hidden = visible;
      }
    });
  }
});
