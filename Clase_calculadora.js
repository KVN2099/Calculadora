let G_Numero1 = 0;  //  Numero1
let G_Numero2 = 0;  //  Numero2
let G_Signo = "";   //  Operacion matematica

$("#suma").click(function() { //  Obtiene el numero y el signo de sumar
  G_Numero1 = document.getElementById('texto').innerHTML;
  G_Signo = "+";
  document.getElementById('texto').innerHTML = "";
});

$("#resta").click(function() {  //  Obtiene el numero y el signo de restar
  G_Numero1 = document.getElementById('texto').innerHTML;
  G_Signo = "-";
  document.getElementById('texto').innerHTML = "";
});

$("#multiplicacion").click(function() { //  Obtiene el numero y el signo de multiplicar
  G_Numero1 = document.getElementById('texto').innerHTML;
  G_Signo = "x";
  document.getElementById('texto').innerHTML = "";
});

$("#division").click(function() { //  Obtiene el numero y el signo de dividir
  G_Numero1 = document.getElementById('texto').innerHTML;
  G_Signo = "÷";
  document.getElementById('texto').innerHTML = "";
});

$("#igual").click(function() {  //  Obtiene el segundo numero y realiza las operaciones
  G_Numero2 = document.getElementById('texto').innerHTML;
  let clase_instanciada = new calculadora(G_Numero1 , G_Numero2);
  document.getElementById('texto').innerHTML = "";

  switch (G_Signo) {  //  Operacion segun el signo
    case "+":
      clase_instanciada.sumaAsincrona().then(function(response) {
        document.getElementById('texto').innerHTML = response;
      } , function(error) {
        document.getElementById('texto').innerHTML = "No se pudo resolver la peticion";
      });  //  document.getElementById('texto').innerHTML = clase_instanciada.suma();  //  Se va a la funcion para realizar la operacion designada
    break;

    case "-":
      clase_instanciada.restaAsincrona().then(function(response) {
        document.getElementById('texto').innerHTML = response;
      } , function(error) {
        document.getElementById('texto').innerHTML = "No se pudo resolver la peticion";
      });  //  document.getElementById('texto').innerHTML = clase_instanciada.resta(); //  Se va a la funcion para realizar la operacion designada
    break;

    case "x":
      clase_instanciada.multiplicacionAsincrona().then(function(response) {
        document.getElementById('texto').innerHTML = response;
      } , function(error) {
        document.getElementById('texto').innerHTML = "No se pudo resolver la peticion";
      });  //  document.getElementById('texto').innerHTML = clase_instanciada.multiplicacion();  //  Se va a la funcion para realizar la operacion designada
    break;

    case "÷":
      clase_instanciada.divisionAsincrona().then(function(response) {
        document.getElementById('texto').innerHTML = response;
      } , function(error) {
        document.getElementById('texto').innerHTML = "No se pudo resolver la peticion";
      });  //  document.getElementById('texto').innerHTML = clase_instanciada.division();  //  Se va a la funcion para realizar la operacion designada
    break;
    default:
    break;
  }
});


class calculadora { //  Clase con las operaciones
  constructor(_numero1 , _numero2) {
    this.Numero1 = _numero1;
    this.Numero2 = _numero2;
  }

  suma() {  //  Devuelve el resultado de la multiplicacion
    return parseInt(this.Numero1) + parseInt(this.Numero2);
  }

  resta() { //  Devuelve el resultado de la multiplicacion
    return parseInt(this.Numero1) - parseInt(this.Numero2);
  }

  multiplicacion() {  //  Devuelve el resultado de la multiplicacion
    return parseInt(this.Numero1) * parseInt(this.Numero2);
  }

  division() {  //  Devuelve el resultado de la multiplicacion
    var res = parseInt(this.Numero1) / parseInt(this.Numero2);
    // res = res.toFixed(2);
    Math.round(res);
    return res;
  }

  //  Peticion asincrona (promesa)
  sumaAsincrona() { //  Cuando el usuario recibe la respuesta a la peticion, el programa le mencona si lo resolvio o no
    var objeto = this;  //  Es la misma funcion
    return new Promise(function(resolve , reject) { //  Una funcion que tiene como parametro otra funcion
      try {
        resolve(parseInt(objeto.Numero1) + parseInt(objeto.Numero2)); //  Intenta resolver la operacion
      } catch (err) {
          reject(err.message);  //  Si no se resuelve, manda un mensaje
      }
    });
  }

  restaAsincrona() {  //  Cuando el usuario recibe la respuesta a la peticion, el programa le mencona si lo resolvio o no
    var objeto = this;  //  Es la misma funcion
    return new Promise(function(resolve , reject) { //  Una funcion que tiene como parametro otra funcion
      try {
        resolve(parseInt(objeto.Numero1) - parseInt(objeto.Numero2)); //  Intenta resolver la operacion
      } catch (err) {
          reject(err.message);  //  Si no se resuelve, manda un mensaje
      }
    });
  }

  multiplicacionAsincrona() { //  Cuando el usuario recibe la respuesta a la peticion, el programa le mencona si lo resolvio o no
    var objeto = this;  //  Es la misma funcion
    return new Promise(function(resolve , reject) { //  Una funcion que tiene como parametro otra funcion
      try {
        resolve(parseInt(objeto.Numero1) * parseInt(objeto.Numero2)); //  Intenta resolver la operacion
      } catch (err) {
          reject(err.message);  //  Si no se resuelve, manda un mensaje
      }
    });
  }

  divisionAsincrona() { //  Cuando el usuario recibe la respuesta a la peticion, el programa le mencona si lo resolvio o no
    var objeto = this;  //  Es la misma funcion
    return new Promise(function(resolve , reject) { //  Una funcion que tiene como parametro otra funcion
      try {
        resolve(Math.round(parseInt(objeto.Numero1) / parseInt(objeto.Numero2) * 100) / 100); //  Intenta resolver la operacion
      } catch (err) {
          reject(err.message);  //  Si no se resuelve, manda un mensaje
      }
    });
  }

}
