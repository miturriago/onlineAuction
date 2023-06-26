import { v4 as uuidv4 } from "uuid";
import Card from "../Card";

const homeItems = [

  {
    key: uuidv4(),
    content: (
      <Card
        title="Sala Toulouse en Tela Gris y Mesa de Centro "
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
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Librero negro"
        description="Librero de color negro hecho en madera con 5 niveles, perfecto para organizar libros, accesorios y adornos. medidas:  120x35x20"
        min={80000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686777084/subasta/WhatsApp_Image_2023-06-14_at_4.10.22_PM_zlh9qr.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Silla de Escritorio"
        description="Silla de escritorio gerente con sistema neumático, diseño moderno, sistema giratorio y sube y baja que permite acomodarse a la altura que desees, brazos ajustables. Material durable para soportar el peso y el uso continuo"
        min={300000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686700813/subasta/IMG_0780_x3tchr.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Escritorio Vidrio Negro"
        description="Elegante escritorio de vidrio negro con medias 110x60x74"
        min={150000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686701237/subasta/294276_02_jycbjg.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Espejo Marco Negro"
        description="Espejo vestidor ideal para espacios interiores, que  permite otorgar la sensación de amplitud en espacios reducidos"
        min={15000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686702368/subasta/IMG_0782_pcydri.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Onepiece, figuras/posters"
        description="Figura de Luffy, Zoro, Sanji, Nami, Robin y posters varios"
        min={200000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686712279/subasta/WhatsApp_Image_2023-06-13_at_10.10.19_PM_xakric.jpg" />
    )
  }
]


export default homeItems;