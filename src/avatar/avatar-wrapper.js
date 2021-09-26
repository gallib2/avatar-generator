import React, { useRef } from 'react';
import { useProvider } from '../utils/contextProvider';
import Peep from 'react-peeps';
import { adjustPeepsViewbox } from '../utils/viewbox';
import Avatar from './avatar';

const styles = {
    peepStyle: {
        width: 390,
        height: 390,
        justifyContent: 'center',
        alignSelf: 'center',
        transform: 'unset',
    },
};


const AvatarWrapper = () => {
    const { state, dispatch } = useProvider();
    const illustrationRef = useRef(null);

    const {
        pickedAccessory,
        pickedBody,
        pickedFace,
        pickedFacialHair,
        pickedHair,
        strokeColor,
        pressedKey,
        scaleVector,
        svgTransform,
        isFrameTransparent,
        backgroundBasicColor,
    } = state;

    return (
        <div>
            <div
                ref={illustrationRef}
                className='svgWrapper'
                tabIndex={0}
            >
                <Avatar
                    style={{
                        // ...styles.peepStyle,
                        // width: styles.peepStyle.width * scaleVector,
                        // height: styles.peepStyle.height * scaleVector,
                        objectFit: 'contain',
                        transform: `${svgTransform?.flip || ''}`,
                    }}
                    accessory={pickedAccessory}
                    body={pickedBody}
                    face={pickedFace}
                    head={pickedHair}
                    facialHair={pickedFacialHair}
                    strokeColor={strokeColor}
                    viewBox={adjustPeepsViewbox(pickedBody)}
                    wrapperBackground={
                        isFrameTransparent ? undefined : backgroundBasicColor
                    }
                />
                {/* <Peep
                    style={{
                        ...styles.peepStyle,
                        width: styles.peepStyle.width * scaleVector,
                        height: styles.peepStyle.height * scaleVector,
                        transform: `${svgTransform?.flip || ''}`,
                    }}
                    accessory={pickedAccessory}
                    body={pickedBody}
                    face={pickedFace}
                    hair={pickedHair}
                    facialHair={pickedFacialHair}
                    strokeColor={strokeColor}
                    viewBox={adjustPeepsViewbox(pickedBody)}
                    wrapperBackground={
                        isFrameTransparent ? undefined : backgroundBasicColor
                    }
                /> */}
            </div>
        </div>
    );
}

export default AvatarWrapper;