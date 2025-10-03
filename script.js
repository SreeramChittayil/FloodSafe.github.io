// Footer year
document.getElementById('y').textContent = new Date().getFullYear();

// SOS demo pins
const map = document.getElementById('map');
if (map) {
  map.addEventListener('click', (e) => {
    const rect = map.getBoundingClientRect();
    const pin = document.createElement('div');
    pin.style.position = 'absolute';
    pin.style.width = '14px';
    pin.style.height = '14px';
    pin.style.borderRadius = '50%';
    pin.style.background = '#ff6b6b';
    pin.style.left = (e.clientX - rect.left - 7) + 'px';
    pin.style.top = (e.clientY - rect.top - 7) + 'px';
    pin.style.boxShadow = '0 0 0 8px rgba(255,107,107,0.3)';
    map.appendChild(pin);
    setTimeout(() => pin.remove(), 2500);
  });
}

// Rain effect
const rainRoot = document.getElementById('rain');
if (rainRoot) {
  for (let i=0; i<60; i++) {
    const drop = document.createElement('div');
    drop.style.position = 'absolute';
    drop.style.left = Math.random()*100 + 'vw';
    drop.style.height = '80px';
    drop.style.width = '1px';
    drop.style.background = 'rgba(255,255,255,0.4)';
    drop.style.top = Math.random()*-100 + 'px';
    drop.style.animation = `fall ${0.8+Math.random()}s linear infinite`;
    rainRoot.appendChild(drop);
  }
}
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
  from { transform: translateY(-120px); }
  to { transform: translateY(100vh); }
}`;
document.head.appendChild(style);