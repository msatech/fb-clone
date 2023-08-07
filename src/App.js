
import './App.css';
import Header from './components/Header/HeaderComponent.js';
import Sidebar from './components/Sidebar/SidebarComponent.js';
import Feed from './components/Feed/FeedComponent.js';
import Widget from './components/Widgets/Widget.js';
import Login from './components/Login/Login.js';
import { useStateValue } from './ContextApi/StateProvider.js'

function App() {

  const [{ user }, dispatch] = useStateValue()
  

  return (
    <div className="App">
      {!user ? (
        <Login />
      ): (
          <div>
            <Header />
      <div className="app__body">
        <Sidebar />
          <Feed />
        < Widget />
          
            {/* Feed */}
            {/* widgets */}
      </div>
      {/* App Body */}
          </div>
      )}
      
      
        
    </div>
  );
}

export default App;
