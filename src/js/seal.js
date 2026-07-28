// One orchestrated moment: the server pane "resolves" into ciphertext on load.
// Pure enhancement — the static ciphertext is already in the HTML for no-JS
// and reduced-motion visitors.
const pane = document.getElementById("ciphertext");
if (pane && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const target = pane.textContent;
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const start = performance.now();
  const duration = 1200;

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const settled = Math.floor(target.length * progress);
    let out = target.slice(0, settled);
    for (let i = settled; i < target.length; i++) {
      const c = target[i];
      out += c === "\n" || c === "=" ? c : glyphs[(Math.random() * glyphs.length) | 0];
    }
    pane.textContent = out;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
