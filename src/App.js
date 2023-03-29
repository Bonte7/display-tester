import './App.css';
import Form from './Form';
import Display from './Display';
import { useState } from 'react';

function App() {

  //updating and storing values typed into the form
  const [creds, setCreds] = useState({
    merchantGroupId: "",
    merchantId: "",
    apiKey: "", 
    pageId: "__PAGE_ID__",
    displayType: ""
  });

  const [options, setOptions] = useState({
    simpleSnap: "",
    verticalPagination: "",
    condensed: "",
    reviewFilter: ""
  })

  const handleChecked = (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      setOptions({
        ...options,
        [e.target.name]: e.target.value
      })
    } else {
      setOptions({
        ...options,
        [e.target.name]: ""
      })
    }
  }

  //handles input form changes when the user types and saves the characters in creds state
  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  }


 const [inputs, setInputs] = useState({
  merchantGroupId:"",
  merchantId: "",
  apiKey: "",
  pageId: "__PAGE_ID__",
  displayType: "",
  simpleSnap: "",
  verticalPagination: "",
  condensed: "",
  reviewFilter: ""
 });

 //handles the submit button click and saves all values from the form into inputs state
  const handleSubmit = (e) => {
    
      e.preventDefault();

        setInputs({
          ...inputs,
          merchantGroupId: e.target[0].value,
          merchantId: e.target[1].value,
          apiKey: e.target[2].value,
          pageId: e.target[3].value === "" ? "__PAGE_ID__" : e.target[3].value,
          displayType: e.target[4].value,
          simpleSnap: options.simpleSnap,
          verticalPagination: options.verticalPagination,
          condensed: options.condensed,
          reviewFilter: options.reviewFilter
        });

      
  }

  return (
    <div className="App">
      <Form
        handleSubmitEvent={handleSubmit}
        handleChangeEvent={handleChange}
        handleCheckbox={handleChecked}
        chosenDisplay={creds.displayType}
      />
      {inputs.merchantGroupId ? <Display
        merchantGroupId={inputs.merchantGroupId}
        merchantId={inputs.merchantId}
        apiKey={inputs.apiKey}
        pageId={inputs.pageId}
        standaloneType={inputs.displayType}
        simpleSnap={inputs.simpleSnap}
        verticalPag={inputs.verticalPagination}
        condensed={inputs.condensed}
        reviewFilter={inputs.reviewFilter}
      /> : null}
     
    </div>
  );
}

export default App;
