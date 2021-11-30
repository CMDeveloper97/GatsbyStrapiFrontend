import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';
import { Navigation } from '.';


export const Header = () => {

	const {file: {publicURL} } =  useStaticQuery(graphql`
		query {
			file(relativePath: {eq: "logo.svg"}){
				publicURL 
			}
		}
	`);  

	return (
		<header
            css={css`
                background-color: #0D283B; 
				padding: 1.2rem 1rem;
            `}
        >
			<div
				css={css`
					max-width: 120rem;
					margin: 0 auto;
					text-align: center;

					@media (min-width: 768px) {
						display:flex;
						align-items: center;
						justify-content: space-between;
					}

				`}
			>
				<Link to="/"> <img style={{maxWidth:'300px', display:'flex'}} src={publicURL}/></Link>
				<Navigation/>
			</div>
		</header>
	)
}
