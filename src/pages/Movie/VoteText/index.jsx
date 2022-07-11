import React from 'react'
import { FaStar } from 'react-icons/fa';

import "./style.css";

function VoteText({ avg }) {
  return (
    <span className='vote-text'>
      <FaStar />
      {avg}
    </span>
  )
}

export default VoteText