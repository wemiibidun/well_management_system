import React, { Component } from 'react';

class HomePageComponent extends Component {


    render(){
        return (
            <div>
                <div className="home-page">

                    <div className="row">
                    <div className="col-5 pt-5 title">
                            <div>
                            <h1> Well </h1>
                            <h1> Management </h1>
                            <h1> System </h1>
                            <h1> App</h1>
                            </div>
                        </div>


                        <div className="col-7 p-5">
                            <img src="/images/home_page.jpg" className ="rounded-circle" alt="website_homepage_image" style={{width: 700}} />
                        </div>
                        
                       
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default HomePageComponent;


