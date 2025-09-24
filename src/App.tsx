import { useState, useCallback, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ModulesPage } from './components/ModulesPage';
import { LessonPage } from './components/LessonPage';
import { RecentStudiesPage } from './components/RecentStudiesPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  // Load completed modules from localStorage on app start
  useEffect(() => {
    try {
      const saved = localStorage.getItem('completedModules');
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  }, []);

  // Save completed modules to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('completedModules', JSON.stringify(completedModules));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [completedModules]);

  const handleNavigation = useCallback((page: string, moduleId?: number) => {
    try {
      setCurrentPage(page);
      if (moduleId) {
        setSelectedModuleId(moduleId);
      }
    } catch (error) {
      console.error('Navigation error:', error);
      setCurrentPage('home');
    }
  }, []);

  const toggleModuleCompletion = useCallback((moduleId: number) => {
    setCompletedModules(prev => {
      if (prev.includes(moduleId)) {
        return prev.filter(id => id !== moduleId);
      } else {
        return [...prev, moduleId];
      }
    });
  }, []);

  const renderCurrentPage = () => {
    try {
      switch (currentPage) {
        case 'home':
          return <HomePage onNavigate={handleNavigation} />;
        case 'modules':
          return <ModulesPage onNavigate={handleNavigation} completedModules={completedModules} onToggleCompletion={toggleModuleCompletion} />;
        case 'recent':
          return <RecentStudiesPage onNavigate={handleNavigation} />;
        case 'about':
          return <AboutPage onNavigate={handleNavigation} />;
        case 'lesson':
          return <LessonPage moduleId={selectedModuleId || 1} onNavigate={handleNavigation} />;
        default:
          return <HomePage onNavigate={handleNavigation} />;
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigation} currentPage={currentPage} />
        <main>
          {renderCurrentPage()}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}