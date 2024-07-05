import React from 'react'

function Searcher({ search, setSearch, users }) {

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className='container-table flex w-full'>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        className="form-control"
      />
    </div>
  )
}

export default Searcher;
