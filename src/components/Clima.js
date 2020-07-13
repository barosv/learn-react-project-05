import React from 'react';
import PropTypes from 'prop-types'

const Clima = ({ resultado }) => {

const { name, main } = resultado;

    if (!name) return null;

    const kelvin = 273.15;
    const tempCurrent = parseFloat(main.temp - kelvin, 10).toFixed(2);
    const tempMax = parseFloat(main.temp_max - kelvin, 10).toFixed(2);
    const tempMin = parseFloat(main.temp_min - kelvin, 10).toFixed(2);

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { tempCurrent } <span>&#x2103;</span>
                </p>
                <p>Temperatura Máxima: 
                    { tempMax } <span>&#x2103;</span>
                </p>
                <p>Temperatura Mínima: 
                    { tempMin } <span>&#x2103;</span>
                </p>
            </div>
            
        </div>
    );
};
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;