function enviarCadena() {
	let cadena = document.getElementById("cadenatxt").value;
	cadenatxt.value = "";
	esPalindromo(cadena);
}

function esPalindromo(cadena) {
	
	cadena = cadena.toLowerCase().replace(/\s/g, '');
	let invertida = cadena.split('').reverse().join('');

	let resultado = document.createElement("p");

	if (cadena === '') {
		resultado.textContent = "No debe escribir una cadena vacía.";
		console.log("No debe escribir una cadena vacía.");
	} else if (cadena === invertida) {
		resultado.textContent = "La cadena: '" + cadena + "' es un palíndromo.";
		console.log("La cadena: '" + cadena + "' es un palíndromo.");
	} else {
		resultado.textContent = "La cadena: '" + cadena + "' no es un palíndromo.";
		console.log("La cadena: '" + cadena + "' no es un palíndromo.");
	}
	document.body.appendChild(resultado);
}

function resetPage() {
	location.reload();
}


