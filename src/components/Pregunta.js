import { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes  from 'prop-types';

const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {

	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const definirPresupuesto = (e) =>{
		setCantidad(parseInt(e.target.value, 10)); // base 10
	}

	//Submit para definir el presupuesto
	const submitPresupuesto = (e) =>{
		e.preventDefault();

		// validar
		if(cantidad < 1 || isNaN(cantidad)){
			setError(true);
			return;
		}
		// si se pasa la validacion
		setError(false);
		setPresupuesto(cantidad);
		setRestante(cantidad);
		setMostrarPregunta(false);
	}
	return (
		<Fragment>
			<h2>Coloca tu presupuesto</h2>
			{ error? <Error
				mensaje='Presupuesto es incorrecto'
			/> :null}
			<form onSubmit={submitPresupuesto}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Coloca tu presupuesto"
					onChange={definirPresupuesto}
				/>
				<input
					type="submit"
					className="button-primary u-full-width"
					value="Definir Presupuesto"
				/>
			</form>

		</Fragment>
	);
}
Pregunta.protoTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired
}
export default Pregunta;