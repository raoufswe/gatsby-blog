import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
 
const LISTING_QUERY = graphql`
        query BlogPostLIsting{
                        allMarkdownRemark(limit: 10, sort: {
                            order: DESC,
                            fields: [frontmatter___date]
                        }) { 
                            edges{
                                node {
                                excerpt
                                    frontmatter {
                                        date(formatString: "MMMM DD, YYYY")
                                        title
                                        slug
                                        description
                            
                            }
                        }
                    }
                }
            }
`
const Post = styled.article`
box-shadow: 0px 7px 15px rgb(25,17,34,0.05);
padding: 1rem;
border-radius: 4px;
margin-bottom: 1rem; 
:hover {
    box-shadow: 0 5px 15px grey;
    transform: scale(1, 1);
}

a {
    text-decoration: none;
    
}

h2{
    margin-bottom: 0; 
    color: #147ab2;
    padding-bottom: 0.5rem;
}
h2:hover {
  color: black;

}
p {
    font-size: 0.9rem;
}
`
const Listing = () => (
    <StaticQuery 
    query= {LISTING_QUERY}
    render = {({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(edge => (
            <Post key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <p><strong>{edge.node.frontmatter.date}</strong></p>
            <p>{edge.node.frontmatter.description}</p>
            </Post>
        ))
    )}
    

    />
)

export default Listing
