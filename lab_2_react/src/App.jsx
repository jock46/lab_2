import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <ContactForm />
      </main>
      <hr />
      <Footer />
    </div>
  );
}

export default App;