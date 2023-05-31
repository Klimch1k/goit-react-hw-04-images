import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [data, setData] = useState('');

  const handleDataChange = event => {
    setData(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (data.trim() === '') {
      alert('enter name');
      return;
    }
    onSubmit(data);
    setData('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={data}
          onChange={handleDataChange}
        />
      </SearchForm>
    </Header>
  );
}
