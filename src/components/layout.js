import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'


import './layout.css'

const Footer = styled.footer `
  text-align: center;
  border-top: 1px solid grey;
  padding-top: 5px;
  padding-bottom: 5px;
a{
  color:  #147ab2;
  text-decoration: none;
  align-items: center;
  
}

  
`

const BeforeMain = styled.main`
text-align: center; 
margin: 1rem auto;
a{
  color: #147ab2;
  text-decoration: none;
}
a:hover{
  color: black;
  text-decoration: none;
}
`
const MainLayout = styled.main`
max-width: 50%;
margin: 1rem auto;
display: grid;
grid-template-columns: 1fr; 

`


const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        
        <Header siteTitle={data.site.siteMetadata.title} />
      
        <BeforeMain>
     
        <h2 >Personal blog</h2>
        <p>You can find me in 
        &nbsp;<a href="">Linkedin,</a> 
        &nbsp;<a href="">ResearchGate,</a> 
        &nbsp;<a href="">Instagram</a> 
        </p>
        </BeforeMain>
        
        <MainLayout>
        <div>
          {children}
          </div> 
          
          </MainLayout>

          <Footer>
          <footer>
          <a href="">Github</a> 
          </footer>
          </Footer>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}
export default Layout
