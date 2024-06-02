export default function ChatBubble({ children, isMine }) {
  return (
    <div className={`chat ${isMine ? "chat-start" : "chat-end"}`}>
      <div className={`chat-bubble leading-loose ${isMine ? "chat-bubble-primary" : ""}`}>{children}</div>
    </div>
  )
}
