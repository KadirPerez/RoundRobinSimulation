function inicializarSimulacion(numeroProcesos){
    const procesos = [];
    const maxLineas = 10;
    for (let i = 0; i < numeroProcesos; i++) {
        procesos.push(new Object());
        procesos[i].nombre = "Proceso " + (i + 1);
        procesos[i].cantidadDeLineasPorEjecutar = Math.floor(Math.random() * maxLineas) + 1;
        procesos[i].punteroLineaActual = 0;
        procesos[i].codigo = elegirLineas(procesos[i].cantidadDeLineasPorEjecutar)
    }
    return procesos
}

function elegirLineas(numLineas){
    const codigoValido = ["const a = 20 + 30", "const b = a - 30", "console.log(\"Hola\")", "let numero = 5", "const mensaje = \"Bienvenido\"", "console.log(mensaje)", "const esMayor = (edad) => { return edad > 18 ? \"Mayor\" : \"Menor\"; }", "const longitudNombre = nombre.length", "nombre = \"Kadir\"", "const array = [1, 2, 3, 4, 5]"];
    codigo = [];
    for(let i = 0; i < numLineas; i++) {
        const numRan = Math.floor(Math.random() * codigoValido.length);
        codigo.push(codigoValido[numRan]);
    }
    return codigo
}

function empezarSimulacion(procesos) {
    do {
        flag = 0;
        for(let i in procesos) {
            if(procesos[i].punteroLineaActual < procesos[i].codigo.length){
                document.write(procesos[i].nombre + "<br>");
                document.write(procesos[i].codigo[procesos[i].punteroLineaActual] + "<br><br>");
                procesos[i].punteroLineaActual ++;
                flag = 1;
            } else {
                document.write(procesos[i].nombre + "<br>");
                document.write("Terminado<br><br>");
            }
        }
        document.write("---------------------------- <br><br>");
    } while(flag == 1);
}

const numProcesos = prompt("Cantidad de procesos a simular: ")
procesos = inicializarSimulacion(numProcesos);
empezarSimulacion(procesos)