import React, {useState} from "react";

import { Login } from "./Login";
import { Register } from "./Register";

const Validar = () => {
    const [currentForm, setCurrentForm] = useState("login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
      }

  return (
    <div className="Validar">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  )
}

export default Validar
