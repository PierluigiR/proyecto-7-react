import React from 'react';
import { useState } from "react";
import { Card, Row } from "react-bootstrap";

import Noticia from './Noticia/Noticia';
import news01 from "../../imagenes/chemical-news-01.png";
import news02 from "../../imagenes/chemical-news-02.png";

function tourdata (props)   {
  const { date, lugar } = props
  return  (
    (props.date) + (props.lugar)
  );

}


const News = () => {
 
    const [news, setNews] = useState([
    
      {
        id: "1",
        titular:
          "Paused in Cosmic Reflection: La historia definitiva de The Chemical Brothers",
        contenido:
          "Orgullosos de anunciar el lanzamiento de The Chemical Brothers: Paused In Cosmic Reflection \
                Paused in Cosmic Reflection, es la historia definitiva de The Chemical Brothers, escrita por Robin Turner \
                relatada en palabras de Tom Rowlands y Ed Simons con aportes de sus amigos y colaboradores. Completamente ilustrada recopilando material con 30 años de visuales impactantes.",
        fecha: "28 Junio 2023",
        img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/649b79c8d7b76e85ed5c4154_ANNOUNCEMENT%20CAROUSEL%20PANELS%201-p-800.png",
      },
      {
        id: "2",
        titular:
          "Live Again: Nueva canción, disponible en todas las plataformas de streaming.",
        contenido:
          "The Chemical Brothers han lanzado un nuevo sencillo llamado Live Again. 'Live Again' presenta vocales de Halo Maud, \
                sigue los pasos de su reciente sencillo 'No Reason' - y es tomado de su décimo álbum, álbum que se lanzará en el transcurso de este año.",
        fecha: "06 Junio 2023",
        img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/649afeafc2b1cf18a2b48860_CB_FTBF_SINGLE_PACKSHOT_LIVE_AGAIN-p-800.jpg",
      },
      {
        id: "3",
        titular: "Come With Us: Edición Vinilo Amarillo 12 pulgadas",
        contenido:
          "El nuevo LP de 2 vinilos amarillos presenta la reedición de su álbum de 2002 “Come With Us”, Come With Us está a la venta ahora. \
                Este álbum clásico se encuentra disponible nuevamente en vinilo.",
        fecha: "06 Junio 2023",
        img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/648893d09bb43b4af618fd7b_The%20Chemical%20Brothers%20-%20Come%20With%20Us%20product%20shot-p-800.png",
      },
      {
        id: "4",
        titular: "Anuncio de fechas de presentaciones en vivo",
        contenido:
          "The Chemical Brothers han anunciado una serie de fechas de presentaciones en vivo, a realizarse en el próximo otoño. \
                            El grupo llevara su alucinante y mundialmente conocido espectáculo a los siguientes lugares:",
        tour: 
         {
            id: "01",
            date: "27 Octubre",
            lugar: "OVO Hydro Glasgow",
          },
          

        fecha: "23 Marzo 2023",
        img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/64207762cce206f03978d425_Chemicals_1920x1080.jpeg",
      },
      {
        id: "5",
        titular: "No Reason: Disponible ahora",
        contenido:
          "No Reason, es el nuevo sencillo y video The Chemical Brothers, disponible ya en todas partes. \
                Un muy especial sencillo de 12” en edición limitada y con vinilo, también disponible en pre-venta. \
                El sencillo además incluye una nueva canción llamada All Of A Sudden.",
        fecha: "13 Marzo 2023",
        img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/6410f5fe27456fe336cc3832_image003-p-800.png",
      },
    ]);
  
        
            return (
                <div  className="row">
            
                    {news.map((noticia) => {
                       
                        return (
                            
                            <Noticia
                            key={noticia.id}
                            titular={noticia.titular}
                            contenido={noticia.contenido}
                            img={noticia.img}
                            fecha={noticia.fecha}
                            date={tourdata.date}
                            lugar={tourdata.lugar}
                            />
                        
                        );
                    })}
        
      
                </div >          
            );
}

export default News;
