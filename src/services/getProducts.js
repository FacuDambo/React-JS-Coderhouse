const productos = [
    {id: 1, nombre: "producto 1", img: "https://picsum.photos/200", precio: 1200, stock: 3, descripcion: "Descricion del producto 1"},
    {id: 2, nombre: "producto 2", img: "https://picsum.photos/200", precio: 1200, stock: 4, descripcion: "Descricion del producto 2"},
    {id: 3, nombre: "producto 3", img: "https://picsum.photos/200", precio: 1900, stock: 6, descripcion: "Descricion del producto 3"},
    {id: 4, nombre: "producto 4", img: "https://picsum.photos/200", precio: 1400, stock: 7, descripcion: "Descricion del producto 4"},
    {id: 5, nombre: "producto 5", img: "https://picsum.photos/200", precio: 1300, stock: 2, descripcion: "Descricion del producto 5"},
    {id: 6, nombre: "producto 6", img: "https://picsum.photos/200", precio: 1000, stock: 9, descripcion: "Descricion del producto 6"}
]

export const getProducts = new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos)
    }, 2000);
}) 

export const getItem = new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos[0]);
    }, 2000);
})