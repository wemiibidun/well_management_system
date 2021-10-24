import React, { Component } from 'react';
//import { useForm } from "react-hook-form";
import WellService from '../services/WellService';



class CreateWellComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            //these properties will be used to store data from input field and data will be available on form submission
            id: this.props.match.params.id,
            uwid: '',
            wellName: '',
            licenseNumber: '',
            area: '',
            field: '',
            totalDepth:'',
            drillDate:'',
            status:'',

        }
        this.changeUWIDHandler = this.changeUWIDHandler.bind(this);
        this.changewellNameHandler = this.changewellNameHandler.bind(this);
        this.changelicenseNumberHandler = this.changelicenseNumberHandler.bind(this);
        this.changeareaHandler = this.changeareaHandler.bind(this);
        this.changefieldHandler = this.changefieldHandler.bind(this);
        this.changetotalDepthHandler = this.changetotalDepthHandler.bind(this);
        this.changedrillDateHandler = this.changedrillDateHandler.bind(this);
        this.changestatusHandler = this.changestatusHandler.bind(this);

        this.saveWell = this.saveWell.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeUWIDHandler = (event) => {
        this.setState({uwid: event.target.value})
    }

    changewellNameHandler = (event) => {
        this.setState({wellName : event.target.value})
    }
    changelicenseNumberHandler = (event) => {
        this.setState({licenseNumber : event.target.value})
    }
    changeareaHandler = (event) => {
        this.setState({area : event.target.value})
    }
    changefieldHandler = (event) => {
        this.setState({field : event.target.value})
    }
    changetotalDepthHandler = (event) => {
        this.setState({totalDepth : event.target.value})
    }
    changedrillDateHandler = (event) => {
        this.setState({drillDate : event.target.value})
    }
    changestatusHandler = (event) => {
        this.setState({status : event.target.value})
    }

    saveWell = (e) => {
        e.preventDefault();
        let well = {uwid: this.state.uwid, wellName: this.state.wellName, licenseNumber: this.state.licenseNumber, area: this.state.area, field: this.state.field,totalDepth: this.state.totalDepth, drillDate: this.state.drillDate, status: this.state.status};

        console.log('well =>' + JSON.stringify(well));

        //axios method returns a promise
        WellService.createWell(well).then(res => {
            alert("Well is now successfully created");
            //after form submission, navigate back to home page
            this.props.history.push('/')
        });

    }

    
    cancel(){
        this.props.history.push('/')
    }


    render() {
        return (
            <div>

                <div className="container input-box col-8 pt-3">
                    <div className="row">
                        <div>
                        <h3 className="text-center mt-4 pt-5 fw-bolder" style={{color:"#99C0DB"}}>Create New Well</h3>
                        <div className="card-body">

                            <form style={{width: "800px", height:"500px", color:"#071929"}}className=" needs-validation" noValidate >
                                <div className="form-group">
                                    <label for="validationUWID" className='form-label fw-bold'>*Unique Identifier</label>
                                    <input style={{fontStyle:"italic"}} placeholder="uwid" name="uwid" required className="form-control form-control-sm" value={this.state.uwid} onChange={this.changeUWIDHandler}/>
                                </div>


                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>*Well Name</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Well Name" name="wellName" required className="form-control form-control-sm" value={this.state.wellName} onChange={this.changewellNameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>License Number</label>
                                    <input style={{fontStyle:"italic"}} placeholder="License Number" name="licenseNumber" className="form-control form-control-sm" value={this.state.licenseNumber} onChange={this.changelicenseNumberHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Area</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Area" name="area" className="form-control form-control-sm" value={this.state.area} onChange={this.changeareaHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Field</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Field" name="field" className="form-control form-control-sm" value={this.state.field} onChange={this.changefieldHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Total Depth</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Total Depth" name="totalDepth" className="form-control form-control-sm" value={this.state.totalDepth} onChange={this.changetotalDepthHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Drill Date</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Drill Date" name="drillDate" className="form-control form-control-sm" value={this.state.drillDate} onChange={this.changedrillDateHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-1 fw-bold'>Status</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Status" name="status" className="form-control form-control-sm" value={this.state.status} onChange={this.changestatusHandler}/>
                                </div>

                                <div className="pt-3">
                                    <button style={{marginLeft: "630px", backgroundColor:"#99C0DB"}} className="btn fw-bold" onClick={this.saveWell}> Create </button>

                                    <button style={{ marginLeft: "10px" }} className="btn btn-danger text-dark fw-bold" onClick={this.cancel} >Cancel</button>
                                </div>
                            </form>

                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default CreateWellComponent;
