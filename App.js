import logo from './logo.svg';
import './App.css';

const drug = 

  {
    "fields": [
      {
        "label": "Date of Birth (YYYY-MM-DD)",
        "key": "birthday",
        "isRequired": true,
        "order": 1,
        "isReadonly": false,
        "type": "date"
      },
      {
        "label": "Gestational Age",
        "key": "gestationalAge",
        "isRequired": true,
        "order": 3,
        "unit": "weeks",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Sex",
        "items": [
          {
            "value": "male",
            "text": "Male"
          },
          {
            "value": "female",
            "text": "Female"
          }
        ],
        "key": "sex",
        "isRequired": true,
        "order": 4,
        "isReadonly": false,
        "type": "dropdown"
      },
      {
        "label": "Height",
        "key": "height",
        "isRequired": true,
        "order": 5,
        "unit": "cm",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 6,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "BMI",
        "key": "bmi",
        "order": 11,
        "unit": "kg/m²",
        "isReadonly": true,
        "type": "number"
      }
    ]
  }


function App() {

  const onSubmitfrom = (e) =>{
    e.preventDefault();
  
  }
  return (
    <div className="container">
      
  <h1>Patient details </h1>
   <from className="from-outer" onSubmit={onSubmitfrom}>
     {
       drug.fields.map(inputdata =>{
          
         console.log('inputdata',inputdata)
         return(
           <div >
             <label>{inputdata.label}</label>
        <input type={inputdata.type} isRequired={inputdata.isRequired} isReadonly={inputdata.isReadonly} key={inputdata.key} order={inputdata.order} unit={inputdata.unit}/>
           </div>
           
         )
       })
     }
     <button type='onSubmit' > submit</button>
   </from>
    </div>
  );
}

export default App;
