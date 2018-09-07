
// Clase Calculadora
var Calculadora = {
	init: function() {
		this.iniciar_cero();
		this.asignarEventosBotones('tecla');
		this.Operaciones = {"P1":"","Oper":"","P2":""} 
		sessionStorage.setItem('Cantidades', JSON.stringify(""))
		sessionStorage.setItem('Operaciones', JSON.stringify(this.Operaciones))
	},
	iniciar_cero: function(){
		// Funcion inicial de display en 0
		var display = document.getElementById("display")
		var display_val = display.innerHTML
		if (display_val > 0){
			display.innerHTML = "0"
		}
	},
	asignarEventosBotones: function(selector){
		// Funcion inicial de asignacion de eventos en la clase tecla
	    var botonesPagina = document.getElementsByClassName(selector);
	    for (var i = 0; i < botonesPagina.length; i++) {
	      botonesPagina[i].onclick = this.eventoPressBotonAccion;
	      botonesPagina[i].onmouseleave = this.teclaUp
	      botonesPagina[i]["down"] = this.teclaDown
	      botonesPagina[i]["calcula"] = this.calculaOper
	      botonesPagina[i]["ordena"] = this.ordenOper
	    }
	  },
	eventoPressBotonAccion(event){
		var self = this
		var tecla = event.target
		var tecla_val = JSON.parse(sessionStorage.getItem('Cantidades'))
		var display = document.getElementById("display")
		
		// Boton mas pequeño
		self.down(event)

		// Tecla On de reinicio
		if(tecla.alt == "On"){
			Calculadora.init()
		}

		//Teclas numericas y simbolos
		if(tecla.alt>=0){
			if(tecla_val.length <=7){
				tecla_val += tecla.alt
				if(tecla_val.indexOf(".") == -1){
					tecla_val = parseInt(tecla_val)
				}else{
					tecla_val = parseFloat(tecla_val)
				}
				sessionStorage.setItem('Cantidades', JSON.stringify(String(tecla_val)))
			}
			display.innerHTML = tecla_val
		}else if(tecla.alt == "mas"){
			display.innerHTML = ""
			self.ordena(tecla_val,"+")
			sessionStorage.setItem('Cantidades', JSON.stringify(""))
		}else if(tecla.alt == "menos"){
			display.innerHTML = ""
			self.ordena(tecla_val,"-")
			sessionStorage.setItem('Cantidades', JSON.stringify(""))
		}else if (tecla.alt == "por"){
			display.innerHTML = ""
			self.ordena(tecla_val,"*")
			sessionStorage.setItem('Cantidades', JSON.stringify(""))
		}else if(tecla.alt == "dividido"){
			display.innerHTML = ""
			self.ordena(tecla_val,"/")
			sessionStorage.setItem('Cantidades', JSON.stringify(""))
		}else if(tecla.alt == "punto"){
			if(tecla_val.indexOf(".") == -1){
				tecla_val = tecla_val+"."
			}
			display.innerHTML = tecla_val
			sessionStorage.setItem('Cantidades', JSON.stringify(tecla_val))
		}else if(tecla.alt == "signo"){
			if (tecla_val[0] =="-"){
				tecla_val = tecla_val.substring(1,tecla_val.length)
			}else{
				tecla_val = "-"+tecla_val
			}
			display.innerHTML = tecla_val
			sessionStorage.setItem('Cantidades', JSON.stringify(tecla_val))
		}else if(tecla.alt == "igual"){
			self.ordena(tecla_val,"=")
			self.calcula()
		}else{
			display.innerHTML = "0"
		}
	},
	teclaUp(event){
		// Tamaño normal
		var tecla = event.target
		if(tecla.alt != "mas"){		
			tecla.style.height = "62.91px";
	    	tecla.style.width = "76.98px";
		}else{
			tecla.style.height = "149.55px";
	    	tecla.style.width = "78px";
		}
	},
	teclaDown(event){
		// Reduccion de tamaño
		var tecla = event.target
		if(tecla.alt != "mas"){
			tecla.style.height = "59.91px";
	    	tecla.style.width = "75.98px";
		}else{
			tecla.style.height = "147.56px";
	    	tecla.style.width = "75px";
		}
	},
	ordenOper: function(cantidad,oper){
		//Funcion de ordenamiento de operaciones
		var Operaciones = JSON.parse(sessionStorage.getItem('Operaciones'))
		if (oper!="="){
			Operaciones["Oper"] = oper
		}
		if(Operaciones.P1==""){
			if(cantidad.indexOf(".") == -1){
				Operaciones["P1"] = parseInt(cantidad)
			}else{
				Operaciones["P1"] = parseFloat(cantidad)
			}
		}else{
			if(cantidad.indexOf(".") == -1){
				Operaciones["P2"] = parseInt(cantidad)
			}else{
				Operaciones["P2"] = parseFloat(cantidad)
			}
		}
		sessionStorage.setItem('Operaciones', JSON.stringify(Operaciones))
		//console.log("aqui",oper,Operaciones)
	},
	calculaOper: function(){
		// Funcion de calculo aritmetico de operaciones
		var Operaciones = JSON.parse(sessionStorage.getItem('Operaciones'))
		var resultados = ""
		if (Operaciones["Oper"] =="+"){
			resultados = Operaciones["P1"] + Operaciones["P2"]
		}else if (Operaciones["Oper"] =="-"){
			resultados = Operaciones["P1"] - Operaciones["P2"]
		}else if (Operaciones["Oper"] =="/"){
			resultados = Operaciones["P1"] / Operaciones["P2"]
		}else if (Operaciones["Oper"] =="*"){
			resultados = Operaciones["P1"] * Operaciones["P2"]
		}else{
			display.innerHTML = "calculando"
		}
		Operaciones["P1"] = "" 
		sessionStorage.setItem('Operaciones', JSON.stringify(Operaciones))
		sessionStorage.setItem('Cantidades', JSON.stringify(String(resultados)))

		if(String(resultados).length <=7){
			display.innerHTML = resultados
		}else{
			display.innerHTML = String(resultados).substring(0,7)
		}
	}
}

// Inicio del modulo calculadora
Calculadora.init();