import React from 'react'
import './Footer.css'
import LogoBlanco from '../../assets/logos/logonegro.png'
function Footer() {
    return (
        <>
         <div class="footer">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm item">
                    <img src={LogoBlanco} alt="logo" width="230" height="40" className="logo-footer"/>
                    </div>
                    <div class="col-sm item">
                        
                        <ul>
                            <li> <i class="fas fa-map-marker-alt"></i> Yerba Buena, Tucuman.</li>
                            <li><i class="fas fa-phone-alt"></i> +54 9 3814620450</li>
                            <li> <i class="far fa-envelope"></i> circclo.arg@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col-sm item text">
                        <a className="iconos" href="https://api.whatsapp.com/send?phone=543814620450&text=Hola!%20Quiero%20mas%20info%20sobre%20CIRCCLO" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        <a className="iconos"  href="https://www.instagram.com/circclo/" target="_blank"><i class="fab fa-instagram"></i></a>
                        {/* <a className="iconos" href="https://twitter.com/Circclo_arg" target="_blank"><i class="fab fa-twitter"  ></i></a> */}
                        <a className="iconos"><i class="fab fa-facebook"  href="https://www.facebook.com/Circclo-106836967625926" target="_blank"></i></a>

                        <a className="iconos" href="https://www.linkedin.com/company/circclo/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        {/*  */}
                        {/*  */}
                    </div>
                </div>
            </div>
        </footer>
    </div>
       </>
    )
}

export default Footer
