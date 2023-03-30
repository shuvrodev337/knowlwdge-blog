import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';

function App() {


  return (
    <div className="App">
      <div>
      <Header></Header>
      </div>
      <div className="main row">
        <div className="blogs-container col-md-8">
          <Blogs></Blogs>
        </div>
        <div className="bookmark-section col-md-4 card">
          
        </div>
      </div>
    </div>
  )
}

export default App
