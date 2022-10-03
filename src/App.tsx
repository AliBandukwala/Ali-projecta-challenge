import './App.css';
import Registration from './Screens/Registration/Components/RegistrationForm/registrationForm';
import TitleBar from './Screens/Registration/Components/TitleBar/titleBar';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Registration />
    </div>
  );
}

export default App;
