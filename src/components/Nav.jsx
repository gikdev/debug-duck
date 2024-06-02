import { Books, DotsThreeOutlineVertical, GithubLogo, Link } from "@phosphor-icons/react"

export default function Nav() {
  return (
    <nav className="navbar bg-base-100 border-b-2 border-base-200">
      <div className="navbar-start">
        <div className="grid grid-cols-[min-content_max-content] grid-rows-2 items-center gap-x-2">
          <div className="avatar row-span-2">
            <div className="size-10 rounded">
              <img src="https://wd-bahrami.storage.iran.liara.space/images/rubber-duck-avatar.png" alt="" />
            </div>
          </div>
          <span className="text-sm font-bold">اردک دیباگ</span>
          <span className="text-xs text-info">آنلاین</span>
        </div>
      </div>
      <div className="navbar-end">
        <div className="dropdown" dir="ltr">
          <button className="btn btn-ghost btn-circle">
            <DotsThreeOutlineVertical size={20} weight="duotone" color="currentColor" />
          </button>
          <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" dir="rtl">
            {/* <li>
              <span>
                <Books size={20} weight="duotone" color="currentColor" mirrored={true} />
                <span>راهنما / درباره</span>  
              </span>
            </li> */}
            <li>
              <a href="https://github.com/gikdev/">
                <GithubLogo size={20} weight="duotone" color="currentColor" mirrored={true} />
                <span>سازنده</span>  
                <Link size={20} weight="duotone" color="currentColor" mirrored={true} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
