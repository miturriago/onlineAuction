import { v4 as uuidv4 } from "uuid";
import Card from "../Card";

const clothesItems = [

  {
    key: uuidv4(),
    content: (
      <Card
        title="Patines en linea"
        description="La Sala Toulouse está fabricada en una fuerte estructura de madera pino, relleno en espuma de alta densidad, tiene patas en madera pino.
      Dimensiones:Sofá: 140 cm ancho x 92 cm profundo x 80 cm alto x 38 cm altura del asiento.
      Poltrona: 62 cm ancho x 92 cm profundo x 80 cm alto x 38 cm altura del asiento.
      Mesa de centro: 60 cm ancho x 60 cm profundo x 33 cm alto."
        min={900000}
        imagen="https://res.cloudinary.com/lou/image/upload/q_36/v1686696322/subasta/WhatsApp_Image_2023-06-13_at_5.37.48_PM_afmdre.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Mesa de TV y Centro de Entretenimiento"
        description="Mesa para TV Bengala 56x143x38.6, diseñada para optimizar espacio en sala y star con diseño minimalista y práctico, permite soportar dispositivos electrónicos y almacenar otros accesorios.  color Rovere"
        min={250000}
        imagen="https://res.cloudinary.com/lou/image/upload/q_36/v1686697610/subasta/IMG_0764_r7mscp.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Zapatero Perchero Multifuncional"
        description="Perfecto para organizar, colgar y ordenar zapatos, ropa y accesorios en este bonito y practico perchero zapatero de 4 niveles."
        min={40000}
        imagen="https://res.cloudinary.com/lou/image/upload/q_36/v1686698259/subasta/IMG_0766_awfqef.png" />
    )
  }
]



export default clothesItems;