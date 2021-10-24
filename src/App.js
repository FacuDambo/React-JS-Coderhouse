import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardContainer />
    </div>
  );
}

export default App;
