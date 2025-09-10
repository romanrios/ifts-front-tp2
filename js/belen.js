(function() {
  const toggleButton = document.querySelector('#belen-page #toggleInfo');
  const infoSection = document.querySelector('#belen-page #infoSection');

  toggleButton.addEventListener('click', function() {
    infoSection.classList.toggle('active');
    this.textContent = infoSection.classList.contains('active')
      ? 'Ocultar información'
      : 'Más sobre mí';
  });

  const tabButtons = document.querySelectorAll('#belen-page .tab-btn');
  const tabContents = document.querySelectorAll('#belen-page .tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.querySelector(`#belen-page #${tabId}`).classList.add('active');
    });
  });
})();