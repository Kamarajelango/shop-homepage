import React from 'react';

function PriceCard(props){
    return <>
              {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.name}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.isuser?"":"text-muted"}><span className="fa-li"><i className={props.data.isuser?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
              <li className={props.data.isstorage?"":"text-muted"}><span className="fa-li"><i className={props.data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.ispublic?"":"text-muted"}><span className="fa-li"><i className={props.data.ispublic?"fas fa-check":"fas fa-times"}></i></span>{props.data.public}</li>
              <li className={props.data.iscommunity?"":"text-muted"}><span className="fa-li"><i className={props.data.iscommunity?"fas fa-check":"fas fa-times"}></i></span>{props.data.community}</li>
              <li className={props.data.isprivate?"":"text-muted"}><span className="fa-li"><i className={props.data.isprivate?"fas fa-check":"fas fa-times"}></i></span>{props.data.private}</li>
              <li className={props.data.isphone?"":"text-muted"}><span className="fa-li"><i className={props.data.isphone?"fas fa-check":"fas fa-times"}></i></span>{props.data.phone}</li>
              <li className={props.data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={props.data.issubdomain?"fas fa-check":"fas fa-times"}></i></span>{props.data.subdomain}</li>
              <li className={props.data.isstatus?"":"text-muted"}><span className="fa-li"><i className={props.data.isstatus?"fas fa-check":"fas fa-times"}></i></span>{props.data.status}</li>
            </ul>
            <div className="d-grid">
              <a href="www.github.com" className="btn btn-primary btn-lg btn-block text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default PriceCard