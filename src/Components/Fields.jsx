


export default function Fields({ label, name, type, value, onChange, placeholder }) {
  return (
    <div className="Form-Field">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
        required
      />
    </div>
  );
}
