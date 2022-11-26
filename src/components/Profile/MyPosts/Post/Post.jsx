import s from './MyPost.module.css'

const MyPost = (props) => {
return (
    <div>
    <div className={s.item}>
        <img className={s.img} src='https://avatars.dzeninfra.ru/get-zen_doc/5227693/pub_60f16eeb9cbaf06f68f20eb9_60f16f146169c246f9a1a121/scale_1200'></img>
      {props.message}
      <div>
      <span>Like</span>
      </div>
    </div>
    </div>
    )
}

    export default MyPost 