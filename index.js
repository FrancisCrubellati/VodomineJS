class Producto {
      constructor(nombre, precio) {
            this.nombre = nombre
            this.precio = precio
      }
}
const Hoddie = new Producto("Hoodie Camel", 9800, 1);
const Short = new Producto("Short Black", 6500, 2);
const Bermuda = new Producto("Bermuda Denim", 6700, 3);
const productos = [];
productos.push(Hoddie)
productos.push(Short)
productos.push(Bermuda)

let opciones = parseInt(prompt("Escoga un numero de el producto 1-Hoodie  2-Short  3-Bermuda"));
let precioFinal = document.getElementById("productos");
let li = document.createElement("li");

switch (opciones) {

      case 1:
            li.innerHTML = `<h2>Producto: ${Hoddie.nombre}</h2>
      <b>$${Hoddie.precio}</b>
      `;
            precioFinal.append(li);
            break;

      case 2:
            li.innerHTML = `<h2>Producto: ${Short.nombre}</h2>
      <b>$${Short.precio}</b>
      `;
            precioFinal.append(li);
            break;

      case 3:
            li.innerHTML = `<h2>Producto: ${Bermuda.nombre}</h2>
      <b>$${Bermuda.precio}</b>
      `;
            precioFinal.append(li);
            break;


}






