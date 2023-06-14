import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


function Card({ imagen, title, description, min }) {
  const [show, setShown] = useState(false);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [offer, setOffer] = useState(min);
  const [isLoading, setIsLoading] = useState(false)


  const [isOpen, setIsOpen] = useState(false);
  const url = "https://z37pwy2zee.execute-api.us-east-1.amazonaws.com/prod/sendEmail"

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const sendOffer = async () => {

    if (fullName && email && number && offer) {

      setIsLoading(true)

      const emailData = {
        email: email,
        body: JSON.stringify( {
          producto: title,
          nombre_usuario: fullName,
          correo_usuario: email,
          numero_whatsapp: number,
          oferta: offer
        })
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });


        if (response.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Puja Enviada!',
            confirmButtonColor: '#ef7b98',
            confirmButtonText: 'Ok'
          })

          setFullName("");
          setEmail("");
          setNumber("");
          setOffer(min)

          setIsLoading(false)
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal, intenta de nuevo',
            confirmButtonColor: '#ef7b98',
            confirmButtonText: 'Ok'
          })
          setIsLoading(false)

        }


      } catch (error) {
        setIsLoading(false)
      }

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Completa todos los datos',
        confirmButtonColor: '#ef7b98',
        confirmButtonText: 'Ok'
      })
      setIsLoading(false)

    }
  }


  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {
        !isOpen ?

          <div>
            <img src={imagen} alt="" />
            <h2>{title}</h2>
            <p>
              {description}
            </p>

            <small> min $ {min.toLocaleString()}</small>
            <div className={Styles.btnn}>
              <button onClick={() => { openDialog() }} className={Styles.btn}>Ofrecer</button>
            </div>

          </div>
          :
          <div className={Styles.formContainer} >

            <h2 className={Styles.formTitle}>Enviar oferta</h2>
            <div className={Styles.divider}></div>
            <div >
              <input className={Styles.textInput} required type="text" placeholder="Nombre completo" name="fname" value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
              <input className={Styles.textInput} required type="text" placeholder="Correo electrónico" name="fname" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <input className={Styles.textInput} required type="number" placeholder="Número Whatsapp" name="fname" value={number} onChange={(e) => { setNumber(e.target.value) }} />
              <input className={Styles.textInput} required type="number" step="0.01" min="200"   placeholder="Oferta" name="fname" value={offer} onChange={(e) => { setOffer(e.target.value) }} />

              <br></br>

              <div className={Styles.btnn2}>
                <button  disabled={isLoading} onClick={() => { closeDialog() }} className={Styles.btn}>Cancelar</button>
                <button disabled={isLoading} onClick={() => sendOffer()} className={Styles.btn}>  {isLoading ? <div className={Styles.loader}></div>  : 'Ofrecer' }</button>
              </div>
            </div>
          </div>

      }


    </animated.div>
  );
}

export default Card;
