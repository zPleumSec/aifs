window.onload = function() {
  var questions = document.querySelectorAll('.faq-question');

  for (var i = 0; i < questions.length; i++) {
    questions[i].onclick = function() {
      var answer = this.nextElementSibling;

      if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        this.className = this.className.replace(' active', '');
      } else {
        for (var j = 0; j < questions.length; j++) {
          questions[j].nextElementSibling.classList.remove('open');
          questions[j].className = questions[j].className.replace(' active', '');
        }
        answer.classList.add('open');
        this.className += ' active';
      }
    };
  }
};
