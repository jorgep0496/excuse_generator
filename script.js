window.onload = function() {
	var first = ['Un ', 'Mi ', 'El '];
	var adj = ['furioso ', 'apestoso ', 'molesto ', 'loco ','brillante ','veloz ', 'joven ','viejo ' ];
	var noun = ['gato ','pez ','perro ', 'jardinero ', 'chofer ', 'primo ', 'tio '];
	var action = ['arranco mi ', 'tiro mi ', 'rompio mi ' , 'pateo mi ', 'robo mi ', 'quemo mi ', 'mordio mi ', 'golpeo mi '];
	var possetion = ['cuaderno ', 'carro ', 'reloj ', 'zapato ', 'billetera ', 'camisa ', 'tarea ', 'laptop ', 'celular ', 'sandwich '];
	var where = ['en la calle','en mi casa','en el estacionamiento', 'en el baño', 'cerca de la oficina', 'en el patio', 'en la estacion'];
  
	var rdm0 = Math.floor((Math.random() * first.length) );
	var rdm1 = Math.floor((Math.random() * adj.length) );
	var rdm2 = Math.floor((Math.random() * noun.length) );
	var rdm3 = Math.floor((Math.random() * action.length) );
	var rdm4 = Math.floor((Math.random() * possetion.length) );
	var rdm5 = Math.floor((Math.random() * where.length) );

	document.querySelector('#excuse').innerHTML = first[rdm0] + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
  
}