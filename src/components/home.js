import { useState } from "react";
import Album from "./Albums/Album/Album";
import Albums from "./Albums/Albums";
import "../components/home.css";
import Show from "./Show/Show";

const Home = () => {
  const [shows, setShows] = useState([
    {
      id: "1",
      fecha: "12 de Agosto 2023",
      evento: "The Chemical Brothers en Vivo en el Festival FEST 2023",
      lugar: "Estadio de Silesia, Chorzów Polonia",
    },
    {
      id: "2",
      fecha: "18 de Agosto 2023",
      evento: "The Chemical Brothers en Vivo en Cabaret Vert",
      lugar: "Cabaret Vert, Charleville-Mézières Francia",
    },
    {
      id: "3",
      fecha: "26 de Agosto 2023",
      evento: "The Chemical Brothers en Vivo en Rock en Seine",
      lugar: "Rock en Seine, Paris Francia",
    },
    {
      id: "4",
      fecha: "31 de Agosto 2023",
      evento: "The Chemical Brothers en Vivo en Breeze Festival",
      lugar: "Breeze Festival, Sofia Bulgaria",
    },
    {
      id: "5",
      fecha: "2 de Septiembre 2023",
      evento: "The Chemical Brothers en Vivo en el Parque Bussoladomani",
      lugar: "Parque Bussoladomani, Camaiore Italia",
    },
    {
      id: "6",
      fecha: "9 de Septiembre de 2023",
      evento: "The Chemical Brothers en Vivo en Alexandra Head",
      lugar: "Cardiff Bay, Gales",
    },
    {
      id: "7",
      fecha: "26 de Octubre de 2023",
      evento: "The Chemical Brothers en Vivo en OVO Hydro",
      lugar: "Ovo Hydro, Glasgow Escocia",
    },
    {
      id: "8",
      fecha: "27 de Octubre de 2023",
      evento: "The Chemical Brothers en Vivo en AO Arena",
      lugar: "AO Arena, Manchester Inglaterra",
    },
    {
      id: "9",
      fecha: "28 de Octubre 2023",
      evento: "The Chemical Brothers en Vivo en First Direct Arena",
      lugar: "First Direct Arena, Leeds Inglaterra",
    },
    {
      id: "10",
      fecha: "1 de Noviembre 2023",
      evento: "The Chemical Brothers en Vivo en 3Arena",
      lugar: "3Arena, Dublin Irlanda",
    },
  ]);

  return (
    <div class="container">
      <div className="row">
        <div className="col-sm-5">
          <img
            src="https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/64b6ed242668fdd73b70857a_CB_FTBF_PACKSHOTS_1-p-800.jpeg"
            id="imagehero"
            alt="For That Beatiful Feeling"
          />
        </div>
        <div class="col-sm-7">
          <h3 id="titulo-hero">
            Nuevo Album <b>"For That Beatiful Feeling"</b>, lanzamiento 8 de
            Septiembre de 2023
          </h3>
          <p className="hero-text">
            <br />
            <b>For That Beautiful Feeling </b>incluye los sencillos
            anteriormente lanzados <b>No Reason</b> y{" "}
            <b>The Darkness That You Fear</b> -aquí presentado por medio de una
            nueva mezcla 'Harvest Mix'- y el recién liberado <b>Live Again</b>,
            el cual tiene vocales de la artista Halo Maud, del sello “Heavenly
            Recordings".
            <br />
            El álbum también presenta el retorno colaborativo de <b>
              Beck
            </b>{" "}
            -quien trabajo con The Chemical Brothers en el sencillo de 2015 Wide Open - y en
            la propulsora y ensoñadora <b>Skipping Like A Stone.</b>
          </p>
        </div>
          <h2 className="titulo-shows">Shows en Vivo</h2>
        </div>
        <div className='tarjetas' >
        {shows.map((show) => {
          
          return (
            <Show
              key={show.id}
              fecha={show.fecha}
              evento={show.evento}
              lugar={show.lugar}
            />
          );
          
        })}
        </div>
      </div>
    

  );
  
};

export default Home;
