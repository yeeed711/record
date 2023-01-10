import { ICON } from '@constants'
import { mobile } from '@styles'
import NavBar from './NavBar'
import type { ReactElement } from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { useState } from 'react'

const MobileBtn = (): ReactElement => {
  const [isOpened, setIsOpened] = useState(false)
  const handleClick = (): void => {
    setIsOpened(prev => !prev)
  }

  return (
    <Container>
      <ICON.MENU onClick={handleClick} />
      {isOpened && (
        <MobileMenuContent>
          <SearchBar />
          <SubMenuContent>
            <NavBar />
          </SubMenuContent>
        </MobileMenuContent>
      )}
    </Container>
  )
}

export default MobileBtn

const Container = styled.div`
  display: none;
  ${mobile} {
    display: block;
  }
  svg {
    cursor: pointer;
  }
`

const MobileMenuContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.background_01};
`
const SubMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
