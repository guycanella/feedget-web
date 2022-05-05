import { FeedbackTypes, feedbackTypes } from "../WidgetForm"
import CloseButton from "../../CloseButton"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackTypes) => void
}

const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackTypes)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col flex-1 items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

export default FeedbackTypeStep
