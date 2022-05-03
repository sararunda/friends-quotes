const AddInput = (props) => {
  return (
    <>
      <label className="label" htmlFor="">
        {props.labelTex}
      </label>
      <input
        className="input"
        id={props.inputId}
        type="text"
        value={props.inputForm.quote}
      />
    </>
  );
};
export default AddInput;
