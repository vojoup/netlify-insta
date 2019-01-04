import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/styles.css';

class IndexPage extends React.Component {
  state = {
    loading: false,
    msg: null,
  };

  greet = e => {
    e.preventDefault();
    this.setState({ loading: true });
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(({ msg }) => this.setState({ loading: false, msg }));
  };

  getInstagram = e => {
    e.preventDefault();
    this.setState({ loading: true });
    fetch('/.netlify/functions/instagram')
      .then(response => response.json())
      .then(data => {
        this.setState({ loading: false });
        console.log(data);
      });
  };

  render() {
    const { loading, msg } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <button onClick={this.greet}>
          {loading ? 'Loading' : 'Get greeted'}
        </button>
        {msg && <p>{msg}</p>}
        <button onClick={this.getInstagram}>
          {loading ? 'Loading' : 'Instagram'}
        </button>
      </Layout>
    );
  }
}

export default IndexPage;
