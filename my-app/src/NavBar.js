import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(function(page){
      return (
        <li><a href={'/' + page}>
          {page}
        </a></li>
      )
    });

    return <ul className="nav nav-pills">{navLinks}</ul>;
  }
}

export default NavBar;