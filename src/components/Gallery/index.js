import React from 'react';
import Image from './../../img/forest.jpg'

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import images from './images'

import image1 from './../../img/gallery/image1.jpg'
import image2 from './../../img/gallery/image2.jpg'
import image3 from './../../img/gallery/image3.jpg'
import image4 from './../../img/gallery/image4.jpg'
import image5 from './../../img/gallery/image5.jpg'
import image6 from './../../img/gallery/image6.jpg'
import image7 from './../../img/gallery/image7.jpg'
import image8 from './../../img/gallery/image8.jpg'
import image9 from './../../img/gallery/image9.jpg'
import image10 from './../../img/gallery/image10.jpg'
import image11 from './../../img/gallery/image11.jpg'
import image12 from './../../img/gallery/image12.jpg'
import image13 from './../../img/gallery/image13.jpg'
import image14 from './../../img/gallery/image14.jpg'
import image15 from './../../img/gallery/image15.jpg'
import image16 from './../../img/gallery/image16.jpg'
import image17 from './../../img/gallery/image17.jpg'
import image18 from './../../img/gallery/image18.jpg'
import image19 from './../../img/gallery/image19.jpg'
import image20 from './../../img/gallery/image20.jpg'
import image21 from './../../img/gallery/image21.jpg'
import image22 from './../../img/gallery/image22.jpg'
import image23 from './../../img/gallery/image23.jpg'
import image24 from './../../img/gallery/image24.jpg'
import image25 from './../../img/gallery/image25.jpg'
import image26 from './../../img/gallery/image26.jpg'
import image27 from './../../img/gallery/image27.jpg'
import image28 from './../../img/gallery/image28.jpg'
import image29 from './../../img/gallery/image29.jpg'
import image30 from './../../img/gallery/image30.jpg'
import image31 from './../../img/gallery/image31.jpg'
import image32 from './../../img/gallery/image32.jpg'
import image33 from './../../img/gallery/image33.jpg'
import image34 from './../../img/gallery/image34.jpg'
import image35 from './../../img/gallery/image35.jpg'
import image36 from './../../img/gallery/image36.jpg'
import image37 from './../../img/gallery/image37.jpg'
import image38 from './../../img/gallery/image38.jpg'
import image39 from './../../img/gallery/image39.jpg'
import image40 from './../../img/gallery/image40.jpg'
import image41 from './../../img/gallery/image41.jpg'



const photos = [
  { src: image1, width: 1, height: 1 },
  { src: image2, width: 1, height: 1 },
  { src: image3, width: 1, height: 1 },
  { src: image4, width: 1, height: 1 },
  { src: image5, width: 1, height: 1 },
  { src: image6, width: 1, height: 1 },
  { src: image7, width: 1, height: 1 },
  { src: image8, width: 1, height: 1 },
  { src: image9, width: 1, height: 1 },
  { src: image10, width: 1, height: 1 },
  { src: image11, width: 1, height: 1 },
  { src: image12, width: 1, height: 1 },
  { src: image13, width: 1, height: 1 },
  { src: image14, width: 1, height: 1 },
  { src: image15, width: 1, height: 1 },
  { src: image16, width: 1, height: 1 },
  { src: image17, width: 1, height: 1 },
  { src: image18, width: 1, height: 1 },
  { src: image19, width: 1, height: 1 },
  { src: image20, width: 1, height: 1 },
  { src: image21, width: 1, height: 1 },
  { src: image22, width: 1, height: 1 },
  { src: image23, width: 1, height: 1 },
  { src: image24, width: 1, height: 1 },
  { src: image25, width: 1, height: 1 },
  { src: image26, width: 1, height: 1 },
  { src: image27, width: 1, height: 1 },
  { src: image28, width: 1, height: 1 },
  { src: image29, width: 1, height: 1 },
  { src: image30, width: 1, height: 1 },
  { src: image31, width: 1, height: 1 },
  { src: image32, width: 1, height: 1 },
  { src: image33, width: 1, height: 1 },
  { src: image34, width: 1, height: 1 },
  { src: image35, width: 1, height: 1 },
  { src: image36, width: 1, height: 1 },
  { src: image37, width: 1, height: 1 },
  { src: image38, width: 1, height: 1 },
  { src: image39, width: 1, height: 1 },
  { src: image40, width: 1, height: 1 },
  { src: image41, width: 1, height: 1 }


];


class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>

        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default ImageGallery