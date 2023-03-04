import { cards } from '../constants/cards'

import styled from 'styled-components'
import logo from '../assets/logo.png'

function App() {

  return (
    <>
      <Container>
        <Header>
          <img src={logo} />
          <h1>ZapRecall</h1>
        </Header> 
      </Container>
    </>
  )
}

export default App

const Container = styled.main`
  max-width: 375px;
`

const Header = styled.header `
  margin-top: 48px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-family: Righteous;
    font-size: 36px;
    color: #fff;
  }

  img {
    width: 52px;
    height: 60px;
  }
`