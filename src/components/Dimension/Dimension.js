// import {
//     widthPercentageToDP as wp2dp,
//     heightPercentageToDP as hp2dp,
// } from 'react-native-responsive-screen';

// export const wp = dimension => {
//     return wp2dp((dimension / 360) * 100 + '%');
// };

// export const hp = dimension => {
//     return hp2dp((dimension / 760) * 100 + '%');
// };
// export default { wp, hp }


import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;



const widthPercentageToDP = widthPercent => {
    // Parse string percentage input and convert it to number.
    const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};



const heightPercentageToDP = heightPercent => {
    // Parse string percentage input and convert it to number.
    const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};


const listenOrientationChange = that => {
    Dimensions.addEventListener('change', newDimensions => {
        // Retrieve and save new dimensions
        screenWidth = newDimensions.window.width;
        screenHeight = newDimensions.window.height;

        // Trigger screen's rerender with a state update of the orientation variable
        that.setState({
            orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
        });
    });
};


const removeOrientationListener = () => {
    Dimensions.removeEventListener('change', () => { });
};

export {
    widthPercentageToDP,
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener
};