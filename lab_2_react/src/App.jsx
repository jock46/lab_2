import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans p-4 sm:p-8 md:p-12 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition shadow-sm ${
              isDark
                ? 'bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
            }`}
          >
            {isDark ? '☀️ Денний режим (07:00–21:00)' : '🌙 Нічний режим'}
          </button>
        </div>

        <Header />
        <About />

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <Education />
            <Skills />
          </div>
          <div className="md:col-span-2 space-y-6">
            <Experience />
            <Reviews />
          </div>
        </main>

        <Footer />
        <ContactModal />
      </div>
    </div>
  );
}

export default App;