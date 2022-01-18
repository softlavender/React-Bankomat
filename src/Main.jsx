import Bankomat from "./bankomat/Bankomat";

const Main = ({usingService, updServiceStatus}) => {
  console.log(usingService);

  return (
  <>
    {usingService ? <Bankomat /> : <span id="welcome">Welcome, start the ATM-Service by the <b>"Show Service"</b> button</span>}
    
    <button id='service-btn' onClick={updServiceStatus}>
      {usingService ? 'hide' : 'show'} service
    </button>
  </>
  )
}
export default Main