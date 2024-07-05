import React from 'react'

function Searcher({ search, setSearch, users }) {

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className='container-table flex  w-[50%]'>
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={handleSearch}
        className="form-control flex justify-center items-center"
      />
    </div>
  )
}

export default Searcher;
