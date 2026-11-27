/**
 * Konfigurasi URL aplikasi.
 * Ubah nilai url di bawah ini untuk mengganti tujuan setiap tombol.
 */
const CONFIG = {
  openSameTab: true,
  buttons: [
    { label: 'DKO', url: 'https://www.ilovepdf.com/' },
    { label: 'VB DKO', url: 'https://example.com/vb-dko' },
    { label: 'Materi', url: 'https://example.com/materi' },
    { label: 'DAMS', url: 'https://example.com/dams' },
  ],
};

(function init() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn, index) => {
    const cfg = CONFIG.buttons[index];
    if (!cfg || !cfg.url) return;

    // Isi atribut href agar tetap berfungsi meskipun JavaScript dimatikan
    btn.setAttribute('href', cfg.url);

    btn.addEventListener('click', (event) => {
      // Biarkan anchor bawaan bekerja jika openSameTab true
      if (!CONFIG.openSameTab) {
        event.preventDefault();
        window.open(cfg.url, '_blank', 'noopener,noreferrer');
      }
    });
  });
})();