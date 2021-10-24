import React, { Component } from 'react';
import WellService from '../services/WellService';




class WellListComponent extends Component  {
    constructor(props){
        super(props)

    this.state = {
        uwid: this.props.match.params.uwid,
        wells: []

      }
} 


viewDetails(id){
    this.props.history.push(`/wellDetails/${id}`);
}

componentDidMount(){
    WellService.getWellList().then( res => {
        this.setState({wells: res.data});
    });
        
}

    render() {
        return (
            <div>

                <div className="container pt-5 mt-5">
                    <div className="row">
                        <div className="form-group mb-3">
                            <h3 className="text-center fw-bold">List of All Wells</h3>
                        </div>
                    </div> 
                </div> 
                

                <table className="table table-striped table-bordered">
                    <thead className="table-head">
                        <tr>
                            <th width='30%'>Unique Identifier</th>
                            <th width='40%'>Well Name</th>
                            <th width='20%'>Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                        this.state.wells.map(
                            well => 
                            <tr key = {well.id}>
                                <td> {well.uwid}</td>
                                <td> {well.wellName} </td>
                                
                                <td>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewDetails(well.id)} className="btn btn-primary">View Well Details </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default WellListComponent;
