import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src='https://wp-s.ru/wallpapers/9/17/322057789001671/kontrastnyj-pejzazh-krasnoe-nebo-s-tuchami-i-zel-noe-pole.jpg'>
        </img>
        </div>
        <div>
          ava + discr
        </div>
        <div>
          my post
          <div>
            new post
          </div>
          <div className={s.posts}>
          <div className={s.item}>
            post1
          </div>
          <div className={s.item}>
            post 2
          </div>
          </div>
        </div>
        </div> 

    )
}

export default Profile