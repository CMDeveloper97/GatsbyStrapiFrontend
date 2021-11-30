import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'

const Image = styled(GatsbyImage)` 
	 width: 100%;
	 height: 100%;
	 z-index: 0; 
 `;

const ImageTextContainer = styled.div`
 	z-index: 10;
	text-align: center;
`

export const BackgroundImage = ({ image }) => {
	return (
		<Image
			alt=""
			placeholder="blurred"
			style={{ position: "absolute" }}
			image={image}
		/>
	)
}
