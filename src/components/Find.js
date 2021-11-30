import React from 'react'
import { getImage } from "gatsby-plugin-image" 
import { BackgroundImage } from './BackgroundImage'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled' 
import { css } from '@emotion/react';

const Title = styled.h3`
	 margin:0;
	 text-align: center;
	 color: white;
	 font-weight: bold;
`;

const SubTitle = styled(Title)`
	${Title};
	font-size: 3rem;
	font-weight: normal;
`

export const Find = () => {
	const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "encuentra.jpg"}) { 
                childImageSharp {
                  gatsbyImageData( 
					width: 1200 
					layout: FULL_WIDTH 
					placeholder: BLURRED
         			formats: [AUTO, WEBP, AVIF],  
				  )
                } 
            }
        }
    `)
	const imageToShow = getImage(image);  

	return (
		<div className="imageContainer" css={css`
			height:500px;
			@media (min-width: 768px) { 
				height:400px;
			}
		`}>
			<BackgroundImage
				image={imageToShow} 
			/>  
			<div className="backgroundText"> 
				<Title>Find your dreams house</Title>
				<SubTitle>15 years of experience</SubTitle> 
			</div>
		</div> 
	)
}
