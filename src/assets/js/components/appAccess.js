const appAccess = () => {

    const $mensaje = document.querySelectorAll(".voice-text");
    const messagePage = [];
    $mensaje.forEach(function(msj) {
      var n = msj.appendChild(document.createElement('div')).classList.add('btn-escuchar');
      // msj.appendChild(document.createElement('div')).classList.add('btn-pause');
      messagePage.push(msj.textContent);
    });
  
    const $boton = document.querySelectorAll(".btn-escuchar");
    // const $botonPause = document.querySelectorAll(".btn-pause");
  
    const IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];
    let posibleIndice = 0, vocesDisponibles = [];
  
    const cargarVoces = () => {
      if (vocesDisponibles.length > 0) {
        console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
        return;
      }
    };
  
  
    $boton.forEach(function(button, i) {
      button.addEventListener("click",_ =>{
        let textoAEscuchar = messagePage[i];
        let mensaje = new SpeechSynthesisUtterance();
        vocesDisponibles = speechSynthesis.getVoices();
        mensaje.voice = vocesDisponibles[0];
        mensaje.volume = 1;
        mensaje.rate = 1;
        mensaje.text = textoAEscuchar;
        mensaje.pitch = 1;
        speechSynthesis.speak(mensaje);
      });
    });
  
    // $botonPause.forEach(function(button, i) {
    //   button.addEventListener("click",_ =>{
    //     // let textoAEscuchar = messagePage[i];
    //     // let mensaje = new SpeechSynthesisUtterance();
    //     // vocesDisponibles = speechSynthesis.getVoices();
    //     // mensaje.voice = vocesDisponibles[0];
    //     // mensaje.volume = 1;
    //     // mensaje.rate = 1;
    //     // mensaje.text = textoAEscuchar;
    //     // mensaje.pitch = 1;
    //     speechSynthesis.pause();
    //   });
    // });
  };