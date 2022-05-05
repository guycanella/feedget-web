import { useState } from "react"

import bugImgUrl from '../assets/images/bug.svg'
import ideaImgUrl from '../assets/images/idea.svg'
import thoughtImgUrl from '../assets/images/thought.svg'
import FeedbackTypeStep from "./Steps/FeedbackTypeStep"
import FeedbackContentStep from "./Steps/FeedbackContentStep"
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep"

export const feedbackTypes = {
  bug: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto'
    }
  },
  idea: {
    title: 'Ideia',
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  other: {
    title: 'Outro',
    image: {
      source: thoughtImgUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

export type FeedbackTypes = keyof typeof feedbackTypes

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartReq={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartReq={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a className="underline underline-offset-2" href="https://rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
  )
}

export default WidgetForm
