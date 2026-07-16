(function(){
  var btn = document.getElementById('theme-toggle');
  var root = document.documentElement;

  function updateLabel(theme){
    btn.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
  }

  updateLabel(root.getAttribute('data-theme'));

  btn.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateLabel(next);
  });
})();
