import React, { useState, useEffect, useMemo } from 'react';
import {
	Accessories,
	BustPose,
	Face,
	FacialHair,
	Hair,
	StandingPose,
	SittingPose,
} from 'react-peeps';
import { useProvider } from '../utils/contextProvider';
import { distinguishBodyViewbox } from '../utils/viewbox';

const Options = ({}) => {
    const { state, dispatch } = useProvider();
    const [pieceKeys, setPieceKeys] = useState();

    const {
        pickedAccessory,
        pickedBody,
        pickedFace,
        pickedFacialHair,
        pickedHair,
        pickedSection,
        scaleVector,
        isFrameTransparent,
    } = state;

    useEffect(() => {
		const keys = {
			hairKeys: [''],
			bodyKeys: [''],
			faceKeys: [''],
			facialHairKeys: [''],
			accessoryKeys: [''],
		};
		keys.hairKeys = Object.keys(Hair);
		keys.bodyKeys = [
			...Object.keys(BustPose),
			...Object.keys(SittingPose),
			...Object.keys(StandingPose),
		];
		keys.faceKeys = Object.keys(Face);
		keys.facialHairKeys = Object.keys(FacialHair);
		keys.accessoryKeys = Object.keys(Accessories);
		setPieceKeys(keys);
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

	const updateSection = (section) => {
		dispatch({
			type: 'SET_PIECE_SECTION',
			payload: section,
		});
	};

    const handlePieceSectionClick = (section) => {
		return () => {
			updateSection(section);
		};
	};


    const handlePieceItemClick = (piece) => {
		return () => {
			switch (pickedSection) {
				case 'Accessories':
					updateAccessory(piece);
					break;
				case 'Body':
					updateBody(
						piece
					);
					break;
				case 'Hair':
					updateHair(piece);
					break;
				case 'FacialHair':
					updateFacialHair(piece);
					break;
				case 'Face':
					updateFace(piece);
					break;
				default:
					break;
			}
		};
	};

    const isPieceChecked = (piece) => {
		switch (pickedSection) {
			case 'Accessories':
				return piece === pickedAccessory;
			case 'Body':
				return piece === pickedBody;
			case 'Hair':
				return piece === pickedHair;
			case 'FacialHair':
				return piece === pickedFacialHair;
			case 'Face':
				return piece === pickedFace;
			default:
				break;
		}
	};

    const adjustSvgViewbox = (piece) => {
		switch (pickedSection) {
			case 'Accessories':
				return '-75 -125 500 400';
			case 'Body':
				return distinguishBodyViewbox(piece);
			case 'Hair':
				return '0 -100 550 750';
			case 'FacialHair':
				return '-50 -100 500 400';
			case 'Face':
				return '0 -20 300 400';
			default:
				break;
		}
	};

    const renderPiece = (piece) => {
		switch (pickedSection) {
			case 'Accessories':
				return React.createElement(Accessories[piece]);
			case 'Body':
				return React.createElement(
					BustPose[piece] ||
						SittingPose[piece] ||
						StandingPose[piece]
				);
			case 'Hair':
				return React.createElement(Hair[piece]);
			case 'FacialHair':
				return React.createElement(FacialHair[piece]);
			case 'Face':
				return React.createElement(Face[piece]);
			default:
				break;
		}
	};

    const renderPieceList = (pieces) => {
		return pieces.map((piece, index) => {
			return (
				<li
					key={index}
					className='pieceListItem'
					onClick={handlePieceItemClick(piece)}>
					<div className='pieceListWrapper'>
						<input
							className='pieceListRadioButton'
							type='radio'
							name={pickedSection}
							checked={isPieceChecked(piece)}
							readOnly
						/>
						<div className='selectionIndicator' />
						<div>
							<svg
								className='pieceListSvg'
								viewBox={adjustSvgViewbox(piece)}
								width='70'
								height='70'>
								{renderPiece(piece)}
							</svg>
						</div>
						<span className='pieceText'>{piece}</span>
					</div>
				</li>
			);
		});
	};

    const pickedSectionObject = () => {
		switch (pickedSection) {
			case 'Accessories':
				return Object.keys(Accessories);
			case 'Body':
				return [
					...Object.keys(BustPose),
					...Object.keys(SittingPose),
					...Object.keys(StandingPose),
				];
			case 'Hair':
				return Object.keys(Hair);
			case 'FacialHair':
				return Object.keys(FacialHair);
			case 'Face':
				return Object.keys(Face);
			default:
				break;
		}
	};

    const renderPieceSections = (sections) => {
		return sections.map((section, index) => {
			return (
				<li
					className='pieceSectionItem'
					key={index}
					onClick={handlePieceSectionClick(section)}>
					<div
						className={`pieceSectionButton ${section} ${
							pickedSection === section ? 'pickedSection' : ''
						}`}>
						<span>{section}</span>
					</div>
				</li>
			);
		});
	};

    const renderSelectedPieceSet = useMemo(() => {
		return (
			<div className='listWrapper'>
				<ul className={`pieceList ${pickedSection}`}>
					{renderPieceList(pickedSectionObject())}
				</ul>
				<ul className='sectionList'>
					{renderPieceSections([
						'Accessories',
						'Body',
						'Face',
						'FacialHair',
						'Hair',
					])}
				</ul>
			</div>
		);
	}, [pickedSection, renderPieceList]);
    
    return useMemo(() => {
		return (
			<div className='rigthMenu'>
				{renderSelectedPieceSet}
			</div>
		);
	}, [
		pickedSection,
		pickedAccessory,
		pickedBody,
		pickedFace,
		pickedFacialHair,
		pickedHair,
		scaleVector,
		isFrameTransparent,
	]);
}

export default Options;