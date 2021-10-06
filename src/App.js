import Profile from './components/Profile'
import Repos from './components/Repos'

function App() {
  return (
    <div className="App lg:container mx-auto p-4 md:grid md:grid-cols-30-70 gap-8">
      <Profile></Profile>
      <Repos></Repos>
    </div>
  );
}

export default App;
