import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Component to handle conditional rendering of Header/Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Header />}
      <main>
        {children}
      </main>
      {!isAdmin && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router basename="/lightcc">
      <ScrollToTop />
      <div className="App">
        {/* <TopBar /> */}
        <Layout>
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
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
