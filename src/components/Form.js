import React, {useState} from 'react'
import PropTypes from 'prop-types'
const Form = ({search,updateSearch,saveConsult}) => {

    // error state
    const [error, updateError] = useState(false);
    // update form state
    const handleChange = e =>{
        updateSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }
    // get city and country values
    const {city, units} = search;

    // submiting form
    const handleSubmit = e =>{
        e.preventDefault();
        // validate form
        if(city.trim() === '' || units.trim()===''){
            updateError(true);
            return;
        }
        updateError(false);
        saveConsult(true);
    }

    return ( 
        <form 
        onSubmit={handleSubmit}
        >
            {error?<p className="red darken-4 error">All fields are necessary</p>:null}
            <div className="input-field col s12">
                <input 
                type="text" 
                name="city"
                id="city"
                value={city}
                onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select 
                name="units" 
                id="units"
                value={units}
                onChange={handleChange}
                >
                    <option value="">Select units</option>
                    <option value="metric">Metric</option>
                    <option value="standard">Standard</option>
                    <option value="imperial">Imperial</option>
                </select>
                <label htmlFor="units">Units: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                    id="submit-button"
                >Search</button>
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    updateSearch: PropTypes.func.isRequired,
    saveConsult: PropTypes.func.isRequired
}
export default Form;