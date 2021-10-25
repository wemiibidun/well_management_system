import React, { Component } from 'react';
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

            errors: []

        }
       
        this.inputHandler = this.inputHandler.bind(this);
        
        this.saveWell = this.saveWell.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    hasError(key) {
        return this.state.errors.indexOf(key) !== -1;
    }

    saveWell(event) {
        event.preventDefault();
    
        var errors = [];
    
        // is uwid input field empty?
        if (this.state.uwid === "") {
          errors.push("uwid");
        }
        // is wellName input field empty?
        if (this.state.wellName === "") {
            errors.push("wellName");
          }
        // set error field in state
        this.setState({
          errors: errors
        });
        
        if (errors.length > 0) { // any validation error(s) exists
          //alert("cant submit form! required field empty!!");
          return false;  // don't submit
        } else { // no validation errors 
          //alert("everything good. submit form!");
          let well = {
            uwid: this.state.uwid, 
            wellName: this.state.wellName, 
            licenseNumber: this.state.licenseNumber===""? "039501A" : this.state.licenseNumber, 
            area: this.state.area ===""? "Comrey" : this.status.area,
            field: this.state.field === ""? "0234" : this.state.field,
            totalDepth: this.state.totalDepth === ""? "500" : this.state.totalDepth, 
            drillDate: this.state.drillDate === ""? "2018-10-10" : this.state.drillDate, 
            status: this.state.status === ""? "ABD" : this.state.status
        };
  
          console.log('well =>' + JSON.stringify(well));
  
          //axios method returns a promise
          WellService.createWell(well).then(res => {
              alert("Well is now successfully created");
              //after form submission, navigate back to home page
              this.props.history.push('/')
          });
        }
      }
    
    inputHandler = (event) => {
        const input_field = event.target.name;
        const value = event.target.value;
        const mapping = {};
        mapping[input_field] = value;
        this.setState(mapping)
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
                        <h3 className="text-center mt-4 pt-5 fw-bolder" 
                        style={{color:"#99C0DB"}}>Create New Well</h3>
                        <div className="card-body">
                            <form style={{width: "800px", height:"500px", color:"#071929"}} >
                                <div className="form-group">
                                    <label htmlFor="uwid" 
                                    className='form-label fw-bold'>
                                        <span style={{color: 'red'}}>*</span>Unique Identifier</label>
                                    <input style={{fontStyle:"italic"}} placeholder="uwid" name="uwid"
                                    className={
                                        this.hasError("uwid")
                                          ? "form-control form-control-sm is-invalid"
                                          : "form-control form-control-sm"
                                      }
                                    value={this.state.uwid} 
                                    onChange={this.inputHandler}/>

                                    <div style={
                                        this.hasError("uwid") ? {color: "red", fontSize: "12px"} : {display: "none"}
                                        }>
                                        Please enter a UWID
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>
                                        <span style={{color: 'red'}}>*</span>Well Name</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Well Name" name="wellName" 
                                    className={
                                        this.hasError("wellName")
                                          ? "form-control is-invalid"
                                          : "form-control form-control-sm"
                                      }
                                    value={this.state.wellName} 
                                    onChange={this.inputHandler}/>
                                    <div style={
                                        this.hasError("wellName") ? {color: "red", fontSize: "12px"} : {display: "none"}
                                        }>
                                        Please enter a Well Name
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>License Number</label>
                                    <input style={{fontStyle:"italic"}} 
                                    placeholder="License Number" name="licenseNumber" 
                                    className="form-control form-control-sm" 
                                    value={this.state.licenseNumber} 
                                    onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Area</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Area" name="area" className="form-control form-control-sm" 
                                    value={this.state.area}
                                    onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Field</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Field" 
                                    name="field" 
                                    className="form-control form-control-sm" 
                                    value={this.state.field} 
                                    onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Total Depth</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Total Depth" 
                                    name="totalDepth" 
                                    className="form-control form-control-sm" 
                                    value={this.state.totalDepth} 
                                    onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-2 pb-1 fw-bold'>Drill Date</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Drill Date" 
                                    name="drillDate" 
                                    className="form-control form-control-sm" 
                                    value={this.state.drillDate} 
                                    onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label className='pt-1 fw-bold'>Status</label>
                                    <input style={{fontStyle:"italic"}} placeholder="Status" 
                                    name="status" 
                                    className="form-control form-control-sm" 
                                    value={this.state.status} 
                                    onChange={this.inputHandler}/>
                                </div>

                                <div className="pt-3">
                                    <button style={{marginLeft: "630px", backgroundColor:"#99C0DB"}} 
                                    className="btn fw-bold" 
                                    onClick={this.saveWell}> Create </button>

                                    <button style={{ marginLeft: "10px" }} className="btn btn-danger text-dark fw-bold" 
                                    onClick={this.cancel}>Cancel</button>
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
