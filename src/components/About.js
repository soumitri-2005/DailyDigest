import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="container my-3" style={{backgroundColor: this.props.mode === "dark" ? "black" : "white", color: this.props.mode === "dark" ? "white" : "black"}}>
                <h2 className="mx-2 my-4" style={{color: this.props.mode === "dark" ? "white" : "black"}}>About - DailyDigest</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{backgroundColor: this.props.mode === "dark" ? "#212529" : "white", color: this.props.mode === "dark" ? "white" : "black", border: "1px solid gray"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                DailyDigest
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: this.props.mode === "dark" ? "black" : "white", color: this.props.mode === "dark" ? "white" : "black" }}>
                                <strong>
                                    DailyDigest is your one-stop app for all things news. You can explore a wide range of categories like Business, Entertainment, General, Health, Science, Sports, Technology etc. Its user-friendly design makes it easy to switch between different sections and stay updated on the latest happenings around the globe. Whether you're interested in financial markets, celebrity gossip, everyday news, health tips, scientific discoveries, sports highlights, or tech innovations, DailyDigest has got it all. Dive into detailed articles and stay informed with fresh content every day. Keep yourself in the loop with DailyDigest!
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
