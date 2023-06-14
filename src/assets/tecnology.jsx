import { v4 as uuidv4 } from "uuid";
import Card from "../Card";

const tecnologyItems = [

  {
    key: uuidv4(),
    content: (
      <Card
        title="TV Kalley 50'"
        description="* Sistema Android TV: última versión 11, el más completo.
        * Google Play: Entretenimiento sin fin, con miles de Apps.
        * Control remoto con comandos de voz (Google Assistant).
        * Colores increíbles con la tecnología QLED y Dolby Vision"
        min={1000000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686706535/subasta/IMG_0793_w4zdah.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Nevera Mabe"
        description="Referencia : RMP425FYCU , 
        Dispensador de Agua, 
        Número de Puertas : 2,
        Capacidad de almacenamiento: 412 Lts,
        Peso: 64 kg,
        Consumo (wtts): 31.5 kWh/mes,
        Alto: 184 cm,
        Ancho: 67.9 cm"
        min={1400000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686707090/subasta/IMG_0798_pqi7ap.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Licuadora Oster"
        description="Perilla de 2 velocidades y 1 pulso, 
        Vaso de vidrio refractario 1.5 lt, 
        Cuchilla pica hielo acero inoxidable quirúrgico"
        min={180000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686708219/subasta/WhatsApp_Image_2023-06-13_at_9.00.50_PM_t6vggb.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Waflera Doble Black and Decker"
        description="Material de las placas de cocción: teflón, antiadherente;
        Diseño del waffle: clásico;
        Función giratoria."
        min={200000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686708219/subasta/WhatsApp_Image_2023-06-13_at_9.02.40_PM_yziqb7.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Mini Cafetera miniso"
        description="Sencilla minicafetera individual de color gris"
        min={20000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686708219/subasta/WhatsApp_Image_2023-06-13_at_9.00.51_PM_pqucvz.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Google Home"
        description="Con reconocimiento de voz.
        * Función de control inteligente de dispositivos del hogar.
        * Opción de sistema de audio multi-room.
        * Conexión wifi y bluetooth.
        * Puede conectarse a Chromecast.
        * Recibe y realiza llamadas.
        * Funciona en español y en inglés."
        min={120000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686709952/subasta/840_560_gwtplc.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Play Station 4"
        description="Sony PlayStation 4 Slim 500GB Standard color negro azabache
        * Incluye 2 controles.
        * Base cargadora de control.
        * Memoria RAM de 8GB. 
        * 2 juegos físicos, GhostRecon y GodOfWar y varios juegos digitales como Fifa 23."
        min={800000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686706535/subasta/IMG_0785_s6frlt.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Nintendo switch + 4 juegos"
        description="* Pantalla OLED de 7 pulgadas
        * Puerto LAN con cable
        * Almacenamiento interno de 64 GB
        * Audio mejorado
        * Juego en fisico de Super Mario party, Super Smash Bros, Crash Team Racing, Super Mario Deluxe"
        min={2000000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686706535/subasta/IMG_0789_dgwk1q.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Monitor 24' ACER"
        description="Acer Nitro Qg241y Pbmiipx Monitor De Juegos Va Full Hd
        Monitor de juegos VA de pantalla ancha Full HD (1920 x 1080) de 23,8' | Tecnología AMD FreeSync Premium | Diseño de fotograma cero  | HDR10 Soporte | Frecuencia de actualización: hasta 165 Hz "
        min={450000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686709259/subasta/WhatsApp_Image_2023-06-13_at_9.19.03_PM_zu5aur.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Monitor 27' HP"
        description="Monitor HP M27fw, 
        Tipo de panel: IPS, 
        Formato: 16:9, 
        Colores: (8 bits) 16,7 M de colores, 
        Resolución Full HD: 1920 x 1080 (FHD),  
        Modo Low Blue Light; Antirreflejante,   
        AMD FreeSync™."
        min={800000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686709656/subasta/WhatsApp_Image_2023-06-13_at_9.26.18_PM_vxqgiq.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Teclado inalambrico inglés"
        description="Espejo vestidor ideal para espacios interiores, que  permite otorgar la sensación de amplitud en espacios reducidos"
        min={30000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686710181/subasta/WhatsApp_Image_2023-06-13_at_9.28.36_PM_jkniwr.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Tablet Samsung Galaxy Tab A8"
        description="Sistema operativo: Android.
        Con procesador Octa-Core de 2GHz.
        Resolución de pantalla de 1920px x 1200px.
        Con lector micro-SD.
        Reproducciones en Full HD.  128GB almacenamiento"
        min={500000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686777172/subasta/WhatsApp_Image_2023-06-14_at_3.55.54_PM_lpze9y.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card
        title="Piano Digital Teclado Palmer"
        description=" salida de audífonos, 
        salida estéreo, 
        pantalla de cristal líquido, 
        con adaptador, 
        100 ritmos, 
        100 voces o timbres, 
        8 percusiones, 
        54 teclas, 
        10 canciones de demostración,
        Incluye microfóno"
        min={400000}
        imagen="https://res.cloudinary.com/lou/image/upload/v1686710182/subasta/WhatsApp_Image_2023-06-13_at_9.30.20_PM_divyjz.jpg" />
    )
  }
]



export default tecnologyItems;