import React from "react"
import Search from "./Search";

const Form = (props) => {
    return(
        <form  onSubmit={props.addItem}
               onChange={props.handleChangeInput} className="form">
            <Search/>
          <input placeholder="Add Todo" className="form__ToDo"/>
          <input type="submit" value="Add" className="btn form__submit"/>
        </form>
    )
}

export default Form

