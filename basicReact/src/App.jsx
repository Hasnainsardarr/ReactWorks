import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"

function App() {
  

  return (
    <>
     <Navbar/>
     <div className="cards">
      <Card title= "Card1" description = "this is card 1"/>
      <Card title= "Card2" description = "this is card 2"/>
      <Card title= "Card3" description = "this is card 3"/>
      <Card title= "Card4" description = "this is card 4"/>
     </div>
     <Footer/>
    </>
  )
}

export default App
