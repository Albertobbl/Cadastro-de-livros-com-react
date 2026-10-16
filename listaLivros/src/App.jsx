import { useState } from 'react';
import LivroForm from './LivroFrom';
import LivroLista from './LivroLista';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);
  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
  };

  return (
    <div className="container">
      <h1>Biblioteca React</h1>
      
      <LivroForm adicionarLivro={adicionarLivro} />

      <hr />
      
      <LivroLista livros={livros} />
    </div>
  );
}

export default App;
