// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
    
        actualizarListaAmigos();

        // Limpiar el campo de texto
        document.getElementById('amigo').value = "";
    }
}

// Función para actualizar la lista visualmente
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    // Iterar sobre el array y agregar los nombres a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agregue al menos un amigo.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id 'resultado'
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>¡Tu amigo secreto es: <strong>${amigoSorteado}</strong>!</p>`;
}