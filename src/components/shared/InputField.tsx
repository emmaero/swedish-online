import iInputFields from '../../interfaces/iInputFields';

export default function InputField({ options, state }: iInputFields) {
  const [getter, setter] = state;
  const { instructions, label, placeholder, type } = options;
  return (

      <label>
              <b>{label}:</b>
              <br />
        {instructions && <small>{instructions}</small>}
        <input
          type={type}
          placeholder={placeholder}
          value={getter}
          onChange={(event) => setter(event.target.value)}
        />
      </label>
 
  );
}
