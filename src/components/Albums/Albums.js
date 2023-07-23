import React, { useState } from "react";
import Album from "./Album/Album";

const Albums = () => {
  const [albums, setAlbums] = useState([
    {
      id: "1",
      titulo: "Exit Planet Dust",
      año: "1995",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c69945a46b36762b0f4500b_eb286311364f330a69ff3997bd342379d16b2ab0-p-500.jpeg",
    },
    {
      id: "2",
      titulo: "Dig Your Own Hole",
      año: "1997",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c66a26cefa14e94cc8d4d6c_Dig%20Your%20Own%20Hole-p-500.jpeg",
    },
    {
      id: "3",
      titulo: "Surrender",
      año: "1999",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c66a231239db799a6eacad6_surrender-p-500.jpeg",
    },
    {
      id: "4",
      titulo: "Come With Us",
      año: "2002",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c66a1d9239db72e21eaca58_come%20with%20us-p-500.jpeg",
    },
    {
      id: "5",
      titulo: "Push The Button",
      año: "2005",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c66a1938238e3a0fa0d1c31_push%20the%20button-p-500.jpeg",
    },
    {
      id: "6",
      titulo: "We Are The Night",
      año: "2007",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c66a1338238e33cfa0d1b93_we%20are%20the%20night-p-500.jpeg",
    },
    {
      id: "7",
      titulo: "Further",
      año: "2010",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c669ff88238e323ad0d164c_further-p-500.jpeg",
    },
    {
      id: "8",
      titulo: "Born In The Echoes",
      año: "2015",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c545ae3a8cd6f6ae88d850a_born%20in%20the%20echoes.jpg",
    },
    {
      id: "9",
      titulo: "No Geography",
      año: "2019",
      img: "https://global-uploads.webflow.com/5c5083b6483ac43c0d6e4e18/5c66a98ab44ec541fa658413_no%20geography-p-500.jpeg",
    },
  ]);

  return (
    <div className="row">
      {albums.map((album) => {
        return (
          <Album
            key={album.id}
            titulo={album.titulo}
            img={album.img}
            año={album.año}
          />
        );
      })}
    </div>
  );
};

export default Albums;
