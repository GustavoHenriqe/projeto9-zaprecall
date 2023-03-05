import { MainStyled, QuestionsStyled, RespondQuestionStyled } from '../style/mainstyled'

import { useState } from 'react'

import { cards, colors } from '../constants/cards'

import seta_play from '../assets/seta_play.png'
import seta_virar from '../assets/seta_virar.png'
import icone_certo from '../assets/icone_certo.png'
import icone_erro from '../assets/icone_erro.png'
import icone_quase from '../assets/icone_quase.png'

export default function Main({numberAnsweredObject}) {
    return (
        <>
            <MainStyled>
                {cards.map(info =>
                    <Cards
                        numberAnsweredObject={numberAnsweredObject}
                        id={info.id}
                        questions={info.question}
                        answer={info.answer}
                        key={info.id}
                    />
                )}
            </MainStyled>
        </>
    )
}

function Cards({ id, questions, answer, numberAnsweredObject }) {
    const [animation, setAnimation] = useState(true)
    const [hiddenElement, setHiddenElement] = useState(false)
    const [replied, setReplied] = useState(false)

    const [colorText, setColorText] = useState("")
    const [imageDecoration, setImageDecoration] = useState("")

    const repliedSucess = (color, image) => {

        setReplied(true)
        setColorText(color)
        setImageDecoration(image)
        setHiddenElement(false)
        numberAnsweredObject.setAnsweredNumber(numberAnsweredObject.numberAnswered + 1)
    }

    return (
        <>
            <QuestionsStyled
                hiddenElement={hiddenElement}
                replied={replied}
                colorText={colorText}
            >
                <span>Pergunta {id}</span>
                <button
                    onClick={() => setHiddenElement(true)}
                    disabled={replied}
                >
                    <img src={imageDecoration === "" ? seta_play : imageDecoration} />
                </button>
            </QuestionsStyled>

            <RespondQuestionStyled
                animation={animation}
                hiddenElement={hiddenElement}
                colors={colors}
            >
                <div className="front">
                    <p>
                        {questions}
                    </p>
                    <button onClick={() => setAnimation(false)}>
                        <img src={seta_virar} />
                    </button>
                </div>
                <div className="back">
                    <p>
                        {answer}
                    </p>
                    <div className="zaps-buttons">
                        <button
                            className="red"
                            onClick={() => repliedSucess(colors[0], icone_erro)}
                        >
                            Não Lembrei
                        </button>

                        <button
                            className="yellow"
                            onClick={() => repliedSucess(colors[1], icone_quase)}
                        >
                            Quase Não Lembrei
                        </button>

                        <button
                            className="green"
                            onClick={() => repliedSucess(colors[2], icone_certo)}
                        >
                            Zap!
                        </button>
                    </div>
                </div>
            </RespondQuestionStyled>
        </>
    )
}