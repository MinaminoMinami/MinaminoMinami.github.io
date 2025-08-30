function openChapter(n) {
  const panel = document.createElement('div');
  panel.className = 'modal-panel';
  panel.innerHTML = `...`;
  document.body.append(panel);
  panel.animate([{ opacity: 0, transform: 'scale(0.8)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 300 });
}
