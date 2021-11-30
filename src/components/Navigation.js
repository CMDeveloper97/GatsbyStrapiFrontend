import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled'; 
import urlSlug from 'url-slug'


const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	padding-bottom: 3rem;

	@media (min-width:768px) {
		padding:0;
		flex-direction: row;
	}
`;

const NavLink = styled(Link)`
  	color: #FFF;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
    &.actual-page {
        border-bottom: 2px solid #FFF;
    }
`; 


export const Navigation = () => {

	const result = useStaticQuery(graphql`
        query {
			allStrapiPages(filter:{name: { ne:"Home" }}){
				nodes{
					name
			  id
			}
        }
		}
    `);
 
	const pages = result.allStrapiPages.nodes;

	console.log(pages);

	return (
		<Nav>
			<NavLink activeClassName="actual-page" to="/">Home</NavLink>
			{pages.map(page => ( 
				<NavLink key={page.id} activeClassName="actual-page" to={`/${urlSlug(page.name)}`}>{page.name}</NavLink>
			))}
			{/* 
			<NavLink activeClassName="actual-page" to="/about">About</NavLink>
			<NavLink activeClassName="actual-page" to="/propierties">Propierties</NavLink> */}
		</Nav>
	)
}
