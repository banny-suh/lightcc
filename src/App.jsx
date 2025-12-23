import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jesus from './pages/Jesus';
import Worship from './pages/Worship';
import Community from './pages/Community';
import Nurture from './pages/Nurture';
import Mission from './pages/Mission';
import Intro from './pages/Intro';
import News from './pages/News';
import Welcome from './pages/Welcome';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router basename="/lightcc">
      <ScrollToTop />
      <div className="App">
        {/* <TopBar /> */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jesus" element={<Jesus />} />
            <Route path="/worship" element={<Worship />} />
            <Route path="/community" element={<Community />} />
            <Route path="/nurture" element={<Nurture />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/news" element={<News />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
