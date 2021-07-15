import React, {useState} from 'react'
import { IntlProvider } from 'react-intl';
import MensajesIngles from '../lang/en-US.json'
import MensajesEspañol from '../lang/es-AR.json'
const langContext = React.createContext();

const LangProvider = ({children}) => {
	let localePorDefecto;
	let mensajesPorDefecto;
	const lang = localStorage.getItem('lang');

	if(lang){
		localePorDefecto = lang

		if(lang === 'es-AR'){
			mensajesPorDefecto = MensajesEspañol;
		} else if(lang === 'en-US'){
			mensajesPorDefecto = MensajesIngles
		} else {
			localePorDefecto = 'es-AR'
			mensajesPorDefecto = MensajesEspañol
		}
	}

	const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
	const [locale, establecerLocale] = useState(localePorDefecto);

	const establecerLenguaje = (lenguaje) => {
		switch (lenguaje){
			case 'es-AR':
				establecerMensajes(MensajesEspañol);
				establecerLocale('es-AR');
				localStorage.setItem('lang', 'es-AR');
				break;
			case 'en-US':
				establecerMensajes(MensajesIngles);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
				break;
			default:
				establecerMensajes(MensajesEspañol);
				establecerLocale('es-AR');
				localStorage.setItem('lang', 'es-AR');
		}
	}

	return (
		<langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
 
export {LangProvider, langContext};