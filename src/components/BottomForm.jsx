import { PaperPlaneRight } from "@phosphor-icons/react";

export default function BottomForm({ text, setText, formSubmissionHandler }) {
  return (
    <form className="flex w-full border-t-2 border-base-200" onSubmit={formSubmissionHandler}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} className="input shrink grow rounded-none" />
      <button className="btn btn-primary shrink-0 grow-0 rounded-none">
        <PaperPlaneRight size={20} weight="duotone" mirrored={true} />
      </button>
    </form>
  )
}