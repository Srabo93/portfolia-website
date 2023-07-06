import ContactButton from "./components/ContactButton";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <main className="lg:container mx-auto">
      <Hero />
      <Portfolio />
      <Expertise />
      <ContactButton />
    </main>
  );
}

/**
 * TODO:
 * Localization En-De
 * Add 'My Expertise' section , 3 columns, Software Dev, Frontend , Backend
 * opacity html Code background / terminal background
 *
 * */
export default App;
