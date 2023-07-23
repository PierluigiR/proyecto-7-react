import React, { useState} from 'react';
import logo from "../imagenes/chemical-logo-02.png";
import registro from "../imagenes/chemical-register.jpg";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="container w-75 bg-orange mt-5 rounded shadow ">
      <div className="row align-items-stretch ">
        <div
          className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
          id="bg"
          style={{ backgroundPosition: "center center" }}
        >
          <img src={registro} alt="chemlogin" />
        </div>
        <div className="col bg-white p-5 rounded-end">
          <div className="text-end">
            <img src={logo} alt="logo" width="125px" />
          </div>
          <h2
            className="fw-bold text-center py-5"
            style={{ fontFamily: "Oswald, sans-serif", color: "#E84E0F" }}
          >
            Registro
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4" >
                <label htmlFor="name" className="form-label">
                    Nombre
                </label>
                <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    type='name'
                    id="name"
                    className="form-control"
                    placeholder="Escribe tu nombre"
                />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label" >
                Correo Electrónico
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder="Ingresa tu email"
                className="form-control"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="*********"
                className="form-control"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="mb-4 form-check">
              <input
                type="checkbox"
                name="connected"
                className="form-check-input"
                id="connected"
              />
              <label htmlFor="connected" className="form-check-label">
                Mantenerme conectado
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Registarse
              </button>
            </div>
          </form>
          <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes cuenta, accede</button>
        </div>
      </div>
    </div>
  );
}
 

export default Register
