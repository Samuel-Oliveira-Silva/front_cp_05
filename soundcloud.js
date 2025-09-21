const trackEls = document.querySelectorAll('.track');
    const nowPlaying = document.getElementById('nowPlaying');
    const scIframe = document.getElementById('scIframe');
    const scPlayer = document.getElementById('scPlayer');

    trackEls.forEach((el) => {
      el.addEventListener('click', () => {
        const src = el.dataset.src;
        const title = el.dataset.title;
        nowPlaying.innerText = "Tocando: " + title;
        scIframe.src = "https://w.soundcloud.com/player/?url=" + encodeURIComponent(src) + "&color=%237C3AED&auto_play=true&show_artwork=true";
        scPlayer.classList.remove('hidden');
      });
    });

    const form = document.getElementById('playlistForm');
    const btn = document.getElementById('createPlaylistBtn');
    const output = document.getElementById('customPlaylistOutput');

    btn.addEventListener('click', () => {
      output.innerHTML = '';
      const checked = form.querySelectorAll('input[name="musicas"]:checked');
      if (checked.length === 0) {
        output.innerHTML = '<p class="text-sm text-red-200">Selecione pelo menos uma música!</p>';
        return;
      }
      checked.forEach(chk => {
        const url = chk.value;
        const iframe = `
          <div class="bg-white text-gray-800 rounded-lg shadow p-4">
            <iframe width="100%" height="166" frameborder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%237C3AED&auto_play=false&show_artwork=true">
            </iframe>
          </div>
        `;
        output.innerHTML += iframe;
      });
    });