import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Throttle } from 'react-throttle';

const InputSearch = (props) => {        
        return <div className='form-inline'>
                <div className='form-group'>
                    <input type='text' placeholder="Search" className='form-control margin-left' value={ props.searchKey } disabled = { props.totalHits > 14  && props.isGuestUser } onChange={ (e) => props.setSearchKey(e.target.value) }/> 
                    <input type='text' placeholder="Filter By Name" className='form-control margin-left' value={ props.filterKey } disabled = { props.totalHits > 14  && props.isGuestUser } onChange={ (e) => { props.filterPlanetSearch(e.target.value); }}/>
                </div>
         </div>
}

InputSearch.propTypes = {
   setSearchKey: PropTypes.func.isRequired,
   clearSearchKey: PropTypes.func.isRequired,
   searchKey: PropTypes.string,
  }
export default InputSearch
