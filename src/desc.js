import React from 'react';
import './desc.css';
import img from './1.webp'
import img1 from './bikes/1.jpg';
import img3 from './bikes/3.jpg'
import img2 from './bikes/2.jpg'
const Desc=()=>{
    return(
        <div class='mainContainer'>
            <div class='cardContainer'>
                <div class='imgContainer'>
                <img src={img1} class='img'/>
                </div>
                <div class='descContainer'>
                    <h2>Hero Electric Optima</h2>
                    <h3>Model</h3>
                    <h4>Lease price</h4>
                    <p>Description</p>
                    <a href=''>Lease Now</a>
                </div>
            </div>
            <div class='cardContainer'>
            <div class='imgContainer'>
                <img src={img2} class='img'/>
                </div>
                <div class='descContainer'>
                    <h2>Bajaj Chetak</h2>
                    <h3>Model</h3>
                    <h4>Lease price</h4>
                    <p>Description</p>
                    <a href=''>Lease Now</a>
                </div>
            </div>
            <div class='cardContainer'>
            <div class='imgContainer'>
                <img src={img3} class='img'/>
                </div>
                <div class='descContainer'>
                    <h2>RV400</h2>
                    <h3>Model</h3>
                    <h4>Lease price</h4>
                    <p>Description</p>
                    <a href=''>Lease Now</a>
                </div>
            </div>
        </div>
    )
}
export default Desc;