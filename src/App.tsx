import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Heading from './components/Heading';

function App() {
  const dishes = [
    { id: 1, name: 'tacos' },
    { id: 2, name: 'percheron' },
    { id: 3, name: 'pizza' },
    { id: 4, name: 'sushi' },
    { id: 5, name: 'ramen' },
  ]

  return <>
    <Heading name="Rafa" />
    <Content adjective="fucking delicious" dishes={dishes} />
    <Footer year={new Date().getFullYear()} />
  </>
}

export default App;
