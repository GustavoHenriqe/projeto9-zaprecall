import styled from 'styled-components'

import logo from '../assets/logo.png'

export default function Header () {
    return (
        <>
            <HeaderStyled>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </HeaderStyled>
        </>
    )
}

const HeaderStyled = styled.header `
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