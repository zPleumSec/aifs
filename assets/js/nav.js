  window.onload = function () {
    var toggle = document.getElementById('menu-toggle');
    var close = document.getElementById('menu-close');
    var mobileMenu = document.getElementById('mobile-menu');

    toggle.onclick = function () {
      mobileMenu.style.display = 'block';
    };

    close.onclick = function () {
      mobileMenu.style.display = 'none';
    };
  };