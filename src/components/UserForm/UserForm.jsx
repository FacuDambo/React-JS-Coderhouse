import { useCartContext } from '../../context/CartContext'

const UserForm = ({createOrder}) => {
    const {handleForm, userData} = useCartContext()

    return (
        <form onChange={handleForm} onSubmit={(e)=> {
            e.preventDefault()
            userData.email === userData.emailValidation
                    ? createOrder()
                    : alert("Por favor vuelva a ingresar el mail")
            }} className="user-form">
            
            <legend>Ingresa tus datos</legend>
            <div className="form-container">
                <label htmlFor="name">Nombre y apellido</label>
                <input type="text" name="name" placeholder="Juan Pérez" defaultValue={userData.name} required/>
            </div>
            <div className="form-container">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" name="phone" placeholder="1149594959" pattern="[0-9]{10}" defaultValue={userData.phone} required/>
            </div>
            <div className="form-container">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="ejemplo@gmail.com"  defaultValue={userData.email} required/>
            </div>
            <div className="form-container">
                <label htmlFor="email2">Confirmar email</label>
                <input type="email" name="emailValidation" placeholder="ejemplo@gmail.com" defaultValue={userData.emailValidation} required/>
            </div>
            <button className="terminar-compra" type="submit">¡Comprar!</button>
        </form>
    )
}

export default UserForm
