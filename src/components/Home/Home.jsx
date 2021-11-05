import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="home">
            <div className="home-start">
                <div className="home-start-div">
                    <p>Bienvenidos</p>
                    <h1>Sonríe para mí</h1>
                    <Link to="/productos"><button className="home-start-div-button">VER PRODUCTOS</button></Link>
                </div>
                <div className="home-shading"></div>
            </div>
            <div className="home-start-grid">
                <div className="grid-agendas">
                    <Link to="categoria/Agendas" className="grid-agendas-link">AGENDAS</Link>
                    <div className="grid-shading"></div>
                </div>
                

                <div className="grid-cuadernos">
                    <Link to="categoria/Cuadernos" className="grid-cuadernos-link">CUADERNOS</Link>
                    <div className="grid-shading"></div>
                </div>

                <div className="grid-recetarios">
                    <Link to="categoria/Recetarios" className="grid-recetarios-link">RECETARIOS</Link>
                    <div className="grid-shading"></div>
                </div>

                <div className="grid-viajes">
                    <Link to="categoria/Viajes" className="grid-viajes-link">VIAJES</Link>
                    <div className="grid-shading"></div>
                </div>
            </div>
        </section>
    )
}

export default Home
