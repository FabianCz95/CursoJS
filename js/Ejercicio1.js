/* Problema A 
    Ingresar el monto y mostrar el mas caro
    Si hay 2 o mas, mostrar ambos
    Indicar el vuelto
*/

// ======================================================================================
function Comprar(nombre) {
    // Se declara el dinero que tienes para comprar helado
    let dinero = prompt(`¿Cuanto dinero tienes ${nombre}?`)

    document.write(`
        <hr>
        <h2>${nombre} completa</h2>
    `)
    // Array de helados
    var helados = [{
            nombre: 'Palito de helado de agua',
            precio: 0.6,
            moneda: 'USD'
        },
        {
            nombre: 'Palito de helado de crema',
            precio: 1,
            moneda: 'USD'
        },
        {
            nombre: 'Bombón helado marca heladix',
            precio: 1.6,
            moneda: 'USD'
        },
        {
            nombre: 'Bombón helado marca heladovich',
            precio: 1.7,
            moneda: 'USD'
        },
        {
            nombre: 'Bombón helado marca helardo',
            precio: 1.8,
            moneda: 'USD'
        },
        {
            nombre: 'Potecito de helado con confites',
            precio: 2.9,
            moneda: 'USD'
        },
        {
            nombre: 'Pote de 1/4 KG',
            precio: 2.9,
            moneda: 'USD'
        },
    ]

    var completa = new Array(); //se declara el nuevo array de los productos que completan


    // Se añaden los helados que completan con el dinero
    for (let i = 0; i < helados.length; i++) {
        const helado = helados[i];
        if (helado.precio <= dinero) {
            completa.push(helado.precio)
        }
    }

    // Se identifica el precio del helado mas caro
    var max = Math.max.apply(null, completa)

    // Se imprime lo que completa y su cambio
    for (let i = 0; i < helados.length; i++) {
        const helado = helados[i];
        if (max === helado.precio) {
            document.write(`
        <h4>${helado.nombre}</h4>
        <h4>$ ${helado.precio} - ${helado.moneda}<h4>
        <h4>Le sobran: $ ${(dinero - max).toFixed(2)} - ${helado.moneda} </h4>
        `)
        }
    }
}

Comprar('Roberto');


// ======================================================================================
/*
    Problema B
    Si le alcanza uno, lo compra
    Si le alcanza dos, compra 2
    Si le alcanza Tres y sobra, regala el vuelto
    Debe mostrar que compró y el vuelto

*/
/*
    Problema C
    Si miente, le da una descarga
    Si no miente, no hacer nada
    Si el aparato no se decide, aclarar
    Que la pregunta debe ser más clara
*/