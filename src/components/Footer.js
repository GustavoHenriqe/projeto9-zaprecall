import styled from "styled-components"

import { cards } from "../constants/cards"

export default function Footer({numberAnswered}) {
    return (
        <>
            <FooterStyled>
                <span>{numberAnswered}/{cards.length}</span>
            </FooterStyled>
        </>
    )
}

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 70px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    span {
        font-weight: 400;
        font-size: 29px;
        line-height: 22px;
    }
`