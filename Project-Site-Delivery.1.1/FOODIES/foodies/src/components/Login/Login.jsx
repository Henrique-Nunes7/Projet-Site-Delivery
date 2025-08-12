import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" login-container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Endereço de email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="" />
                <label htmlFor="floatingPassword">Senha</label>
              </div>

              
              <div className="d-grid">
                <button className="btn btn-outline-primary btn-login text-uppercase " type="submit"> Fazer login</button>
                <button className="btn btn-outline-danger btn-login text-uppercase mt-2" type="reset">Limpar</button>
              </div>
              
           <div className="mt-4">
  Não possui conta? <Link to="/register">Criar conta</Link>
</div>   
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login;
