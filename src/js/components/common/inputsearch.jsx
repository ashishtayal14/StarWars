import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Throttle } from 'react-throttle';

class InputSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='form-inline'>
            <div className='form-group'>
                <input type='text' placeholder="Search" className='form-control margin-left' value={ this.props.searchKey } disabled = { this.props.totalHits > 14  && this.props.isGuestUser } onChange={ (e) => this.props.setSearchKey(e.target.value) }/> 
                <input type='text' placeholder="Filter By Name" className='form-control margin-left' value={ this.props.filterKey } disabled = { this.props.totalHits > 14  && this.props.isGuestUser } onChange={ (e) => { this.props.filterPlanetSearch(e.target.value); }}/>
                {this.props.totalHits > 14  && this.props.isGuestUser && <label className="error">Search limit exceded. Please wait for a minute</label>}
            </div>
            </div>
        );
    }
    componentDidMount(){        
        if(this.props.isGuestUser){
            this.clearSearchHitsTimer = setTimeout(()=>{
                this.props.clearSearchHits();
            },60000);
        }
    }
    componentWillUnmount(){
        if(this.clearSearchHitsTimer)
            clearTimeout(this.clearSearchHitsTimer);
    }
}

InputSearch.propTypes = {
    setSearchKey: PropTypes.func.isRequired,
    clearSearchKey: PropTypes.func.isRequired,
    searchKey: PropTypes.string,
   };

export default InputSearch;
