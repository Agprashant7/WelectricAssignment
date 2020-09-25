import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from './1.webp';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className="App">
    <div class= 'container'>
<div class="container_content">
<div class="container_content_inner">
<div class="title">
  <h1>BE ELECTRIFIED</h1>
</div>
<div class="par">
<p>
Say no to fuel,get upgrade to electric and be electrified worried about cost..??
don't worry we are here"WELECTRIC"
</p>
</div>
<div class="btns">
<button class='btns_more'> <a href='#next' style={{color: '#BF307F'}}>See more</a> </button>
</div>
</div>
</div>
 <div class="container_outer_img">
 <div class="img-inner">
 <img src={img}  alt="" class="containerImg"/>
       </div>
     </div>
  </div>
<div class="overlay"></div>
<center>
<h1>Why Electric</h1>
</center>
<div class="Container" id='next'>
 
                <div class="divObj">
                    <i class="fa fa-stop-circle-o"></i>
                    <div class="Heading">No Noise and Air pollution</div>
                    <p class="Description"></p>
                </div>
                <div  class="divObj">
                    <i class="fa fa-battery-half"></i>
                    <div class="Heading"> Charge like your electronic devices</div>
                    <p class="Description"></p>
                </div>
                <div  class="divObj">
                    <i class="fa fa-bolt"></i>
                    <div class="Heading">No infrastructure required to powerup bikes</div>
                    <p class="Description"></p>
                </div>
                <div  class="divObj">
                    <i class="fa fa-weixin"></i>
                    <div class="Heading">Lease the vehicle</div>
                    <p class="Description"></p>
                </div>
            </div>
            <center> <h1>Confused About Leasing?</h1></center>
            <div class="Container">
 
 <div class="divObj">
     <i class="fa fa-money"></i>
     <div class="Heading">No down payment take time settled once</div>
     <p class="Description"></p>
 </div>
 <div  class="divObj">
     <i class="fa fa-repeat"></i>
     <div class="Heading"> Easy resale value</div>
     <p class="Description"></p>
 </div>
 <div  class="divObj">
     <i class="fa fa-exchange"></i>
     <div class="Heading">We provide upgrade to latest model during leasing period</div>
     <p class="Description"></p>
 </div>
 <div  class="divObj">
 <i class="fa fa-motorcycle"></i>
     <div class="Heading">Move to the new bike new period </div>
     <p class="Description"></p>
 </div>
</div>
<div class='leaseBtn'>
    <center>
<button class='btns_more'><Link to='/desc'>Lease Electric Two Wheeler</Link> </button></center>
    </div>
    </div>
  );
}

export default Home;
