import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer'; // [cite: 127]

function App() {
  return (
    <div>
      <Header />
      <main>
        <Education />
        <Skills />
      </main>
      <Footer /> {/* [cite: 134, 135] */}
    </div>
  );
}

export default App; // [cite: 138]
