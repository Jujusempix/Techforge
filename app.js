// Contador simples: incrementa e decrementa o valor exibido em index.html

const counterEl = document.getElementById('counter');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');

let value = 0;

function render() {
	if (counterEl) counterEl.textContent = value;
}

if (incBtn) incBtn.addEventListener('click', () => {
	value += 1;
	render();
});

if (decBtn) decBtn.addEventListener('click', () => {
	value -= 1;
	render();
});

// inicializa display
render();

