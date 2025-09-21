// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos


var lyricsData = [
  // Intro instrumental
  { text: "🎶 (Aracelí)", time: 0 },

  // Primera estrofa
  { text: "Sentado en el banco de aquel viejo bar", time: 14 },
  { text: "Yo tímidamente te invito a bailar", time: 16 },
  { text: "Y tú, sonriendo aceptándome, yee", time: 20 },

  { text: "Bailamos bachata, merengue y boleros", time: 26 },
  { text: "Hablando bajito, chocando los cuerpos", time: 30 },
  { text: "Y así cupido flechándome, yee", time: 33 },

  { text: "Termina la fiesta, cada cual a su casa", time: 40 },
  { text: "Yo me voy con tu cara pegada en el alma", time: 43 },
  { text: "Y sin bien conocerte ya te comienzo a extrañar…", time: 46 },

  // Primer coro
  { text: "Tal parece que yo, me acostumbre a ti en un solo día", time: 52 },
  { text: "Que te ando extrañando", time: 59 },
  { text: "Como si hace años que te conocía", time: 60 },
  { text: "Tal parece que yo", time: 65 },
  { text: "En un solo baile te entregue mi vida", time: 66 },
  { text: "Tal parece que el sentimiento venció las reglas que había…", time: 71 },
  { text: "Venció las reglas que había", time: 79 },

];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);