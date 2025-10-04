(function() {
  const toggleButton = document.querySelector('#pagina-belen #toggleInfo');
  const infoSection = document.querySelector('#pagina-belen #infoSection');

  toggleButton.addEventListener('click', function() {
    infoSection.classList.toggle('active');
    this.textContent = infoSection.classList.contains('active')
      ? 'Ocultar información'
      : 'Más sobre mí';
  });

  const tabButtons = document.querySelectorAll('#pagina-belen .tab-btn');
  const tabContents = document.querySelectorAll('#pagina-belen .tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.querySelector(`#pagina-belen #${tabId}`).classList.add('active');
    });
  });
})();
