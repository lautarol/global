      // variables se pueden instanciar con var, let o const
      var nombre = "Juan";
      let apellido = "Perez";
      const PI = 3.1416;
      // variables pueden ser de diferente tipo
      var edad = 20; // number
      const casado = false; // boolean
      let hijos = null; // null
      let cedula = undefined; // undefined
      let nombreMadre = "Maria"; // string
      let perro = {
        nombre: "Firulais",
        edad: 10,
        vacunado: true
      }; // object
      let gato = {
        nombre: "Misifu",
        edad: 5,
        vacunado: false
      }; // object
      let mascotas = [perro, gato]; // Array

      // operadores

      // aritmeticos
      //suma / concatenacion
      var c = 1 + 2; // 3
      console.log('suma:', c);
      var d = 'Juan' + " " + 'Perez'; // "Juan Perez"
      console.log('concatenacion:', d);
      var e = 1 + 'Juan'; // 1Juan (si hay una string en la operacion, todo se convierte en string)
      console.log('concatenacion:', e);
      // resta
      var f = 2 - 1; // 1
      console.log('resta:', f);

      // multiplicacion
      var g = 2 * 2; // 4
      console.log('multiplicacion:', g);

      // division
      var h = 3 / 2; // 1.5
      console.log('division:', h);

      // modulo
      var i = 5 % 2; // 1
      console.log('modulo:', i);
      /////////////////////////////////
      // asignacion
      var j = 1;
      var k = 2;
      ///
      //igualdad
      var iguales = 1 == 1; // true
      console.log('igualdad iguales:', iguales);
      var igualesDobleIgual = 1 == '1'; // true
      console.log('igualdad igualesDobleIgual:', igualesDobleIgual);
      var distintos = 1 == 3 // false
      console.log('igualdad distintos:', distintos);

      //identidad
      var igualesTipo = 1 === '1'; // false
      console.log('identidad igualesTipo:', igualesTipo);

      // desigualdad
      var desiguales = 1 != 2; // true
      console.log('desigualdad desiguales:', desiguales);
      var desigualesIguales = 1 != '1'; // false
      console.log('desigualdad desigualesIguales:', desigualesIguales);

      // desigualdad identidad
      var desigualesTipo = 1 !== '1'; // true
      console.log('desigualdad desigualesTipo:', desigualesTipo);

      // mayor que
      var mayorQue = 1 > 2; // false
      console.log('mayor que mayorQue:', mayorQue);

      // menor que
      var menorQue = 1 < 2; // true
      console.log('menor que menorQue:', menorQue);

      // mayor o igual que
      var mayorOIgualQue = 1 >= 2; // false
      console.log('mayor o igual que mayorOIgualQue:', mayorOIgualQue);
      
      // menor o igual que
      var menorOIgualQue = 1 <= 2; // true
      console.log('menor o igual que menorOIgualQue:', menorOIgualQue);

      // negacion
      var no = !true; // false
      console.log('negacion no:', no);

      // condicionales
      // if
      a = 1
      if (a === 1) {
        console.log('if');
      } else {
        console.log('else');
      }
      b = 2
      if (b === 1) {
        console.log('if');
      } else {
        console.log('else');
      }

      // switch
      var dia = 2;
      switch (dia) {
        case 1:
          console.log('Lunes');
          break;
        case 2:
          console.log('Martes');
          break;
        case 3:
          console.log('Miercoles');
          break;
        case 4:
          console.log('Jueves');
          break;
        case 5:
          console.log('Viernes');
          break;
        case 6:
          console.log('Sabado');
          break;
        case 7:
          console.log('Domingo');
          break;
        default:
          console.log('No es un dia valido');
          break;
      }

      // funciones

      function queDiaEsHoy() {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);

        return hoy.toDateString();
      }

      console.log('funcion queDiaEsHoy:', queDiaEsHoy());

      function numeroDiaNombre(numero) {
        if (dia == 1) return 'Lunes';
        if (dia == 2) return 'Martes';
        if (dia == 3) return 'Miercoles';
        if (dia == 4) return 'Jueves';
        if (dia == 5) return 'Viernes';
        if (dia == 6) return 'Sabado';
        if (dia == 7) return 'Domingo';
        return 'No es un dia valido';
      }
      console.log('funcion numeroDiaNombre:', numeroDiaNombre(1));

      // arrow functions o funciones flecha
      const suma = (a, b) => {
        return a + b;
      }

      console.log('arrow function suma:', suma(1, 2)); // 3
