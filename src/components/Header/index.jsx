import React from 'react';
import { BiCameraMovie } from "react-icons/bi";

import Search from '../Search';

import "./style.css";

export default function Header() {
  return (
    <header>
        <div className='header-title'>
          <a href="/">
            <BiCameraMovie style={{
              fontSize: "2rem",
              marginRight: "5px"
            }} />
              <h1>Movieflix</h1>
          </a>
        </div>
        <Search placeholder="Search for a movie..." />
    </header>
  );
}