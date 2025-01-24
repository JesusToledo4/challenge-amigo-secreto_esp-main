

#a continuación se realiza una pequeña descripción del código para realizar el juego del amigo secreto.

###Función para agregar amigo:

La función agregarAmigo() toma el nombre de un amigo desde un campo de entrada. Si el campo está vacío, muestra una alerta pidiendo que se ingrese un nombre. Si hay un nombre válido, lo agrega al arreglo amigos.

###Limpiar el campo de texto:

Después de agregar un amigo a la lista, el campo de entrada se limpia automáticamente para permitir que el usuario agregue otro nombre sin tener que borrar el texto manualmente.

###Iterar sobre la lista:

La función actualizarListaAmigos() recorre el arreglo amigos y actualiza dinámicamente una lista en la interfaz, mostrando todos los nombres de los amigos en una lista HTML.

###Sortear el amigo secreto:

La función sortearAmigo() selecciona aleatoriamente un nombre del arreglo amigos. Si la lista está vacía, muestra una alerta pidiendo que se agreguen amigos antes de intentar el sorteo.

###Mostrar el resultado en pantalla:

Una vez sorteado el amigo secreto, el nombre del amigo seleccionado se muestra en un área específica de la interfaz, donde se destaca el resultado con un mensaje en negrita.