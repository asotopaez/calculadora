// Variables 
/*
function boton_press(elemento){
  //elemento.style.width = "18%";
  console.log(elemento,"press")
}
function boton_up(elemento){
  //elemento.style.width = "20%";
  console.log(elemento,"up")
}
*/
// Clase Calculadora
var Calculadora = {
	init: function() {
		this.iniciar_cero();
		this.asignarEventosBotones('tecla');
		this.arreOper = [];
		localStorage.setItem('operaciones', JSON.stringify(this.arreOper))

	},
	iniciar_cero: function(){
		var display = document.getElementById("display")
		var display_val = display.innerHTML
		if (display_val > 0){
			display.innerHTML = "0"
		}
	},
	asignarEventosBotones: function(selector){
	    var botonesPagina = document.getElementsByClassName(selector);
	    for (var i = 0; i < botonesPagina.length; i++) {
	      botonesPagina[i].onclick = this.eventoPressBotonAccion;
	      botonesPagina[i].onkeyup = this.eventUpBotonAccion;
	    }
	  },
	eventoPressBotonAccion(event){
		var tecla = event.target
		var tecla_val = tecla.alt
		var display = document.getElementById("display")
		//tecla.style.width = "18%";
		console.log(tecla.alt, "aqui")
		if(tecla_val>0){
			display.innerHTML = tecla_val
		}else if(tecla == "mas"){
			display.innerHTML = ""
		}else if(tecla == "menos"){
			display.innerHTML = ""
		}else if (tecla == "por"){
			display.innerHTML = ""
		}else if(tecla == "dividido"){
			display.innerHTML = ""
		}else if(tecla == "punto"){
			display.innerHTML = ""
		}else if(tecla == "signo"){
			display.innerHTML = ""
		}else if(tecla == "="){
			this.calcula(display)
		}else{
			display.innerHTML = "0"
		}
	},
	eventUpBotonAccion(event){
		this.boton_up(event.target)
	},
	suma: function(){
		var res_suma = this.arreOper[0] + this.arreOper[1]
		this.resultados(res_suma);
	},
	resta: function(){
		var res_resta = this.arreOper[0] - this.arreOper[1]
		this.resultados(res_resta);
	},
	multiplicacion: function(){
		var res_multiplicacion = this.arreOper[0] * this.arreOper[1]
		this.resultados(res_multiplicacion);
	},
	divicion: function(){
		var res_divicion = this.arreOper[0] / this.arreOper[1]
		this.resultados(res_divicion);
	},
	boton_up: function(){

	},
	boton_on: function(){

	},
	boton_decimal: function(){

	},
	boton_negativos: function(){

	},
	calcula: function(display){
		//resultados a 8 digitos
		display.innerHTML = "calculado"
	}
}

Calculadora.init();