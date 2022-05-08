import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {

    render() {
    return (
      <div className="text-center my-4 my-2">
          <img src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner