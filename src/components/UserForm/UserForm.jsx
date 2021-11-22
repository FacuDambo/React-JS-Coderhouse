import React from 'react'
import { useCartContext } from '../../context/CartContext'

const UserForm = ({createOrder}) => {
    const {handleForm, userData} = useCartContext()
    
    return (
        <form onChange={handleForm} onSubmit={createOrder} className="user-form">
            <legend>Ingresa tus datos</legend>
            <div className="form-container">
                <label htmlFor="name">Nombre/s</label>
                <input type="text" name="name" placeholder="Juan" defaultValue={userData.name} />
            </div>
            <div className="form-container">
                <label htmlFor="surname">Apellido</label>
                <input type="text" name="surname" placeholder="Días" defaultValue={userData.surname} />
            </div>
            <div className="form-container">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="tuemail@gmail.com" defaultValue={userData.email} />
            </div>
            <div className="form-container">
                <label htmlFor="phone">Telefono</label>
                <input type="text" name="phone" placeholder="1149594959" defaultValue={userData.phone} />
            </div>
            <button className="terminar-compra">¡Comprar!</button>
        </form>
    )
}

export default UserForm
