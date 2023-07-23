import React from 'react';
import { Card } from 'react-bootstrap';
import "../Noticia/Noticia.css";
import news01 from "../../../imagenes/chemical-news-01.png";
import news02 from "../../../imagenes/chemical-news-02.png";



const Noticia = (props) => {
  
  return (
    <div>
      <Card>
                <div class="row g-0">
                    <div class=" col-md-4  ">
                        <img src={props.img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        
                        <div className="card-body">
                        <p className="card-text"><small className="text-muted">{props.fecha}</small></p>
                        <h5 className="card-title">{props.titular}</h5>
                        <p className="card-text">{props.contenido}</p>
                        <p className="card-text">{props.tourdata}</p>
                        <div className='media-icons'>
                          <i className="bi bi-spotify"></i>
                        </div>
                        
                        
                        </div>
                    </div>
                </div>
            </Card>
    </div>
  )
}

export default Noticia
