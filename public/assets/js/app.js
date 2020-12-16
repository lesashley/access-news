(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper container"></div>');

  if (state.noticiaSelected != null) {
    wrapper.append(NoticiaPrincipal());
  } else{
    wrapper.append(Noticias(_ => render(root),data));
    wrapper.append(Mundo(_ => render(root),data));

    
    
    //Prueba
  }
  
  root.append(wrapper);
  appAccess();
}


const state = {
  noticiaSelected: null
};


$( _ => {
  getJSON('/api/news/', (err, json) => {
    if (err) { return alert(err.message);}

    var id = json[0];
    console.log(id);

    const root = $('.root');
    render(root,json);
    console.log(json);
  });
  $(".button-collapse").sideNav();
  $('.footer__btn-up').on('click',()=>{
    document.body.scrollTop = 0;
  })
});


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




if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

const Mundo = (update, data) =>{
  const containerRow = $('<div class="row"></div>');
  const title = $('<h5>MUNDO</h5>');
  const line = $('<hr class="hr-title">');
  const noticia1 = $('<div class="col s12 m3 noticia1"></div>');
  const textNoticia1 = $('<div class="noticia1__bg"><img class="responsive-img" src="assets/img/'+data[4].img+'"/><div class="noticia2__texto voice-text"><h5>'+data[4].title+'</h5></div></div>')
  const noticia2 = $('<div class="col s12 m6 noticia2"></div>');
  const noticia2_1 = $('<div class="col s6"><div class="noticia2__bg">'+
                        '<img class="responsive-img" src="assets/img/'+data[5].img+'"/>'+
                        '<div class="noticia3__texto voice-text"><h5>'+data[5].title+'</h5></div<div></div>');
  const noticia2_2 = $('<div class="col s6"><div class="noticia2__bg">'+
                        '<img class="responsive-img" src="assets/img/'+data[6].img+'"/>'+
                        '<div class="noticia3__texto voice-text"><h5>'+data[6].title+'</h5></div<div></div>');
  const noticia2_3 = $('<div class="col s12"><div class="noticia2__bg">'+
                        '<img class="responsive-img col s6" src="assets/img/'+data[8].img+'"/>'+
                        '<div class="noticia3__texto col s6 voice-text"><h5>'+data[8].title+'</h5></div<div></div>');
  const noticia2_4 = $('<div class="col s12"><div class="noticia2__bg">'+
                        '<img class="responsive-img col s6" src="assets/img/'+data[9].img+'"/>'+
                        '<div class="noticia3__texto col s6 voice-text"><h5>'+data[9].title+'</h5></div<div></div>');
  const noticia3 = $('<div class="col s12 m3 noticia3 hide-on-small-only"></div>');
  const textNoticia3 = $('<div class="noticia3__bg"><img class="responsive-img" src="assets/img/'+data[7].img+'"/><div class="noticia2__texto voice-text"><h5>'+data[7].title+'</h5></div></div>');
  const noticia4 = $('<div class="col s12 m4 noticia4"></div>');
  const textNoticia4 = $('<div class="noticia4__bg"><img class="responsive-img" src="assets/img/'+data[10].img+'"/><div class="noticia2__texto voice-text"><h5>'+data[10].title+'</h5></div></div>');
  const noticia5 = $('<div class="col s12 m4 noticia5"></div>');
  const textNoticia5 = $('<div class="noticia5__bg"><img class="responsive-img" src="assets/img/'+data[11].img+'"/><div class="noticia2__texto voice-text"><h5>'+data[11].title+'</h5></div></div>');
  const noticia6 = $('<div class="col s12 m4 noticia6"></div>');
  const textNoticia6 = $('<div class="noticia6__bg"><img class="responsive-img" src="assets/img/'+data[12].img+'"/><div class="noticia2__texto voice-text"><h5>'+data[12].title+'</h5></div></div>');
  noticia1.append(textNoticia1);
  noticia2.append(noticia2_1);
  noticia2.append(noticia2_2);
  noticia2.append(noticia2_3);
  noticia2.append(noticia2_4);
  noticia3.append(textNoticia3);
  noticia4.append(textNoticia4);
  noticia5.append(textNoticia5);
  noticia6.append(textNoticia6);

  containerRow.append(title);
  containerRow.append(line);
  containerRow.append(noticia1);
  containerRow.append(noticia2);
  containerRow.append(noticia3);
  containerRow.append(noticia4);
  containerRow.append(noticia5);
  containerRow.append(noticia6);

  return containerRow;
}

const NoticiaPrincipal = () =>{
  const containerRow = $('<div class="row"></div>');
  const line1 = $('<hr>');
  const title = $('<h5>EDUCACIÓN</h5>');
  const lineTitle  = $('<hr class="hr-title">');
  const titleNoticia = $('<div class = "col s12"><h3>'+state.noticiaSelected.title+'</h3></div>');
  const subNoticia = $('<div class="col s6 m6"><p>'+state.noticiaSelected.brief+'</p></div>');
  const fondo = $('<div class="col s12"><img class="responsive-img" src="assets/img/foto-n1.png"/></div>');
  const line2 = $('');
  const textoNoticia = $('<div class="col s9"></div>');

  const autor = $('<div class="col s12"><div class="col s2 "><img class="responsive-img img-autor" src="assets/img/'+state.noticiaSelected.author.picture+'"/></div></div>')
  const infoAutor = $('<div class="col s5"><p>'+state.noticiaSelected.author.name+'</p>'+
                      '<p>'+state.noticiaSelected.author.user+'</p></div>');
  const infoNoticia = $('<div class="col s12 voice-text"><p>'+state.noticiaSelected.body+'</p></div>')

  const articulosNoticia = $('<div class="col s3"></div>');

  const notasNoticia = $('<div class="col s12"><div class="col s12"><h6 class="text-notas">NOTAS RELACIONADAS</h6><hr class="hr-title"/></div></div>');
  const imgNoticia1 = $('<div class="col s6"><img class="responsive-img" src="assets/img/foto-n3.png"/><p class="text-notas-min">Turismo</p></div>');
  const imgNoticia2 = $('<div class="col s6"><img class="responsive-img" src="assets/img/foto-n4.png"/><p class="text-notas-min">Tecnología</p></div>');

  const popularNoticia = $('<div class="col s12"><div class="col s12"><h6 class="text-notas">MÁS POPULARES</h6><hr class="hr-title"/><div></div>');
  const imgPopular1  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n5.png"/><p class="col s6 text-notas-min">Agosto 2020</p></div>');
  const imgPopular2  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n6.png"/><p class="col s6 text-notas-min">Septiembre 2020</p></div>');
  const imgPopular3  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n7.png"/><p class="col s6 text-notas-min">Octubre 2020</p></div>');
  const imgPopular4  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n8.png"/><p class="col s6 text-notas-min">Noviembre 2020</p></div>');
  const imgPopular5  = $('<div class="col s12"><img class="responsive-img col s6" src="assets/img/foto-n9.png"/><p class="col s6 text-notas-min">Diciembre 2020</p></div>');
  containerRow.append(line1);
  containerRow.append(title);
  containerRow.append(lineTitle);
  containerRow.append(titleNoticia);
  containerRow.append(subNoticia);
  containerRow.append(fondo);
  containerRow.append(line2);

  autor.append(infoAutor);
  textoNoticia.append(autor);
  textoNoticia.append(infoNoticia);

  notasNoticia.append(imgNoticia1);
  notasNoticia.append(imgNoticia2);

  popularNoticia.append(imgPopular1);
  popularNoticia.append(imgPopular2);
  popularNoticia.append(imgPopular3);
  popularNoticia.append(imgPopular4);
  popularNoticia.append(imgPopular5);

  articulosNoticia.append(notasNoticia);
  articulosNoticia.append(popularNoticia);


  containerRow.append(textoNoticia);
  containerRow.append(articulosNoticia);


  return containerRow;
}

const Noticias = (update,data) =>{

  const containerRow = $('<div class="row"></div>');
  const noticia1 = $('<div class="col s12 noticia1-click"></div>');
  const textNoticia1 = $('<div><img class="responsive-img" src="assets/img/'+data[0].img+'"/><div class="noticia1-click__texto col s12 voice-text"><h4>'+data[0].title+'</h4><h6>'+data[0].brief+'</h6></div></div>');
  const noticia2 = $('<div class="col s12 m6 noticia2"></div>');
  const textNoticia2 = $('<div class="noticia2__bg"><img class="responsive-img" src="assets/img/'+data[1].img+'"/><div class="noticia2__texto voice-text"><h5>'+data[1].title+'</h5></div></div>')
  const noticia3 = $('<div class="col s12 m3 noticia3"></div>');
  const textNoticia3 = $('<div class="noticia3__bg"><img class="responsive-img col s6 m12" src="assets/img/'+data[2].img+'"/><div class="noticia3__texto col s6 m12 voice-text"><h5>'+data[2].title+'</h5></div></div>')
  const noticia4 = $('<div class="col s12 m3 noticia4"></div>');
  const textNoticia4 = $('<div class="noticia4__bg"><img class="responsive-img col s6 m12" src="assets/img/'+data[3].img+'"/><div class="noticia4__texto col s6 m12 voice-text"><h5>'+data[3].title+'</h5></div></div>')


  noticia1.on('click', ()=>{
    state.noticiaSelected = data[0];
    update();
  })


  noticia1.append(textNoticia1);
  noticia2.append(textNoticia2);
  noticia3.append(textNoticia3);
  noticia4.append(textNoticia4);

  containerRow.append(noticia1);
  containerRow.append(noticia2);
  containerRow.append(noticia3);
  containerRow.append(noticia4);


  return containerRow;
}

// const Tecnologia = (){
//   const containerRow = $('<div class="row"></div>');
//
// }

'use strict';


const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

},{}]},{},[1])