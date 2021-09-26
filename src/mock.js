import Eyepatch from './imgs/accessories/Eyepatch.svg';
import Glasses from './imgs/accessories/Glasses.svg';
import Glasses2 from './imgs/accessories/Glasses2.svg';
import Glasses3 from './imgs/accessories/Glasses3.svg';
import Glasses4 from './imgs/accessories/Glasses4.svg';
import Glasses5 from './imgs/accessories/Glasses5.svg';
import Sunglasses from './imgs/accessories/Sunglasses.svg'
import Sunglasses2 from './imgs/accessories/Sunglasses.svg'

import Smile from './imgs/face/Smile.svg';
import AngryWithFang from './imgs/face/AngryWithFang.svg';
import Awe from './imgs/face/Awe.svg';
import Blank from './imgs/face/Blank.svg';
import Calm from './imgs/face/Calm.svg';
import Cheeky from './imgs/face/Cheeky.svg';
import Concerned from './imgs/face/Concerned.svg';

import PointingUp from './imgs/body/PointingUp.svg';
import BlazerBlackTee from './imgs/body/BlazerBlackTee.svg';
import ButtonShirt1 from './imgs/body/ButtonShirt1.svg';
import ButtonShirt2 from './imgs/body/ButtonShirt2.svg';
import Coffee from './imgs/body/Coffee.svg';
import Device from './imgs/body/Device.svg';
import Dress from './imgs/body/Dress.svg';
import Explaining from './imgs/body/Explaining.svg';
import FurJacket from './imgs/body/FurJacket.svg';
import Gaming from './imgs/body/Gaming.svg';

import HatHip from './imgs/head/HatHip.svg';
import Afro from './imgs/head/Afro.svg';
import Bangs from './imgs/head/Bangs.svg';
import Bangs2 from './imgs/head/Bangs2.svg';
import BantuKnots from './imgs/head/BantuKnots.svg';
import Bear from './imgs/head/Bear.svg';
import Bun from './imgs/head/Bun.svg';
import Bun2 from './imgs/head/Bun2.svg';


const head = {
    HatHip,
    Afro,
    Bangs,
    Bangs2,
    BantuKnots,
    Bear,
    Bun,
    Bun2
}

const accessory = {
    Eyepatch,
    Glasses,
    Glasses2,
    Glasses3,
    Glasses4,
    Glasses5,
    Sunglasses,
    Sunglasses2
}

const body = {
    PointingUp,
    BlazerBlackTee,
    ButtonShirt1,
    ButtonShirt2,
    Coffee,
    Device,
    Dress,
    Explaining,
    FurJacket,
    Gaming,
}

const face = {
    Smile: Smile,
    AngryWithFang,
    Awe,
    Blank,
    Calm,
    Cheeky,
    Concerned,
}

function getSectionNames() {
    return ['head', 'body', 'accessory', 'face']
}

function getSectionsItems() {
    return {
        head: Object.keys(head),
        accessory: Object.keys(accessory),
        body: Object.keys(body),
        face: Object.keys(face),
    }

} 

export {accessory, face, body, head, getSectionNames, getSectionsItems};