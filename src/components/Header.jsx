function Header({ onChange }) {
  return (
    <div className="header">
      <h1>Studio Ghibli Films</h1>
      <label>
        Search: <input onChange={({ target: { value } }) => onChange(value)} />
      </label>
    </div>
  );
}

export default Header