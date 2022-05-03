import '../styles/App.scss';
import { useEffect, useState } from 'react';
// import charactersJson from './data/characters.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import getQuotes from '../service/fetch';

function App() {
  useEffect(
    () =>
      getQuotes().then((dataFromAPI) => {
        setCharacters(dataFromAPI);
      }),
    []
  );
  //states
  const [characters, setCharacters] = useState([]);
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
    setInputForm('');
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
          <p className="text">{data.quote}</p>
          <p className="text-name">{data.character}</p>
        </li>
      ));
  };
  return (
    <div className="body">
      <Header
        inputSearch={inputSearch}
        handleChangeFilter={handleChangeFilter}
        handleChangeSelect={handleChangeSelect}
      />
      <Main renderList={renderList} characters={characters} />
      <Footer
        handleFormChange={handleFormChange}
        inputForm={inputForm}
        handleClickButton={handleClickButton}
      />
    </div>
  );
}

export default App;
