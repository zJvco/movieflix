import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";

import "./style.css";

export default function Search(props) {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/search?q=${searchValue}`);

    setSearchValue("");
  }

  return (
    <form className='search-form' onSubmit={handleSearch}>
        <input
          type="search"
          placeholder={props.placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type='submit'>
          <AiOutlineSearch />
        </button>
    </form>
  )
}