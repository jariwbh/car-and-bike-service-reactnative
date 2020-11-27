import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import * as image from '../Slider/SliderImage'

export default function SliderScreen() {
    const images = [
        image.sliderimg1,
        image.sliderimg2,
        image.sliderimg3,
        image.sliderimg4
    ]
    return (
        <SliderBox
            images={images}
            sliderBoxHeight={250}
            dotColor="#2f408f"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={0}
            autoplay
            circleLoop
        />
    )
}
