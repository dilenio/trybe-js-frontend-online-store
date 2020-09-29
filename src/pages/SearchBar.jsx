import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="input-text" data-testid="home-initial-message">
        <input type="text" name="input-text" />
        Digite algum termo de pesquisa ou escolha uma categoria.
      </label>
    </div>
  );
}

export default SearchBar;