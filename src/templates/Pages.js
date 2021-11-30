import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { Layout } from '../components'; 
import { PropiertiesList } from '../components/PropiertiesList';

const ContentPage = styled.div`
  max-width: 1200px;
    margin: 0 auto;
    width:95%;

    @media(min-width: 768px){
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 5rem;
    }

`

const Title = styled.h1`
  margin: 1rem 0;
  font-weight: bold;
`; 

export const query = graphql` 
query($id: String) {
  allStrapiPages(filter: {id: {eq: $id}}){
		nodes{
			name
      content
      id
      image{
          localFile {
                childImageSharp {                  
                  gatsbyImageData(    
					          layout: FULL_WIDTH 
					          placeholder: BLURRED
         			      formats: [AUTO, WEBP, AVIF],  
				  )
                }
              }
        }
    }
  }
}
`
 

const Page = ({ data: { allStrapiPages: {nodes} } }) => {

  console.log(nodes)

  const {name, content, image} = nodes[0];
  const imageToShow = getImage(image.localFile);
  
  return (
    <div>
      <Layout> 
          <main className="container">  
           <Title>{name}</Title>
            <ContentPage> 
              <p>{content}</p>
              <GatsbyImage image={imageToShow}  />
            </ContentPage> 
          </main>   

        {name === 'Propierties' && <PropiertiesList/>}

      </Layout>
    </div>
  )
}


export default Page;