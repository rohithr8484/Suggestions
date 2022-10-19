import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

function App() {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change 
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection of value
  const handleChange = value => {
    setSelectedValue(value);
  }

  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`http://jsonplaceholder.typicode.com/todos?completed=${inputValue}`).then(res => res.json());
  };

  setTimeout(handleChange, 200); 

  return (
    <div className="App">
      <h3>Select Dropdown</h3>

      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.title}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />

      <pre>The Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
    </div>
  );


}

export default App;
