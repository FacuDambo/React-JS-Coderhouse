const productos = [
    {id: "1", nombre: "PRODUCTO 1", img: "https://s3-sa-east-1.amazonaws.com/peluffo/125e69c6-59d0-4af5-9d6d-e0be4356dd1c.png", precio: 1200, stock: 3, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", categoria: "Agendas"},
    {id: "2", nombre: "PRODUCTO 2", img: "https://s3-sa-east-1.amazonaws.com/peluffo/125e69c6-59d0-4af5-9d6d-e0be4356dd1c.png", precio: 1200, stock: 4, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", categoria: "Agendas"},
    {id: "3", nombre: "PRODUCTO 3", img: "https://s3-sa-east-1.amazonaws.com/peluffo/125e69c6-59d0-4af5-9d6d-e0be4356dd1c.png", precio: 1900, stock: 6, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", categoria: "Agendas"},
    {id: "4", nombre: "PRODUCTO 4", img: "https://s3-sa-east-1.amazonaws.com/peluffo/9c2c30d7-2b30-487a-b44c-3fd10c105ec1.png", precio: 1400, stock: 7, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", categoria: "Cuadernos"},
    {id: "5", nombre: "PRODUCTO 5", img: "https://s3-sa-east-1.amazonaws.com/peluffo/9c2c30d7-2b30-487a-b44c-3fd10c105ec1.png", precio: 1300, stock: 2, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", categoria: "Cuadernos"},
    {id: "6", nombre: "PRODUCTO 6", img: "https://s3-sa-east-1.amazonaws.com/peluffo/9c2c30d7-2b30-487a-b44c-3fd10c105ec1.png", precio: 1000, stock: 9, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", categoria: "Cuadernos"}
]

export const getProducts = new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos)
    }, 2000);
}) 
