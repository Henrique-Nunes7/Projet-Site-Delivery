import React from 'react';
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (  
    <div className=" register-container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Cadastro</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Roberto Firmino" />
                <label htmlFor="floatingName">Nome Completo</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Roberto Firmino" />
                <label htmlFor="floatingName">Endereço de Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              

              
              <div className="d-grid">
                <button className="btn btn-outline-primary btn-login text-uppercase " type="submit"> Cadastrar-se</button>
                <button className="btn btn-outline-danger btn-login text-uppercase mt-2" type="reset">Limpar</button>
              </div>
              
           <div className="mt-4">
  Já possui uma conta? <Link to="/login">Fazer login</Link>
</div>   
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register;
