import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'


const HeaderWrapper = styled.div`

`;

const HeaderContainer =styled.div `
        margin: auto;
        max-width: 960px;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid grey;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
  <HeaderContainer>
      <h1 style={{ margin: 0, }}>
        <Link
          to="/"
          style={{
            color: `#147ab2`,
            textDecoration: `none`,
          }}
        >
         Gatsby Blog
        </Link>
      </h1>
      </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
