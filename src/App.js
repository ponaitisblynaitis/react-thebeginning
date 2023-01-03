import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div class="container">
        <div class="text-center">
          <h1>Programavimo kursai</h1>
        </div>
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="card text-bg-warning text-center rounded-0">
              <div class="card-header fw-bold">React kursai</div>
              <div class="card-body">nuo 9.99 EUR / mėn.</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-bg-success text-center rounded-0">
              <div class="card-header fw-bold">Angular.JS kursai</div>
              <div class="card-body">nuo 29.99 EUR / mėn.</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-bg-danger text-center rounded-0">
              <div class="card-header fw-bold">PHP kursai</div>
              <div class="card-body">nuo 49.99 EUR / mėn.</div>
            </div>
          </div>
        </div>

      <div class="container bg-light">
        <div class="text-start mt-5">
            <h2>Mūsų dėstytojai</h2>
          </div>
            <hr></hr>
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card rounded-0">
                  {/* <span class="border border-5 rounded-circle">photo</span> */}
                  <div class="card-body g-col-6">
                    <h5 class="card-title">Varden Pavard</h5>
                    <p class="card-text">UI/UX Designer</p>
                    <p class="card-text">795 Folsom Ave, Suite 600 San Francisco, CADGE 9410</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card rounded-0">
                  
                  

                  <div class="card-body">
                    <h5 class="card-title">Varden Pavard</h5>
                    <p class="card-text">UI/UX Designer</p>
                    <p class="card-text">795 Folsom Ave, Suite 600 San Francisco, CADGE 9410</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card rounded-0">
                  
                  <div class="card-body">
                    <h5 class="card-title">Varden Pavard</h5>
                    <p class="card-text">UI/UX Designer</p>
                    <p class="card-text">795 Folsom Ave, Suite 600 San Francisco, CADGE 9410</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card rounded-0">
                  
                  <div class="card-body">
                    <h5 class="card-title">Varden Pavard</h5>
                    <p class="card-text">UI/UX Designer</p>
                    <p class="card-text">795 Folsom Ave, Suite 600 San Francisco, CADGE 9410</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
