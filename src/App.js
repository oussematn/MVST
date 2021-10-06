import Profile from './components/Profile'
import Repos from './components/Repos'

function App() {
  return (
    <div className="App md:container mx-auto p-4">
      <Profile></Profile>
      <Repos></Repos>
    </div>
  );
}

export default App;
