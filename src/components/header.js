import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
const netlifyIdentity = require('netlify-identity-widget');

class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init();
  }

  render() {
    const { siteTitle } = this.props;
    return (
      <div className="header-wrapper">
        <div className="header">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div data-netlify-identity-menu />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
