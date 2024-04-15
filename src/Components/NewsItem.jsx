import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {imageurl,title , description, newsurl} =this.props
    return (
      <div>
        <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
              <img src={!imageurl?"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw":imageurl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
    </div>
      </div>
    )
  }
}
