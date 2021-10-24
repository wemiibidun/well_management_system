import React, { Component } from 'react';
import WellService from '../services/WellService';



class WellDetailsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            well: [],
            well_history: []
        }

        this.deleteWell = this.deleteWell.bind(this);
        this.updateWell = this.updateWell.bind(this);
    }
    
    viewDetails(id){
        this.props.history.push(`/wellDetails/${id}`);
    }

    deleteWell(id){
            WellService.deleteWell(id).then(res =>{
                alert("Well is now successfully deleted");
                this.props.history.push('/wellList');
                
            });
        }

    updateWell(id){
        this.props.history.push(`/updateWell/${id}`); //syntax to call the update well page
         
    }

    wellHistory(id){
        this.props.history.push(`/wellHistory/${id}`);
         
    }

    viewList(id){
        this.props.history.goBack();
    }

    componentDidMount(){
        WellService.getWellById(this.state.id).then( res => {
            this.setState({well: res.data});
        });
        
    }

  

    render() {
        console.log(this.state.well_history);
        return (
            <div>
                <div className="container pt-5 mt-5">
                    <div className="row">
                        <div className="form-group mb-3">
                            <button style={{backgroundColor:"#99C0DB"}} className="btn fw-bold" onClick={ () => this.viewList(this.state.well_history.id)}> Back </button>

                            <h3 className="text-center fw-bold" style={{color:"#99C0DB"}}>Well Description</h3> 
                        </div>
                    </div> 
                </div> 


    
                <div className="container" style={{ width: "65rem" }}>
                    <div className="row">
                        <div>
                            <div className="list-group d-flex flex-row flex-wrap">
                            
                                <li className="list-group-item well-details fw-bold">Unique Identifier </li>
                                <li className="list-group-item border well-details">{ this.state.well.uwid } </li>
                                <li className="list-group-item well-details fw-bold">Well Name </li>
                                <li className="list-group-item border well-details">{ this.state.well.wellName } </li>
                                <li className="list-group-item well-details fw-bold">License Number </li>
                                <li className="list-group-item border well-details">{ this.state.well.licenseNumber } </li>
                                <li className="list-group-item well-details fw-bold">Area </li>
                                <li className="list-group-item border well-details">{ this.state.well.area } </li>
                                <li className="list-group-item well-details w-50 fw-bold"> Field </li>
                                <li className="list-group-item well-details w-50"> { this.state.well.field } </li>
                                <li className="list-group-item well-details w-50 fw-bold"> Total Depth </li>
                                <li className="list-group-item well-details w-50"> { this.state.well.totalDepth } </li>
                                <li className="list-group-item well-details w-50 fw-bold"> Drill Date </li>
                                <li className="list-group-item well-details w-50"> { this.state.well.drillDate } </li>
                                <li className="list-group-item well-details w-50 fw-bold"> Status </li>
                                <li className="list-group-item well-details w-50"> { this.state.well.status } </li>
            
                            </div>
                        </div>
                    </div>
                </div>
                <br />
             
            
                <div className="pt-3">
                    
                    <button style={{marginLeft: "730px", backgroundColor:"#99C0DB"}} className="btn fw-bold" onClick={() => this.wellHistory(this.state.well.id)}>View Well History</button>

                    
                    &nbsp;&nbsp;&nbsp;
                    <button style={{backgroundColor:"#99C0DB"}} className="btn fw-bold" onClick={ () => this.updateWell(this.state.well.id)}> Update Well </button>


                    &nbsp;&nbsp;&nbsp;

                    <button  className="btn btn-danger text-dark fw-bold" onClick={() => this.deleteWell(this.state.well.id)}>Delete Well</button>

                </div>
            </div>
        );
    }
}

export default WellDetailsComponent;