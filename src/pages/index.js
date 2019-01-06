import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/styles.css';

class IndexPage extends React.Component {
  render() {
    const { loading, msg, insta } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ul>
          <li>
            <Link to="/page-2/">Go to page 2</Link>
          </li>
          <li>
            <Link to="/app">See the dynamic page!</Link>
          </li>
        </ul>
      </Layout>
    );
  }
}

export default IndexPage;
