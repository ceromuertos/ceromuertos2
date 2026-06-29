(() => {
  const gate = document.getElementById('ageGate');
  const accept = document.querySelector('[data-age-accept]');
  const accepted = localStorage.getItem('okcm-age-confirmed') === 'yes';

  if (gate && accepted) {
    gate.classList.add('is-hidden');
  }

  if (accept) {
    accept.addEventListener('click', () => {
      localStorage.setItem('okcm-age-confirmed', 'yes');
      gate?.classList.add('is-hidden');
    });
  }
})();