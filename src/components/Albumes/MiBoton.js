import React from 'react';
import ExitPlanetDust from '../ExitPlanetDust';

function Click() {
  alert("Haz hecho click en un boton");
}

const MiBoton = () => {
  return (
    <div>
      <a href={ExitPlanetDust}>Ir</a>
    </div>
  )
}

export default MiBoton;

