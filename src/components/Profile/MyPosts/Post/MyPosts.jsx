import s from './MyPosts.module.css'
import MyPost from './Post'

const MyPosts = () => {
return(
    <div>
    my posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
        <MyPost message ='Hi, how are you'/>
        <MyPost message = 'Its my first post'/>
    </div>
    </div>
)
}

export default MyPosts