import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx';
import {CartContextProvider} from './context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart.jsx';
import Home from './components/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              
              <Route exact path="/productos">
                <ItemListContainer />
              </Route>

              <Route exact path="/sobre-nosotros">
                Futura seccion con info sobre el emprendimiento
              </Route>

              <Route exact path="/producto/:productId">
                <ItemDetailContainer />
              </Route>

              <Route path="/categoria/:id">
                <ItemListContainer />
              </Route>

              <Route exact path="/carrito">
                <Cart />
              </Route>
            </Switch>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
