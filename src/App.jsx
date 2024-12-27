import './index.css';  
import Cards from './components/Cards';  

function App() {

  return (
    <>
      <div className="bg-intergalacticHighway font-splineSansMono h-screen flex flex-col items-center justify-center">
        <h1 className="md:text-2xl xs:text-base mb-4 text-center text-durantaYellow">Memory Game</h1> 
        <div className="flex items-center justify-center">
          <Cards />
        </div>
        <p className="md:text-xl xs:text-sm text-cloudDancer mt-10">Created by Sophia Salta<br></br>View more projects <a href="https://sophiasalta.me" className="font-semibold hover:underline" target="_blank">here</a></p>
      </div>
    </>
  )
}

export default App
