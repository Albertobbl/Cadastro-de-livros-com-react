import { useState } from 'react';

function LivroForm(props) {
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const novoLivro = {
      nome: nome,
      autor: autor,
      ano: ano,
      genero: genero
    };

    props.adicionarLivro(novoLivro);

    setNome('');
    setAutor('');
    setAno('');
    setGenero('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Novo Livro</h2>
      
      <div>
        <label>Nome do Livro: </label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Autor: </label>
        <input 
          type="text" 
          value={autor} 
          onChange={(e) => setAutor(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Ano de Lançamento: </label>
        <input 
          type="number" 
          value={ano} 
          onChange={(e) => setAno(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Gênero: </label>
        <input 
          type="text" 
          value={genero} 
          onChange={(e) => setGenero(e.target.value)} 
          required 
        />
      </div>

      <button type="submit">Salvar Livro</button>
    </form>
  );
}

export default LivroForm;