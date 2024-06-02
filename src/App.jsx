// Importing libraries, components & assets
import { useState } from "react"
import useSound from "use-sound"
import Message from "./lib/Message"
import useDuckMsg from "./lib/useDuckMsg"
import duckSound from "./assets/duck.mp3"
import Nav from "./components/Nav"
import ChatBubble from "./components/ChatBubble"
import EmptyCard from "./components/EmptyCard"
import BottomForm from "./components/BottomForm"

export default function App() {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")
  const [playSound] = useSound(duckSound, { volume: 0.2 })
  const duckMsg = useDuckMsg()
  const isThereAMsg = !!messages.length

  const formSubmissionHandler = e => {
    e.preventDefault()
    if (!text.trim().length) return

    let tempMessages = JSON.parse(JSON.stringify(messages))
    tempMessages.push(new Message(text, true))
    tempMessages.push(new Message(duckMsg, false))
    setMessages(tempMessages)
    playSound()
    setText("")
  }

  return (
    <>
      <Nav />
      <main className="grow shrink flex flex-col-reverse overflow-y-auto bg-base-100">
        <section className="flex flex-col py-5 h-fit">
          {isThereAMsg &&
            messages.map(({ id, isMine, content }) => (
              <ChatBubble key={id} isMine={isMine}>
                {content}
              </ChatBubble>
            ))}
          {!isThereAMsg && <EmptyCard />}
        </section>
      </main>
      <BottomForm formSubmissionHandler={formSubmissionHandler} text={text} setText={setText} />
    </>
  )
}
