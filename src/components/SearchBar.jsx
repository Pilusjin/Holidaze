import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 80%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SearchBar = ({ data, setFilteredResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredResults(data);
    } else {
      const results = data.filter(
        (venue) =>
          venue.name && venue.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredResults(results);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
