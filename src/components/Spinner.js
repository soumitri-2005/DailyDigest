import React, { Component } from 'react'
import loading from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
