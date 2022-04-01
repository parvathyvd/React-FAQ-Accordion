import './App.css';
import Faq from './Faq';

function App() {
  return (
    <main>
     
      <div className="card__inner">
        <div className="card__details">
            <div className="bg__box">
            <img src="./images/illustration-box-desktop.svg" alt="illustration box desktop" />
            </div>
            <div className="bg__woman__desktop">
            <img src="./images/illustration-woman-online-desktop.svg" alt="illustration woman online desktop" />
            </div>
            <div className="bg__pattern__desktop">
          <img src="./images/bg-pattern-desktop.svg" alt="pattern" />
        </div>
        </div>
          <div className='faq__container'>
          <Faq/>
          </div>
      </div>  


    </main> 
  );
}

export default App;
