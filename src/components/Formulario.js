import React, { useState } from 'react';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        ciudad: '',
        pais: ''
    });

    const [ error, guardarError ] = useState(false);

    const { ciudad, pais } = busqueda;

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    value=""
                    onChange={handleChange}
                >
                    <option>-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>
        </form>
    );
};

export default Formulario;