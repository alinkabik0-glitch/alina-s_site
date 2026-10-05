import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LecturersPage from './pages/LecturersPage/LecturersPage';
import LecturerPage from './pages/LecturerPage/LecturerPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import About from './components/About/About';
import Partners from './components/Partners/Partners';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedLecturerId, setSelectedLecturerId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const parts = hash.split('/');
      
      if (parts[0] === 'lecturer' && parts[1]) {
        setCurrentPage('lecturer');
        setSelectedLecturerId(parseInt(parts[1]));
      } else {
        setCurrentPage(parts[0] || 'home');
        setSelectedLecturerId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, lecturerId?: number) => {
    if (lecturerId) {
      window.location.hash = `lecturer/${lecturerId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'lecturers':
        return <LecturersPage onNavigate={navigateTo} />;
      case 'lecturer':
        if (selectedLecturerId !== null) {
          return <LecturerPage lecturerId={selectedLecturerId} onNavigate={navigateTo} />;
        }
        return <HomePage onNavigate={navigateTo} />;
      case 'contacts':
        return <ContactsPage />;
      case 'about':
        return <About />;
      case 'partners':
        return <Partners />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <Header onNavigate={navigateTo} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;