export default function EmptyCard() {
  return (
    <div className="card card-bordered shadow-xl max-w-80 text-center bg-base-200 my-10 mx-auto w-full">
      <figure>
        <img src="https://wd-bahrami.storage.iran.liara.space/images/empty-box-and-fly.png" alt="" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">هنوز خبری نیس!</h2>
        <p>یه پیام بده و چت رو شروع کن!</p>
      </div>
    </div>
  )
}
