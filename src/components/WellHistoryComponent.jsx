import React, { Component } from 'react';
import WellService from '../services/WellService';



class WellHistoryComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            well_history: []
        }

        this.wellHistory = this.wellHistory.bind(this); 
    }
    
    wellHistory(id){
        this.props.history.push(`/wellHistory/${id}`);
    }

    viewDetails(id){
        this.props.history.goBack();
    }


    componentDidMount(){
        WellService.getWellHistroy(this.state.id).then( res => {
            this.setState({well_history: res.data});
        });
    }

  
    render() {
        return (
            <div>
                <div className="container pt-5 pb-3 mt-5">
                    <div className="row">
                        <div className="form-group mb-1">
                            
                            <button className="btn btn-primary" style={{backgroundColor:"#99C0DB"}} onClick={ () => this.viewDetails(this.state.well_history.id)}> Back </button>

                            <h3 className="text-center fw-bold"> Well History </h3> 
 
                        </div>
                    </div> 
                </div>

                <table className="table table-striped table-bordered">
                    <thead className="table-head">
                        <tr>
                            <th>ID</th>
                            <th>Change Date</th>
                            <th>Admin</th>
                            <th>Well ID</th>
                            <th> UWID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                        this.state.well_history.map(
                            well_history => 
                            <tr key = {well_history.id}>
                                <td> {well_history.id}</td>
                                <td> {well_history.changeDate}</td>
                                <td> {well_history.admin}</td>
                                <td> {well_history.wellId} </td> 
                                <td> {well_history.uwid} </td> 
                                <td> {well_history.action} </td>    
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WellHistoryComponent;