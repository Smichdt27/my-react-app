import "./App.css"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import "./Components/Navbar.css"
import "./Components/Footer.css"
import "./Components/Card.css"
import Forest from "./assets/Forest.jpg"

function App() {

  return (
    <>
      <Navbar />
      {/* <Card title="Title1" text="Text1"/>
      <Card title="Title2" text="Text2"/>
      <Card title="Title3" text="Text3"/>
      <Card title="Title4" text="Text4"/>
      <Card title="Title5" text="Text5"/>
      <Card title="Title6" text="Text6"/>
      <Card title="Title7" text="Text7"/>
      <Card title="Title8" text="Text8"/>
      <Card title="Title9" text="Text9"/>
      <Card title="Title10" text="Text10"/> */}
      <Card cardtitle="Title1" buttoncontent="Press" />
      <Card cardtitle="Title2" buttoncontent="Me" />
      <Card cardtitle="Title3" buttoncontent="Once" />
      <Card cardtitle="Title4" buttoncontent="Twice" />
      <Card cardtitle="Title5" buttoncontent="Thrice" />
      <Card cardtitle="Title6" buttoncontent="Fourth" />
      <Card cardtitle="Title7" buttoncontent="Fifth" />
      <Card cardtitle="Title8" buttoncontent="Sixth" />
      <Footer />
    </>
  )
}

export default App
