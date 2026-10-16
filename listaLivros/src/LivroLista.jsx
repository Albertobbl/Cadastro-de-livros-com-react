function LivroLista(props) {
  const livros = props.livros;

  return (
    <div>
      <h2>Livros Cadastrados</h2>

      {livros.length === 0 ? (
        <p>Nenhum livro cadastrado ainda.</p>
      ) : (
        <ul>
          {livros.map((livro, index) => (
            <li key={index}>
              <strong>Nome:</strong> {livro.nome} <br />
              <strong>Autor:</strong> {livro.autor} <br />
              <strong>Ano:</strong> {livro.ano} <br />
              <strong>Gênero:</strong> {livro.genero}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LivroLista;