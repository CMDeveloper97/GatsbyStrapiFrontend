import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react'
import { Icons } from '.';  
import { BackgroundImage } from './BackgroundImage';
import urlSlug from 'url-slug'

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`

const Content = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
`
 
const CardImage = styled.div`
    height:250px;
`;

export const PropiertyPreview = ({propierty}) => { 
	const {name, image, wc, parking, rooms, price} = propierty; 
	const imageToShow = getImage(image); 

	return (
		<Card>
            <CardImage className="imageContainer">
                <BackgroundImage
                    image={imageToShow}  
                />    
            </CardImage>               
			<Content>
				<h3>{name}</h3>
				<p className="price">$ {price}</p>
				<Icons
					wc={wc}
					parking={parking}
					rooms={rooms}
				/>  

                <Button to={ '/'+urlSlug(name)}>Visit propierty</Button>
			</Content>
		</Card>
	)
}
