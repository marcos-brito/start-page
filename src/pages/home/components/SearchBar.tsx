import styled from "styled-components";

const SearchInput = styled.input`
  font-size: 1.5rem;
  width: 80%;
  background-color: transparent;
  border: 2px solid #5a5a5a;
  border-radius: 8px;
  height: 75px;
  outline: none;
  padding: 1rem;
  color: #ddc7a1;
`;

function SearchBar() {
  return (
    <>
      <SearchInput type="text" placeholder="Search something" />
    </>
  );
}

export default SearchBar;
