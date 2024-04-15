import React, { Component } from 'react'
import Loading from './Loading3.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt="Loading" />
      </div>
    )
  }
}
