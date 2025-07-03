document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector('.snow-container');

  if (!container) return;

  function getRandomColor() {
    var colors = ['#ffffff', '#cceeff', '#e0f7fa', '#b3e5fc', '#e3f2fd', '#f8bbd0', '#f3e5f5'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  for (var i = 0; i < 100; i++) {
    var flake = document.createElement('div');
    flake.className = 'snowflake';

    var size = Math.random() * 4 + 2;
    flake.style.width = size + 'px';
    flake.style.height = size + 'px';

    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.animationDuration = (Math.random() * 5 + 3) + 's';
    flake.style.animationDelay = Math.random() * 5 + 's';

    flake.style.background = getRandomColor();

    container.appendChild(flake);
  }
});
