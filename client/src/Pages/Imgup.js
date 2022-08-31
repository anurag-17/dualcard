import React, { Component } from 'react';
import { render } from 'react-dom';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import { Link , useNavigate} from "react-router-dom";
import buyimg1 from "../images/1.jpg";
import buyimg2 from "../images/2.jpg";
import buyimg3 from "../images/3.jpg";
import buyimg4 from "../images/4.jpg";
import plus1 from "../images/8.jpg";
import Chimg1 from "../images/6.jpg";
import tab1 from "../images/5.jpg";

const imageList = [buyimg1, buyimg2, buyimg3, buyimg4]

class Imgup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      images: [],
      max_images: [],
      max_message: ''
    }
  }

  onPickImage(image) {
    this.setState({image})
  }

  onPickImages(images) {
    this.setState({images})
  }

  onPickImagesWithLimit(max_images) {
    this.setState({max_images})
  }

  onPickMaxImages(last_image) {
    let image = JSON.stringify(last_image)
    let max_message = `Max images reached. ${image}`

    this.setState({max_message})
  }

  render() {
    return (
      <div className='body-main'>  
      <div className='container img-select'>        
        {/* <h3>Single Select</h3>
        <ImagePicker
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPickImage.bind(this)}
        />
        <textarea rows="4" cols="100" value={this.state.image && JSON.stringify(this.state.image)} disabled/>
         */}



        <h3>Multiple Select</h3>
        <ImagePicker
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPickImages.bind(this)}
          multiple
        />
        {/* <textarea rows="4" cols="100" value={this.state.images && JSON.stringify(this.state.images)} disabled/> */}

        <h3>Multiple Select with Limit</h3>
        {/* <ImagePicker
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPickImagesWithLimit.bind(this)}
          maxPicks={2}
          onMaxPicks={this.onPickMaxImages.bind(this)}
          multiple
        /> */}
        {/* <textarea rows="4" cols="100" value={this.state.max_images && JSON.stringify(this.state.max_images)} disabled/>
        <textarea rows="4" cols="100" value={this.state.max_message && JSON.stringify(this.state.max_message)} disabled/> */}
      </div>


      <div className='row tabct-main gx-5'>
                     <div className='col-md-6 tab-left'>
                         <div className='dchallenge-rt-1 imgsel1'>                                                         
                                 <ImagePicker
                      images={imageList.map((image, i) => ({src: image, value: i}))}
                      onPick={this.onPickImages.bind(this)}
                      multiple
                    />
                                            </div>
                                <div className='btn-duel-right'>
                                    <button className='hero-btn'>SELECT CARDS</button>
                                </div>
                          </div>                            
                          <div className='col-md-6 tab-right'>
                          <div className='dule-rt-2'>
                                <div class="clearfix">
                                    <img src={tab1} alt="img"/>
                                    <button type="button" class="btn float-end">Laurie</button>
                                 </div> 
                                </div>
                                <div className='challenge-list'>
                                  <div className='won-title'>
                                    <h4>Challenges won</h4>
                                    <span>5</span>
                                  </div>
                                  <div className='lost-title'>
                                    <h4>Challenges lost</h4>
                                    <span>8</span>
                                  </div>
                                </div>
                                <div className='duel-form'>
                                <div class="mb-3 mt-0">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className='btn-duel-right'>
                                    <Link to ='/DuelReceived'>
                                    <button className='hero-btn'>send  challenge</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
      </div>
    )
  }
}
 
export default Imgup;