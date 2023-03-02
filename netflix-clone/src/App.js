import Header from "./Components/Header"
import Main from "./Components/Main"
import Data from './Components/Data.json'
const App = ()=>{
  return(
    <>
      <Header />
      <div className="main">
        {
          Data.map((element, index)=>{
            return(
              <Main 
                key={index}
                imgId={element.Img} 
                title={element.Title}
                year={element.year}
                author = {element.Author}
                link = {element.link}
              />
            )
          })
        }
      </div>
      
    </>
  )
}

export default App