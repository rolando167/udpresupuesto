import { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({setPresupuesto, setRestante}) => {

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

export default Pregunta;