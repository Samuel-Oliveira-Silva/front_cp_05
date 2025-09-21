var tracks = document.querySelectorAll(".track");

for (var i = 0; i < tracks.length; i++) {
  var track_element = tracks[i];

  track_element.onclick = function () {
    var musica_url = this.getAttribute("data-src");
    var musica_titulo = this.getAttribute("data-title");

    // Mostra qual música está tocando
    var display = document.getElementById("nowPlaying");
    display.innerHTML = "Tocando: " + musica_titulo;

    var iframe = document.getElementById("scIframe");
    iframe.src =
      "https://w.soundcloud.com/player/?url=" +
      encodeURIComponent(musica_url) +
      "&color=%237C3AED&auto_play=true&show_artwork=true";

    var player = document.getElementById("scPlayer");
    player.classList.remove("hidden");
  };
}

var botao = document.getElementById("createPlaylistBtn");

botao.onclick = function () {
  var output = document.getElementById("customPlaylistOutput");
  output.innerHTML = ""; // Limpa a lista antiga

  var form = document.getElementById("playlistForm");
  var musicas_selecionadas = form.querySelectorAll(
    'input[name="musicas"]:checked'
  );

  if (musicas_selecionadas.length == 0) {
    output.innerHTML = "<p>Você não selecionou nenhuma música!</p>";
    return;
  }

  for (var j = 0; j < musicas_selecionadas.length; j++) {
    var url = musicas_selecionadas[j].value;

    var iframe_html =
      '<div class="bg-white text-gray-800 rounded-lg shadow p-4">' +
      '<iframe width="100%" height="166" frameborder="no" allow="autoplay"' +
      ' src="https://w.soundcloud.com/player/?url=' +
      encodeURIComponent(url) +
      '&color=%237C3AED&auto_play=false&show_artwork=true">' +
      "</iframe>" +
      "</div>";

    output.innerHTML += iframe_html;
  }
};
