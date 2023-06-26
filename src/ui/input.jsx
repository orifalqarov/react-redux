const Input = ({ label, state, setState, type='text' }) => {
  return (
    <div className="form-floating mb-3">
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={label}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
