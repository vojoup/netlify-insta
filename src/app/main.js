import React from 'react';
import { getUser } from '../services/auth';

class Main extends React.Component {
  state = {
    loading: false,
    msg: null,
    insta: null,
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
        this.setState({ loading: false, insta: data });
        console.log(data);
      });
  };

  renderPosts(insta) {
    return insta.map(
      (
        {
          images: {
            caption,
            standard_resolution: { url },
          },
        },
        i
      ) => <img src={url} alt={caption} key={i} />
    );
  }

  render() {
    const { loading, insta, msg } = this.state;
    const user = getUser();
    return (
      <>
        <h1>Your Main App</h1>
        <ul>
          <li>API: {user.api && user.api.apiURL}</li>
          <li>ID: {user.id}</li>
        </ul>
        <hr />

        <button onClick={this.greet}>
          {loading ? 'Loading' : 'Get greeted'}
        </button>
        {msg && <p>{msg}</p>}
        <button onClick={this.getInstagram}>
          {loading ? 'Loading' : 'Instagram'}
        </button>
        {insta && this.renderPosts(insta)}
      </>
    );
  }
}

export default Main;
