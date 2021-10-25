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

viewList(id){
    this.props.history.push('/');
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
                            <button style={{backgroundColor:"#99C0DB"}} className="btn fw-bold" onClick={ () => this.viewList(this.state.wells.id)}> Return to Homepage </button>
                            
                            <h3 className="text-center fw-bold" style={{color:"#99C0DB"}}>List of All Wells</h3>
                        </div>
                    </div> 
                </div> 
                
                <div>
                <table className="table table-hover borderless" style={{color:"#222831", paddingBottom:"50px"}}>
                    <thead className="table-head">
                        <tr>
                            <th width='30%'>Unique Identifier</th>
                            <th width='30%'>Well Name</th>
                            <th width='10%'>Action</th>
                        </tr>
                    </thead>


                    <tbody className="table-sm">
                        {
                        this.state.wells.map(
                            well => 
                            <tr key = {well.id}>
                                <td> {well.uwid}</td>
                                <td> {well.wellName} </td>
                                
                                <td>
                                    <button style={{marginLeft: "10px",backgroundColor:"#99C0DB"}} onClick={ () => this.viewDetails(well.id)} className="btn btn-outline-dark fw-bold">View Well Details </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>

        );
    }
}

export default WellListComponent;
