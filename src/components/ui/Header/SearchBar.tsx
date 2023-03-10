import { ICON } from '@constants'
import type { ReactElement } from 'react'
import styled from 'styled-components'

const SearchBar = (): ReactElement => {
  return (
    <SearchForm>
      <SearchInput type="search" placeholder="Search..." />
      <ICON.SEARCH />
    </SearchForm>
  )
}

export default SearchBar

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 3px 15px;
  border: 1px solid ${props => props.theme.colors.border_02};
  background-color: ${props => props.theme.colors.background_03};
  border-radius: 30px;
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;
  padding: 1px 5px;
  &::placeholder {
    color: ${props => props.theme.colors.text_02};
  }
`
