import React, { Component } from 'react';
import WellService from '../services/WellService';


class UpdateWellComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            //these properties will be used to store data from input field and data will be available on form submission
            id: this.props.match.params.id, //this allows us to get id from the route
            uwid: '',
            wellName: '',
            licenseNumber: '',
            area: '',
            field: '',
            totalDepth:'',
            drillDate:'',
            status:''

        }
        this.changeUWIDHandler = this.changeUWIDHandler.bind(this);
        this.changewellNameHandler = this.changewellNameHandler.bind(this);
        this.changelicenseNumberHandler = this.changelicenseNumberHandler.bind(this);
        this.changeareaHandler = this.changeareaHandler.bind(this);
        this.changefieldHandler = this.changefieldHandler.bind(this);
        this.changetotalDepthHandler = this.changetotalDepthHandler.bind(this);
        this.changedrillDateHandler = this.changedrillDateHandler.bind(this);
        this.changestatusHandler = this.changestatusHandler.bind(this);

        this.updateWell = this.updateWell.bind(this);
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

    updateWell = (e) => {
        e.preventDefault();
        let well = {uwid: this.state.uwid, wellName: this.state.wellName, licenseNumber: this.state.licenseNumber, area: this.state.area, field: this.state.field,totalDepth: this.state.totalDepth, drillDate: this.state.drillDate, status: this.state.status};

        console.log('well =>' + JSON.stringify(well));

        WellService.updateWell(well, this.state.id).then( res => {
            alert("Well is now successfully updated");
            this.props.history.goBack();
        });

      

    }

    cancel(){
        this.props.history.push('/')
    }

    //call REST API
    componentDidMount(){
        WellService.getWellById(this.state.id).then( (res) => {
            let well = res.data;
            this.setState({
                //we received response from data and then we set the state with state method
                uwid: well.uwid, 
                wellName: well.wellName, 
                licenseNumber: well.licenseNumber,
                area: well.area, 
                field: well.field, 
                totalDepth: well.totalDepth, 
                drillDate: well.drillDate, 
                status: well.status
            });
        });
    }

    render() {
        return (
            <div>

                <div className="container col-8 pt-3">
                    <div className="row">
                        <div>
                        <h3 className="text-center pt-5">Update Well</h3>
                        <div className="card-body">

                            <form style={{width: "800px", height:"500px"}}>
                                <div className="form-group">
                                    <label className='pb-1 fw-bold'>Unique Identifier</label>
                                    <input name="uwid" className="form-control" value={this.state.uwid} onChange={this.changeUWIDHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Well Name</label>
                                    <input name="wellName" className="form-control" value={this.state.wellName} onChange={this.changewellNameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>License Number</label>
                                    <input name="licenseNumber" className="form-control" value={this.state.licenseNumber} onChange={this.changelicenseNumberHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Area</label>
                                    <input name="area" className="form-control" value={this.state.area} onChange={this.changeareaHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Field</label>
                                    <input name="field" className="form-control" value={this.state.field} onChange={this.changefieldHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Total Depth</label>
                                    <input name="totalDepth" className="form-control" value={this.state.totalDepth} onChange={this.changetotalDepthHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Drill Date</label>
                                    <input name="drillDate" className="form-control" value={this.state.drillDate} onChange={this.changedrillDateHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 fw-bold'>Status</label>
                                    <input placeholder="Status" name="status" className="form-control" value={this.state.status} onChange={this.changestatusHandler}/>
                                </div>

                                <div className="pt-3">
                                    <button style={{marginLeft: "630px"}} className="btn btn-primary" onClick={this.updateWell}>Update</button>

                                    <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
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

export default UpdateWellComponent;
