import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    return (
      
    <div className="grid-container">
    <h3 className="basic-text">Gallery</h3>
        <div className="gallery">
             <div className="gallery__item gallery__item--1">
                 <img src="images/image-1.jpg" className="gallery__img img1" alt="Image1" />
        </div>
             <div className="gallery__item gallery__item--2">
                  <img src="images/image-2.jpg" className="gallery__img img2" alt="Image2" />
                  </div>
                  <div className="gallery__item gallery__item--3">
                   <img src="images/images-3.jpg" className="gallery__img img3"  alt="Image3" />
         </div>
               <div className="gallery__item gallery__item--4">
                    <img src="images/image-4.jpg" className="gallery__img img4" alt="Image4" />
         </div>
                <div className="gallery__item gallery__item--5">
                     <img src="images/images-5.jpg" className="gallery__img img5" alt="Image5" />
         </div>
                 <div className="gallery__item gallery__item--6">
                     <img src="images/images-6.jpg" className="gallery__img img6" alt="Image6" />
          </div>
    </div>
    </div>
    )
  }
}
