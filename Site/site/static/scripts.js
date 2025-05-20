document.querySelectorAll('.circulo').forEach(circulo => {
  const progresso = circulo.querySelector('circle.progresso');
  const porcentagem = circulo.querySelector('.porcentagem');
  const percent = parseInt(circulo.getAttribute('data-percent'));
  const raio = progresso.r.baseVal.value;
  const circunferencia = 2 * Math.PI * raio;
  let start = null;
  const duration = 1500;

  progresso.style.strokeDasharray = circunferencia;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const currentOffset = circunferencia - (percent * progress / 100) * circunferencia;
    progresso.style.strokeDashoffset = currentOffset;
    porcentagem.textContent = `${Math.floor(progress * percent)}%`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      porcentagem.textContent = `${percent}%`;
    }
  }
  requestAnimationFrame(animate);
});
