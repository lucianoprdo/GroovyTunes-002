function Search() {
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isNameValid: boolean = name.trim().length >= 3;

  const handleSubmit = () => {
    setIsLoading(true);
    createUser({ name })
      .then(() => {
        setIsLoading(false);
      });
    localStorage.setItem('user', name);
  };

  return (
    <div className="container">
      <img src="../../../images/logo.svg" alt="Logotipo Trybetunes" />
      <form>
        <label htmlFor="nameInput">Nome:</label>
        <input
          className="input-login"
          type="text"
          id="nameInput"
          data-testid="login-name-input"
          value={ name }
          onChange={ handleChange }
        />

        <button
          className="btn-login"
          type="button"
          onClick={ handleSubmit }
          data-testid="login-submit-button"
          disabled={ !isNameValid }
        >
          {' '}
          Entrar
        </button>

      </form>
      {isLoading && <LoadingMessage />}
    </div>
  );
}

export default Search;
