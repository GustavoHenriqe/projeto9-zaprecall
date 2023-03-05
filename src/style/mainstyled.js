import styled from 'styled-components'

export const RespondQuestionStyled = styled.div`
    display: ${props => props.hiddenElement ? "block" : "none"};
    transform: rotateY(${props => props.animation ? "0deg" : "180deg"});

    transform-style: preserve-3d;
    width: 300px;
    min-height: 131px;
    transition: all 1s ease;

    .front {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background-color: #FFFFD4;
        border-radius: 5px;
        padding: 18px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

        button {
            border: none;
            background-color: #FFFFD4;
            cursor: pointer;
            position: relative;
            bottom: -60px;
            left: 220px;
        }
    }

    .back {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        background-color: #FFFFD4;
        transform: rotateY(180deg);
        border-radius: 5px;
        padding: 18px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

        .zaps-buttons {
            display: flex;
            width: 100%;
            gap: 6.80px;

            button {
                width: 85.17px;
                height: 37.17px;
                border-radius: 5px;
                border: none;
                color: #fff;
                cursor: pointer;
            }

            .red {
                background-color: ${props => props.colors[0]};
            }

            .yellow {
                background-color: ${props => props.colors[1]};
            }
            
            .green {
                background-color: ${props => props.colors[2]};
            }
        }
    }
`

export const QuestionsStyled = styled.div`
    display: ${props => props.hiddenElement ? "none" : "flex"};

    text-decoration: ${props => props.replied ? "line-through" : "none"};

    color: ${props => props.colorText === "" ? "#000" : props.colorText};

    align-items: center;
    padding-left: 22px;
    padding-right: 22px;
    justify-content: space-between;
    width: 300px;
    height: 65px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    span {
        font-weight: 700;
    }

    button {
        border: none;
        cursor: pointer;
        background-color: #fff;

        &:disabled {
                cursor: auto;
            }
    }
`

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 25px;
    margin-top: 59px;
    margin-bottom: 100px;
`