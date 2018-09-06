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
		this.Operaciones = {"P1":"","Oper":"","P2":""} 
		sessionStorage.setItem('Cantidades', JSON.stringify(""))
		sessionStorage.setItem('Operaciones', JSON.stringify(this.Operaciones))

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
		var self = this
		var tecla = event.target
		var tecla_val = JSON.parse(sessionStorage.getItem('Cantidades'))
		var display = document.getElementById("display")
		
		//tecla.style.width = "18%";
		
		if(tecla.alt>0){
			if(tecla_val.length <=7){
				tecla_val += tecla.alt
				sessionStorage.setItem('Cantidades', JSON.stringify(tecla_val))
			}
			display.innerHTML = tecla_val
		}else if(tecla.alt == "mas"){
			display.innerHTML = ""
			self.sortOper(tecla_val,"+")
			sessionStorage.setItem('Cantidades', JSON.stringify(""))
		}else if(tecla.alt == "menos"){
			display.innerHTML = ""
			self.sortOper(tecla_val,"-")
			sessionStorage.setItem('Cantidades', JSON.stringify(""))
		}else if (tecla.alt == "por"){
			display.innerHTML = ""
			self.sortOper(tecla_val,"*")
			sessionStorage.setItem('Cantidades', JSON.stringify(""))
		}else if(tecla.alt == "dividido"){
			display.innerHTML = ""
			self.sortOper(tecla_val,"/")
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
		}else if(tecla.alt == "="){
			self.calcula(display)
		}else if(tecla.alt == "On"){
			Calculadora.init()
		}else{
			display.innerHTML = "0"
		}
	},
	eventUpBotonAccion(event){
		this.boton_up(event.target)
	},
	sumaOper: function(){

	},
	restaOper: function(){

	},
	multiplicacionOper: function(){

	},
	divicionOper: function(){

	},
	sortOper: function(cantidad,oper){
		var Operaciones = JSON.parse(sessionStorage.getItem('Operaciones'))
		if(Operaciones.P1==""){
			Operaciones["P1"] = cantidad
			Operaciones["Oper"] = oper
			sessionStorage.setItem('Operaciones', JSON.stringify(Operaciones))
		}else{
			Operaciones["P2"] = cantidad
			sessionStorage.setItem('Operaciones', JSON.stringify(Operaciones))
		}
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