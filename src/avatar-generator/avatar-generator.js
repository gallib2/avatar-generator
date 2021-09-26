import React from 'react';
import Options from '../options/options';
import AvatarWrapper from '../avatar/avatar-wrapper';

import './avatar-generator.scss';

const AvatarGenerator = () => {

    return (
        <div>
            <div>avatars generator</div>
            <div className='avatar-generator-container'>
                <Options />
                <AvatarWrapper />
            </div>
        </div>
    );
}

export default AvatarGenerator;