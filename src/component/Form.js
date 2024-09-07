import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.getPrays}>
            <input type='text' name="city" placeholder="city ..." required/>
            <input type='text' name="country" placeholder="country ..." required/>
            <input type='date' name="date" className="custom-date-input" required placeholder="date 'DD/MM/>YYYY' "/>
            <button >عرض مواقيت الصلاة</button>
        </form>
    )
    
}

export default Form;