import React, { Component } from 'react';
import {Link} from 'gatsby'; 
import Layout from './layout';
import styled from 'styled-components'


const Homebutton = styled.p`
color: #147ab2; 
text-align: center;

`
class postLayout extends Component {
    render() {
        const {markdownRemark} = this.props.data;
        const {location} = this.props; 
        return (
            <Layout location={location}>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }}/>
                <Homebutton>
                <Link to="/">
                 Home
                </Link>
                </Homebutton>
            </Layout>
        );
    }
}

export default postLayout;
export const query = graphql `
   query PostQuery($slug: String){
        markdownRemark(frontmatter: {
        slug: {
            eq: $slug
        }
        }) {
        html
        frontmatter{
            title
            date
            slug
        }
        }
    }
`