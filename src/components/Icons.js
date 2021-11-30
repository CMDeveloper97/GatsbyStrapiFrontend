import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;


export const Icons = ({ wc, parking, rooms }) => {
	const { icons } = useStaticQuery( graphql`
	query {
		icons: allFile(filter: { relativeDirectory: { eq: "icons"}}) {
			edges {
				node {
					id
					publicURL
				}
			}
		}
	}
`)



const iconsImages = icons.edges;


	return (
		<ListadoIconos>
		 <li> 
             <img src={iconsImages[2].node.publicURL} alt="icon wc" />
                <p>{wc}</p>
            </li>
            <li> 
               <img src={iconsImages[1].node.publicURL} alt="icon parking" />
                <p>{parking}</p>
            </li>
            <li> 
               <img src={iconsImages[0].node.publicURL} alt="icon rooms" />
                <p>{rooms}</p>
            </li>
		</ListadoIconos>
	)
}
