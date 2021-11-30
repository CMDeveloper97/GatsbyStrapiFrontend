import { graphql, useStaticQuery } from "gatsby"

export const usePropierties = () => {
	const result = useStaticQuery(graphql`
		query {
			allStrapiPropierties{
				nodes{
					name
					description
					id
					wc
					price
					parking
					rooms
					category{
						name
					}
					agents{
						name
						phone
						email
					}
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
	`); 

	return result.allStrapiPropierties.nodes.map(node => ({
		...node,
		image: node.image.localFile
	}));
}