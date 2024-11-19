import { OtpInputComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  return (
    <div className="App">
      <OtpInputComponent length={5} type='text' 
      placeholder='vwxyz' separator='/' cssClass='e-error' disabled></OtpInputComponent>
    </div>
  );
}

export default App;
