import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
    <div className="App-Body" style={{ background: "rgba(118,184,82,1)"}}>
      <div class="container">
        <div class="row justify-content-center align-items-center" style={{height:"100vh"}}>
          <div class="col-md-5">
            <div class="form-box" style={{background:"#fff", boxShadow: "0 0 20px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.24)"}}>
              <div class="form-title">
                <h2 class="fw-bold mb-3"> Give Me Your Deets</h2>
              </div>
              <form action="">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    placeholder="Your Email Here!!!"
                    id="floatingInput"
                  ></input>
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Password"
                    id="floatingInput"
                  ></input>
                  <label for="floatingInput">Password</label>
                </div>
                <div class="mt-3">
                  <button class="btn" style={{background: "rgba(118,184,82,1)"}}>Submit To Me!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
