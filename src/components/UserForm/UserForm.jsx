import {useState} from 'react'
import { useCartContext } from '../../context/CartContext'

const UserForm = ({createOrder}) => {
    /* const {handleForm, userData} = useCartContext() */
    const [name, setName] = useState(false)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [emailDos, setEmailDos] = useState(false)

    const nameRegex =/^[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/
    const phoneRegex =/^[0-9]{11}$/
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/

    const valorName = (nameValidar) => {
        if (nameValidar) {
            if (nameRegex.test(nameValidar)) {
                setName(true)
            }
        }
    }
    const valorPhone = (phoneValidar) => {
        if (phoneValidar) {
            if (phoneRegex.test(phoneValidar)) {
                setPhone(true)
            }
        }
    }
    const valorEmail = (emailValidar) => {
        if (emailValidar) {
            if (emailRegex.test(emailValidar)) {
                setEmail(true)
            }
        }
    }
    const valorEmailDos = (emailDosValidar) => {
        if (emailDosValidar) {
            if (emailRegex.test(emailDosValidar)) {
                setEmailDos(true)
            }
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        if(name===true && phone===true && email===true && emailDos===true){
            alert('oreden creada')
        }else{
            alert(`Complete todos los campos`)
        }

        /* setTimeout(()=> {window.location.reload()}, 8000) */
    }


    return (
        <form /* onChange={handleForm} */ onSubmit={e=>enviar(e)} className="user-form">
            <legend>Ingresa tus datos</legend>
            <div className="form-container">
                <label htmlFor="name">Nombre y apellido</label>
                <input type="text" name="name" placeholder="Juan Pérez" onChange={e=>valorName(e.target.value)} />
            </div>
            <div className="form-container">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" name="phone" placeholder="1149594959" pattern="[0-9]{10}" onChange={e=>valorPhone(e.target.value)} />
            </div>
            <div className="form-container">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="tuemail@gmail.com"  onChange={e=>valorEmail(e.target.value)}/>
            </div>
            <div className="form-container">
                <label htmlFor="email2">Confirmar email</label>
                <input type="email" name="email2" placeholder="tuemail@gmail.com" onChange={e=>valorEmailDos(e.target.value)} />
            </div>
            <button className="terminar-compra" type="submit">¡Comprar!</button>
        </form>
    )
}

export default UserForm
