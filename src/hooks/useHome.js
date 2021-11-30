import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

export const useHome = () => {
	const result = useStaticQuery(graphql`
	query {
		allStrapiPages(filter: {name: {eq: "Home"}}){
	  	nodes{
			id
			name
			content,
			image{
				localFile {
                childImageSharp {
                  gatsbyImageData( 
					width: 1200 
					layout: FULL_WIDTH 
					placeholder: BLURRED
         			formats: [AUTO, WEBP, AVIF], 
					transformOptions : {
						duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                        }
					}
				  )
                }
              }
			}
	  	}
	}
}
`)
	return result.allStrapiPages.nodes.map(home => ({
		name: home.name,
		content: home.content,
		image: home.image
	}));
}
