import s from './Profile.module.css'
import MyPosts from './MyPosts/Post/MyPosts'

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src='https://wp-s.ru/wallpapers/9/17/322057789001671/kontrastnyj-pejzazh-krasnoe-nebo-s-tuchami-i-zel-noe-pole.jpg'>
        </img>
        </div>
        <MyPosts />
        </div> 
        
    )
}

export default Profile