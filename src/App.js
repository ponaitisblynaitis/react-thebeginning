import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/product';
import productsData from './data/productsData';
import Teacher from './components/teacher';
import teachersData from './data/teachersData';
import teachersData from './data/teachersData';


function App() {
  const prekes = productsData;
  const mokytojai = teachersData;

  let produktai = [];

  for(let i = 0; i < prekes.lenght; i++) {
    produktai.push(<Product produktai = {prekes[i]}></Product>);
  }

  let mokyti = [];

  for(let i = 0; i < mokytojai.lenght; i++) {
    mokyti.push(<Teacher mokyti = {mokytojai[i]}></Teacher>);
  }

  return (
    <div class="container">
        <div class="text-center">
          <h1>Programavimo kursai</h1>
        </div>
        <div class="row mt-5">
          {produktai}
        </div>

      <div class="container bg-light">
        <div class="text-start mt-5">
            <h2>Mūsų dėstytojai</h2>
          </div>
            <hr></hr>
            <div class="row row-cols-1 row-cols-md-2 g-4">
              {mokyti}
            </div>
      </div>
    </div>
  );
}

export default App;
