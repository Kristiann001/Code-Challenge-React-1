import React from 'react'; 

function Form() {
  return (
    <div className = "FormOne">
    <div className = "Form">
      
      <form action = " " method = "post">
      <div className = "Date">
      <label for = ""> Date: </label>
      <input type = "date" name = "mm/dd/year"/>
      </div>
      </form> 

      <div className = "Description">
      <input type = "text" name = "Description" placeholder = "Description"/>
      </div>

      <div className = "Category">
      <input type = "text" name = "Category" placeholder = "Category"/>
      </div>

      <div className = "Amount">
      <input type = "number" name = "Amount" placeholder = "Amount"/>
      </div>

    </div>
    <div className = "FormButton">
      <button>Add Transaction</button>
    </div>
    </div>
  )
}

export default Form;
