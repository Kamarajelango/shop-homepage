import React from 'react';
import './App.css';
import PriceCard from './PriceCard';


function App() {
  let data=[
    {
      name:"FREE",
      price:"0",
      user:"Single user",
      isuser:true,
      storage:"5GB Storage",
      isstorage:true,
      public:"Unlimited Public Projects",
      ispublic:true,
      community:"Community Access",
      iscommunity:true,
      private:"Unlimited Private Projects",
      isprivate:false,
      phone:"Dedicated Phone Support",
      isphone:false,
      subdomain:"Free Sub domains",
      issubdomain:false,
      status:"Monthly Status Reports",
      isstatus:false
    },
    {
      name:"PLUS",
      price:"9",
      user:"5 users",
      isuser:true,
      storage:"50GB Storage",
      isstorage:true,
      public:"Unlimited Public Projects",
      ispublic:true,
      community:"Community Access",
      iscommunity:true,
      private:"Unlimited Private Projects",
      isprivate:true,
      phone:"Dedicated Phone Support",
      isphone:true,
      subdomain:"Free Sub domains",
      issubdomain:true,
      status:"Monthly Status Reports",
      isstatus:false
    }, {
      name:"PRO",
      price:"49",
      user:"SinUnlimited users",
      isuser:true,
      storage:"150GB Storage",
      isstorage:true,
      public:"Unlimited Public Projects",
      ispublic:true,
      community:"Community Access",
      iscommunity:true,
      private:"Unlimited Private Projects",
      isprivate:true,
      phone:"Dedicated Phone Support",
      isphone:true,
      subdomain:"Unlimited Free Sub domains",
      issubdomain:true,
      status:"Monthly Status Reports",
      isstatus:true
    }
  ]
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
         data.map((e,i)=>{
          return <PriceCard key={i} data={e}/>
        })
      }
               
    </div>
  </div>
</section>
  )
}

export default App;
