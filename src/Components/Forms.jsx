
import { useState } from 'react';
import Fields from './Fields';
import SubmitButton from './SubmitButton';
import Picture from './Picture'
import Submitted from './Submitted';


export default function Forms() {
  const [isSubmitted, SetSubmitted] = useState(false);
  const [form, SetForm] = useState({
    FirstName: '',
    LastName: '',
    Phone: '',
    Email: '',
    Price: '',
    Pin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Phone') {
      const CleanPhone = value.replace(/\D/g, '').slice(0, 10);
      SetForm((prev) => ({ ...prev, [name]: CleanPhone }));
    } 
    else if (name === 'Pin') {
      const cleaned = value.replace(/\D/g, '').slice(0, 16);
      const formatted = cleaned.match(/.{1,4}/g)?.join('-') || '';
      SetForm((prev) => ({ ...prev, [name]: formatted }));
    } else {
      SetForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawPin = form.Pin.replace(/\D/g, '');
    if (rawPin.length !== 16) {
      alert("Your secret PIN must be exactly 16 digits.");
      return;
    }
    console.log('Submitted:', form);
    
    SetSubmitted(true);
  };

  const fields = [
    { label: 'First Name', name: 'FirstName', type: 'text' },
    { label: 'Last Name', name: 'LastName', type: 'text' },
    { label: 'Phone Number', name: 'Phone', type: 'tel' },
    { label: 'Email Address', name: 'Email', type: 'email' },
    { label: 'Guess the Cost ($)', name: 'Price', type: 'number' },
    { label: 'Very, Very Secret 16-digit Spidr PIN', name: 'Pin', type: 'text', placeholder: '####-xxxx-####-xxxx' },
  ];

  return (
    <div>
      {isSubmitted ? (
        <div>
          <Submitted />
        </div>
    ) :(
      <div>
        <h1 className='Catchy-Phrase'>Smart. Sleek. Seriously crispy</h1> 
        <Picture />
        
        <form onSubmit={handleSubmit} className="Form-Wrapper">
          {fields.map((field) => (
            <Fields
              key={field.name}
              {...field}
              value={form[field.name]}
              onChange={handleChange}
            />
          ))}
          <SubmitButton />
        </form>
      </div>
    )}
    </div>
  );
}
