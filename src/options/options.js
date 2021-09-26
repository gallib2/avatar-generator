import React, { useState, useEffect } from 'react';
import { useProvider } from '../utils/contextProvider';

import { getSectionsItems, getSectionNames } from '../mock';

import './options.scss';

const Options = ({ }) => {
	const { dispatch } = useProvider();
	const [scetionsItems, setSectionItems] = useState(null);

	useEffect(() => {
		const sectionItems = getSectionsItems();
		console.log('sectionItems', sectionItems)
		setSectionItems(sectionItems);

	}, []);


	const updateHair = (hair) => {
		dispatch({
			type: 'SET_HAIR',
			payload: hair,
		});
	};

	const updateBody = (body) => {
		dispatch({
			type: 'SET_BODY',
			payload: body,
		});
	};

	const updateFace = (face) => {
		dispatch({
			type: 'SET_FACE',
			payload: face,
		});
	};

	const updateFacialHair = (facialHair) => {
		dispatch({
			type: 'SET_FACIAL_HAIR',
			payload: facialHair,
		});
	};

	const updateAccessory = (accessory) => {
		dispatch({
			type: 'SET_ACCESSORY',
			payload: accessory,
		});
	};

	const updateFunctions = {
			head: (item) => updateHair(item),
			body: (item) => updateBody(item),
			accessory: (item) => updateAccessory(item),
			face: (item) => updateFace(item)
	}

	const handleItemSectionClick = (section, item) => {
		updateFunctions[section](item);
	}

	const renderSectionItems = section => {
		const currentSectionItems = scetionsItems && Object.keys(scetionsItems[section]);

		return (
			<div className='section-items-container' >
				<div className='items-list'>
					{currentSectionItems && currentSectionItems.map((item, idx) => (
						<button key={`${item}_${idx}`}  className='item' onClick={() => handleItemSectionClick(section, item)}>
							<div className='imgs'>
								<img src={scetionsItems[section][item]} />
							</div>
						</button>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className='options-menu'>
			<div className='listWrapper'>
				{getSectionNames().map((section, idx) => (
					<div className='section-container' key={`${section}_${idx}`}>
						<div>{section}</div>
						{renderSectionItems(section)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Options;