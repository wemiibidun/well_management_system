import React, { Component } from 'react';
import WellService from '../services/WellService';




class WellListComponent extends Component  {
    constructor(props){
        super(props)

    this.state = {
        uwid: this.props.match.params.uwid,
        wells: [],

        search: ''

      }
} 

updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
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
        //let filteredWell = this.state.wells;
        let filteredWell = this.state.wells.filter(
            (well) => {
                //if you cannot find uwid then do nothing else return uwid within filtered well
                return well.uwid.indexOf(this.state.search) !== -1;
            }
        );
        //console.log(filteredWell);

        return (
            <div>

                <div className="container pt-5 mt-5">
                    <div className="row">
                        <div className="form-group mb-3">
                            <button style={{backgroundColor:"#99C0DB"}} className="btn fw-bold" onClick={ () => this.viewList(this.state.wells.id)}> Return to Homepage </button>

                            <input style={{marginLeft:"900px", fontStyle:"italic"}}  type="text" 
                            placeholder="Search well by uwid..." 
                            value = {this.state.search}
                            onChange ={this.updateSearch.bind(this)} />
                            
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
                        filteredWell.map(
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
