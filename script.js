document.addEventListener('DOMContentLoaded', () => {

  /* ================= REFERENCIAS ================= */
  const vistas = document.querySelectorAll('.vista');
  const btnEntrar = document.getElementById('btnEntrar');
  const moodBtns = document.querySelectorAll('.mood-btn');
  const btnVolver = document.getElementById('btnVolver');
  const btnFotos = document.getElementById('btnFotos');
  const btnFinal = document.getElementById('btnFinal');

  const textoCarta = document.getElementById('textoCarta');
  const fotoMood = document.getElementById('fotoMood');
  const linkCancion = document.getElementById('linkCancion');

  let moodActual = '';

  /* ================= UTILIDAD ================= */
  function mostrarVista(id) {
    vistas.forEach(v => v.classList.remove('activa', 'fade-in'));
    const vista = document.getElementById(id);
    if (!vista) return;
    vista.classList.add('activa');
    void vista.offsetWidth;
    vista.classList.add('fade-in');
  }

  /* ================= NAVEGACIÓN ================= */
  btnEntrar.onclick = () => mostrarVista('moods');
  btnVolver.onclick = () => mostrarVista('moods');
  btnFotos.onclick = () => mostrarVista('fotos');
  btnFinal.onclick = () => mostrarVista('final');

  /* ================= CARTAS ================= */
  const cartas = {
    feliz: [
      "Me gusta verte feliz porque sé que no llegas ahí por suerte, sino por todo lo que haces incluso cuando nadie mira.",
      "Disfruta este momento sin pensar en lo que sigue. No todo tiene que ser una meta.",
      "Cuando sonríes se nota que todo el esfuerzo tiene sentido, aunque aún no esté completo.",
      "No minimices estos días de felicidad. Son prueba de que sí estás avanzando.Que este día te recuerde que todo va bien aunque a veces no lo parezca.",
      "Guarda esta sensación. Va a ser importante recordarla cuando dudes.Estás haciendo más de lo que crees, sigue así."
    ],
    triste: [
      "No llorar no significa no sentir. Estar triste también es válido, incluso cuando lo llevas en silencio.",
      "Aunque no lo digas, sé que hay días que pesan más. Y está bien. Estoy aquí.",
      "No te hace menos fuerte sentirte así. Al contrario.",
      "Aunque no lo muestres, sé que pesa. Y no tienes que cargarlo solo.",
      "Esto no te define ni te frena. Es solo un momento, no el final."
    ],
    cansado: [
      "Estar cansado no es fallar. Es haber dado mucho.",
      "Has trabajado más de lo que admites. Es normal estar cansado.",
      "Descansar no significa que te rendiste.",
      "A veces el cansancio es señal de que estás haciendo algo importante. No tienes que demostrar nada hoy.",
      "A veces seguir ya es suficiente."
    ],
    ansioso: [
      "No todo tiene que resolverse ahora.",
      "Vas más lejos de lo que crees, aunque tu cabeza diga lo contrario.",
      "Respira. No estás atrasado, estás en proceso. Vas a llegar, aunque hoy no lo veas.",
      "La presión que sientes viene de querer hacerlo bien. Y eso dice mucho de ti.",
      "Estoy orgullosa de ti, incluso en estos días."
    ],
    pensativo: [
      "Pensar tanto también cansa.",
      "No todas las decisiones tienen que tomarse ahora.",
      "Dudar no invalida lo que ya has logrado.",
      "Estás creciendo, aunque no se sienta así.",
      "Confía en el proceso, incluso cuando no lo entiendas.",
      "Confía un poco más en el camino que ya recorriste.",
      "No todo tiene que estar claro para seguir adelante."
    ],
    emocionado: [
      "Tu entusiasmo es una fuerza. Solo recuerda respirar antes de saltar.",
      "Tu emoción es bonita, incluso cuando se desborda un poco.",
      "Tu pasión dice mucho de ti.",
      "No apagues lo que sientes, solo dale dirección.",
      "Esta energía es una fortaleza cuando la cuidas."
    ],
    estresado: [
      "No estás fallando, solo estás bajo presión.",
      "No llegar hoy no significa no llegar nunca.",
      "Vas a tu ritmo, aunque el mundo corra.",
      "El estrés no borra tu esfuerzo.",
      "Estoy aquí, incluso en el caos. Pero recuerda que a veces avanzar lento es mejor que agotarte."
    ],
    nose: [
      "No saber también es un lugar válido.",
      "No tienes que tenerlo todo claro.",
      "Estar confundido no significa estar perdido. Está bien detenerse.",
      "Aquí puedes descansar un momento.Tomate el tiempo que necesites para encontrar tu camino.",
      "No estás solo, incluso cuando no sabes qué pasa."
    ]
  };

  /* ================= CANCIONES ================= */
  const canciones = {
    feliz: "https://open.spotify.com/intl-es/track/213x4gsFDm04hSqIUkg88w?si=fcc0c1d26b804a39",
    triste: "https://open.spotify.com/intl-es/track/3BYyBzKGPOCHeginhe0F77?si=b8d1efc45c0d4dfd",
    cansado: "https://open.spotify.com/intl-es/track/5tFCHPbtz4plGwDnH2b1QV?si=4e73a6d74a8141ba",
    ansioso: "https://open.spotify.com/intl-es/track/4U45aEWtQhrm8A5mxPaFZ7?si=b992c68a34614c00",
    pensativo: "https://open.spotify.com/intl-es/track/0YbFEoJi7Esa7lhIrEpBjl?si=ba6a03f493cc4852",
    emocionado: "https://open.spotify.com/intl-es/track/2jVqcE5a7GoEEti0OcImc6?si=f349b3916525449f",
    estresado: "https://open.spotify.com/intl-es/track/31Bj2n6ZPAP5nBeGKZdQ7U?si=2e8ad0be7a024d56",
    nose: "https://open.spotify.com/intl-es/track/5QZbCX2yKSFHPe7nCHGMam?si=4000d57e671441b2"
  };

  function obtenerCartaDelDia(mood) {
    const hoy = new Date().getDate();
    return cartas[mood][hoy % cartas[mood].length];
  }

  /* ================= MOODS ================= */
  moodBtns.forEach(btn => {
    btn.onclick = () => {
      moodActual = btn.dataset.mood;
      textoCarta.textContent = obtenerCartaDelDia(moodActual);
      fotoMood.src = `assets/images/${moodActual}.jpg`;
      linkCancion.href = canciones[moodActual];
      mostrarVista('carta');
    };
  });

});
