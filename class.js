class Mclaren {
	constructor(model, year, aceleration) {
		this.model = model;
		this.year = year;
		this.aceleration = aceleration;
		this.velocity = 0;
	}

	acelerar() {
		// Define o intervalo de tempo entre cada incremento de velocidade
		const intervalo = 3000 / 61;

		for (let i = 0; i < 61; i++) {
			// Usa setTimeout para imprimir a velocidade a cada intervalo
			setTimeout(() => {
				this.velocity = i;
				console.log(`${this.model}, Velocidade: ${this.velocity}`);
			}, i * intervalo);
		}
	}
}

const MCLAREN_570S = new Mclaren("570S", 2015, "328km/h");
const MCLAREN_720S = new Mclaren("720S", 2017, "341km/h");

console.log(MCLAREN_570S);
console.log(MCLAREN_720S);
MCLAREN_570S.acelerar();
