import { Fragment , useState} from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes  from 'prop-types';

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

    const agregarGasto = (e) =>{
        e.preventDefault();

        // validar
        if(nombre.trim().length === 0 || cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }
        setError(false);

        //Contruir el gasto
        const gasto = {
            nombre
            , cantidad
            , id : shortid.generate()
        }
        // pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);
        //resetear el form
        setNombre('');
        setCantidad(0);
    }

    return (
        <Fragment>
            {error?<Error mensaje="Error en los datos ingresados" />:null}
            <h2>Agrega tus gastos Aqui</h2>
            <form onSubmit={agregarGasto}>
                <label htmlFor="">Nombe gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="">Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
                />

                <input type="submit" className="button-primary u-full-width"
                value="Agregar Gasto" />
            </form>
        </Fragment>
     );
}

Formulario.protoTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}
export default Formulario;