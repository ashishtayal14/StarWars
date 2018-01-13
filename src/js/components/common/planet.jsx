import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Planet = (props) => {

    const {
        rotation_period,
        name,
        population,
        orbital_period,
        diameter
} = props.planet
    return (

        <div className="col-md-10 planet" >
            <div>
                <h3><strong>{name}</strong></h3>
            </div>
            <span className="shadow"></span>
        </div>


    )
}
Planet.propTypes = {
    planet: PropTypes.object.isRequired,
};
export default Planet
