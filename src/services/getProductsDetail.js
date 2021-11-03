const detalles = [
    {id: "1", nombre: "PRODUCTO 1", img: "https://s3-sa-east-1.amazonaws.com/peluffo/125e69c6-59d0-4af5-9d6d-e0be4356dd1c.png", precio: 1200, stock: 3, descripcion: "Descricion detallada del producto 1", categoria: "Agendas"},
    {id: "2", nombre: "PRODUCTO 2", img: "https://s3-sa-east-1.amazonaws.com/peluffo/125e69c6-59d0-4af5-9d6d-e0be4356dd1c.png", precio: 1200, stock: 4, descripcion: "Descricion detallada del producto 2", categoria: "Agendas"},
    {id: "3", nombre: "PRODUCTO 3", img: "https://s3-sa-east-1.amazonaws.com/peluffo/125e69c6-59d0-4af5-9d6d-e0be4356dd1c.png", precio: 1900, stock: 6, descripcion: "Descricion detallada del producto 3", categoria: "Agendas"},
    {id: "4", nombre: "PRODUCTO 4", img: "https://s3-sa-east-1.amazonaws.com/peluffo/9c2c30d7-2b30-487a-b44c-3fd10c105ec1.png", precio: 1400, stock: 7, descripcion: "Descricion detallada del producto 4", categoria: "Cuadernos"},
    {id: "5", nombre: "PRODUCTO 5", img: "https://s3-sa-east-1.amazonaws.com/peluffo/9c2c30d7-2b30-487a-b44c-3fd10c105ec1.png", precio: 1300, stock: 2, descripcion: "Descricion detallada del producto 5", categoria: "Cuadernos"},
    {id: "6", nombre: "PRODUCTO 6", img: "https://s3-sa-east-1.amazonaws.com/peluffo/9c2c30d7-2b30-487a-b44c-3fd10c105ec1.png", precio: 1000, stock: 9, descripcion: "Descricion detallada del producto 6", categoria: "Cuadernos"}
]

const getProductsDetail = new Promise ((res, rej) => {
    setTimeout(() => {
        res(detalles)
    }, 2000);
}) 

export default getProductsDetail