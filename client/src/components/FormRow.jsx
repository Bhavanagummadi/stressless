
const FormRow = ({type,name,defaultName,labelName}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelName}
      </label>
      <input
        type={type}
        className="form-input"
        id={name}
        name={name}
        defaultValue={defaultName}
        required
      ></input>
    </div>
  );
}
export default FormRow
