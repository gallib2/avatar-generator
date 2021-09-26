import React, {useEffect, useRef, useState} from 'react';
import * as avatarSize from './size-config';

import * as avatarParts from '../mock';

const Avatar = ({style, accessory, body, face, head, facialHair, poseType}) => {
    const ctxRef = useRef();


    useEffect(() => {
        const can = document.getElementById('av-canvas');
        const ctx = can.getContext('2d');

        ctxRef.current = ctx;
        setImages();

    }, []);

    useEffect(() => {
        const can = document.getElementById('av-canvas');
        const canvasWidth = can.width;
        const canvasHeight = can.height;

        ctxRef.current.clearRect(0, 0, canvasWidth, canvasHeight);
        setImages();
    }, [accessory, body, face, head, facialHair, poseType]);

    const getElementsPositions = () => {
        const xPosition = avatarSize.body.width / 2;
        const config = {
            head: {
                xPosition: xPosition + (avatarSize.head.width / 3), // the head is 2/3 from the head size
                yPosition: avatarSize.head.yPosition
            },
            accessory: {
                xPosition:  xPosition + ((avatarSize.head.width / 2)),
                yPosition: avatarSize.head.yPosition + (avatarSize.head.height / 3) + 10
            },
            face: {
                xPosition: xPosition + ((avatarSize.head.width / 3) * 2) + 5, // face location is 2/3 of the head + offset
                yPosition: avatarSize.head.yPosition + (avatarSize.head.height / 3)
            },
            body: {
                xPosition,
                yPosition: avatarSize.head.height - (avatarSize.body.height / 10)  // 15
            }
        };

        return config;
    }

    const setImages = () => {
        const positions = getElementsPositions();

        loadImages({type: 'body', imgName: body, positions});
        loadImages({type: 'head', imgName: head, positions});
        loadImages({type: 'accessory', imgName: accessory, positions});
        loadImages({type: 'face', imgName: face, positions});
    }


    const loadImages = ({type, imgName, positions}) => {
        const image = new Image();
        image.src = avatarParts[type][imgName];

        image.onload = function() {
            const xPosition = positions[type].xPosition;
            const yPosition =  positions[type].yPosition;
            console.log(type, xPosition, yPosition);
            ctxRef.current.drawImage(image, xPosition, yPosition, avatarSize[type].width, avatarSize[type].height);
        }
    }

    return (
        <div>
            <canvas id="av-canvas" style={style}></canvas>
        </div>
    );

}

export default Avatar;