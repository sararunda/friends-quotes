import AddInput from './AddInput';
const Footer = (props) => {
  return (
    <footer className="footer">
      <form action="" onChange={props.handleFormChange}>
        <h2>Añadir una nueva frase:</h2>
        <AddInput
          inputForm={props.inputForm}
          labelTex={'Frase'}
          inputId={'quote'}
          name={'quote'}
        />
        <label className="label" htmlFor="">
          Personaje
        </label>
        <input
          className="input"
          id="character"
          type="text"
          value={props.inputForm.character}
        />
        <input
          className="input"
          onClick={props.handleClickButton}
          type="button"
          value="Añadir una nueva frase"
        />
      </form>
    </footer>
  );
};
export default Footer;
