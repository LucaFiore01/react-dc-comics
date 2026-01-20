// importazione contenuti
import MainHeader from "./components/MainHeader"
import MainContent from "./components/MainContent"
import BlueIconsSection from "./components/BlueIconSection"
import MainFooter from "./components/MainFooter"
import ComicCard from "./components/ComicCard"


function App() {

  return (
    <>
      <MainHeader />
      <div className="jumbotron" />
      <MainContent />
      <BlueIconsSection />
      <MainFooter />
    </>
  )
}

export default App 
