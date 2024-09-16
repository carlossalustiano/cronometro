function relogio(){
  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;
  
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }
  
  function iniciaRelogio() {
    timer = setInterval(function (){
      segundos++
      relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000);
  }
  
  document.addEventListener('click', (event) => {
    const el = event.target; // Vai selecionar o elemento que está sendo clicado
  
    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    }
    if (el.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  })
}

relogio();