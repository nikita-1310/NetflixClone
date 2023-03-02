import './Main.css'
const Main = (props) => {
  return (
        <div className="container">
            <div className='box'>
                <img src={props.imgId} alt="" />
                <h2>{props.title}</h2>
                <h2>{props.author}</h2>
                <h2>{props.year}</h2>
                <h2><a href={props.link}>Watch Series</a></h2>
            </div>
        </div>
  )
}

export default Main