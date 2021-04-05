import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useGroups from "./useGroups"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`

const Search = styled.input`
  border: 1px solid black;
  width: 300px;
  height: 20px;
`

const App = () => {
  const searchRef = useRef()
  const {groups, onSearch} = useGroups()
  const [currentSearch, setCurrentSearch] = useState("")
  const isEmpty = groups.length < 1
  const inValidInput = currentSearch.length < 3

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  useEffect(() => {
    if (!inValidInput) {
      onSearch(currentSearch)
    }
  }, [currentSearch])

  const handleChange = (event) => setCurrentSearch(event.target.value)


  return (
    <Container>
      <div>
        <Search ref={searchRef} value={currentSearch} onChange={handleChange} />
      </div>
      <div>
        {inValidInput && <div>keyword has to be up to 3 characters</div>}
        {!inValidInput && isEmpty && <div>No results found</div>}
        {!inValidInput && !isEmpty &&
          <div>
              {groups.map(({title, author = {}}) =>
              <div key={title} >
                <div>Title: {title}</div>
                <div><span>Author: {author.firstName}</span><span>Author: {author.surname}</span></div>
              </div>)}
            </div>}
      </div>
    </Container>)
};

export default App;
