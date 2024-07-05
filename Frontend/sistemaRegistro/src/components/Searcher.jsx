import React from 'react'

function Searcher({ search, setSearch, users }) {

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className='container-table flex max-lg:mt-2 w-[50%] max-lg:w-full'>
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
