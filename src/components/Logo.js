import { Component } from 'react';

const styles = {
  logo: {
    fontWeight: '700',
    fontSize: '1rem',
    maxWidth: '90px',
  },

  img: {
    maxWidth: '100%',
  },
};

class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        <img src='/img/logo.jpeg' alt='Casa Ely' style={styles.img} />
      </div>
    );
  }
}

export default Logo;
