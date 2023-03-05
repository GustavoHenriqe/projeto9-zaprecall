import { useState } from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import styled from 'styled-components'

function App() {
  const [numberAnswered, setAnsweredNumber] = useState(0)

  return (
    <>
      <ContainerStyled>
        <Header />
        <Main 
          numberAnsweredObject={{
            numberAnswered,
            setAnsweredNumber
          }}
        />
        <Footer 
          numberAnswered={numberAnswered} 
        />
      </ContainerStyled>
    </>
  )
}

export default App

const ContainerStyled = styled.main`
  width: 375px;
`