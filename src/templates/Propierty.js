import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { BackgroundImage, Icons, Layout } from '../components';

const Content = styled.div`
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

const Sidebar = styled.aside`
  .price{
    font-size: 2rem;
    color: #75AB00;
  }
  .agent{
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75AB00;
    padding:3rem;
    color: #FFF;
    
    p{
      margin:0;
    }

  }
`;

export const query = graphql`
   query($id: String ) {
    allStrapiPropierties(filter: {id: {eq: $id}}){
      nodes{
        name
        parking
        description 
        price
        wc
        rooms
        agents{
          name
          phone
          email
        } 
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
const Propierty = ({ data: { allStrapiPropierties: {nodes} } }) => {

  console.log(nodes)

  const {name, description, price, parking, rooms, wc, agents, image} = nodes[0];
  const imageToShow = getImage(image.localFile);
  
  return (
    <div>
      <Layout>
        <Title>{name}</Title>
        <Content>
          <main> 
            <GatsbyImage image={imageToShow}  />
            <p>{description}</p>
          </main>
          <Sidebar>
            <p className="price">$ {price}</p>
            <Icons
              wc={wc}
              parking={parking}
              rooms={rooms}
            />  
            <div className="agent">
              <h2>Vendedor</h2>
              <p>{agents.name}</p>
              <p>{agents.phone}</p>
              <p>{agents.email}</p>
            </div>
          </Sidebar>
        </Content>

      </Layout>
    </div>
  )
}


export default Propierty;