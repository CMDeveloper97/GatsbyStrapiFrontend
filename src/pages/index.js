import React from 'react'
import { Layout } from '../components';
import { useHome } from '../hooks/useHome';
import { css } from '@emotion/react';
import {  getImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';
import '../styles/global.css'
import { Find } from '../components/Find';
import { PropiertiesList } from '../components/PropiertiesList';
import { BackgroundImage } from '../components/BackgroundImage';
 
const HeaderText = styled.h1` 
	color: white;  
	font-size: 4rem;
	max-width: 700px;  
`;

const Index = () => {
	const home = useHome();  
	const { name, content, image } = home[0];  
	const imageToShow = getImage(image.localFile);  

	return (
		<Layout>    
			<div className="imageContainer" css={css`height:500px;`}>
				<BackgroundImage
					image={imageToShow} 
				/>  
				<div className="backgroundText"> 
					<HeaderText>Sales of exclusive houses and departaments</HeaderText> 
				</div>
			</div>

			<main>
                <div css={css`
                        max-width: 800px;
                        margin: 3rem auto 5rem auto;
                    `}
                >
                    <h1>{name}</h1>
                    <p css={css`
                        text-align: center;
                    `}>{content}</p>
                </div>
            </main>

			<Find />
			<PropiertiesList/>
		</Layout>
	)
}

export default Index;