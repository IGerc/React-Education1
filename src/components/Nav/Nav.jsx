import s from './Nav.module.css'

const Nav = () => {
    return (
      <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
      <a>profile</a>
      </div>
      <div className={s.item}>
        <a>Messages</a>
      </div>
      <div className={s.item}>
        <a>news</a>
      </div>
      <div className={s.item}>
        <a>settings</a>
      </div>
    </nav>
    )
}

export default Nav