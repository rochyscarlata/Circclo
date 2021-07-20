import React from 'react'
import Marquee from 'react-fast-marquee';
import Count from '../count up/Count';
import Prodcutoras from '../empresas/Productoras';
import Secdos from '../gallery/Secdos';
import Funcionamiento from '../how/Funcionamiento';
import Main from '../main/Main';

import './Home.css'

const Home = () => {
    return ( 
        <>
        <Main/>
        <br/>
        <Secdos/>
        <br/>
        <Marquee className="marque">
        <p className="text-marque"> Pay for the product not for the packaging <i class="fas fa-exclamation-circle"></i></p> <p className="text-marque">Pay for the product not for the packaging <i class="fas fa-exclamation-circle"></i></p>  <p className="text-marque">Pay for the product not for the packaging <i class="fas fa-exclamation-circle"></i> </p> <p className="text-marque">Pay for the product not for the packaging <i class="fas fa-exclamation-circle"></i> </p>
        </Marquee>
        <blockquote></blockquote>

        <Funcionamiento/>
        
                <br/>
        <blockquote></blockquote>

        <Count/>
        <br/>
        <blockquote></blockquote>
        <Prodcutoras/>

        </>
     );
}
 
export default Home;