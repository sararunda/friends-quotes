import '../styles/App.scss';
import { useState } from 'react';
import charactersJson from './data/characters.json';

function App() {
  //states
  const [characters, setCharacters] = useState(charactersJson);
  const [inputForm, setInputForm] = useState({
    quote: '',
    character: '',
  });
  const [inputSearch, setInputSearch] = useState('');
  const [select, setSelect] = useState('');

  //funciones manejadoras
  const handleFormChange = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;

    setInputForm({
      ...inputForm,
      [inputId]: inputValue,
    });
  };
  const handleClickButton = (event) => {
    event.preventDefault();
    setCharacters([...characters, inputForm]);
  };
  const handleChangeFilter = (event) => {
    const inputValueSearch = event.target.value;
    setInputSearch(inputValueSearch);
  };
  const handleChangeSelect = (event) => {
    event.preventDefault();
    const selectValue = event.currentTarget.value;
    setSelect(selectValue);
    console.log(selectValue);
  };
  //render function
  const renderList = () => {
    return characters
      .filter((user) =>
        user.quote.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())
      )
      .filter((user) =>
        user.character.toLocaleLowerCase().includes(select.toLocaleLowerCase())
      )

      .map((data, index) => (
        <li key={index} className="character__item">
          <p>{data.quote}</p>
          <p>{data.character}</p>
        </li>
      ));
  };
  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
        <label htmlFor="">Filtrar por frase</label>
        <input type="text" onChange={handleChangeFilter} />
        <label htmlFor="">Filtrar por personaje</label>
        <select name="" id="select" onChange={handleChangeSelect}>
          <option value="todos">Todos</option>
          <option value="ross">Ross</option>
          <option value="monica">Monica</option>
          <option value="joey">Joey</option>
          <option value="phoebe">Phoebe</option>
          <option value="chandler">Chandler</option>
          <option value="rachel">Rachel</option>
        </select>
      </header>
      <main>
        <ul>{renderList()}</ul>
        <form action="" onChange={handleFormChange}>
          <h2>Añadir una nueva frase:</h2>
          <label htmlFor="">frase</label>
          <input id="quote" type="text" value={inputForm.quote} />
          <label htmlFor="">Personaje</label>
          <input id="character" type="text" value={inputForm.character} />
          <input
            onClick={handleClickButton}
            type="button"
            value="Añadir una nueva frase"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
