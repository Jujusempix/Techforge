// Contador simples: incrementa e decrementa o valor exibido em index.html

const counterEl = document.getElementById('counter');
const parityEl = document.getElementById('parity');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');

let value = 0;

function render() {
	if (counterEl) counterEl.textContent = value;
	if (parityEl) {
		parityEl.textContent = (value % 2 === 0) ? 'Esse número é par' : 'Esse número é ímpar';
	}
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

