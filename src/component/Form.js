import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.getPrays}>
            <input type='text' name="city" placeholder="city ..."/>
            <input type='text' name="country" placeholder="country ..."/>
            <input type='date' name="date" placeholder="date 'DD/MM/>YYYY' "/>
            <button >عرض مواقيت الصلاة</button>
        </form>
    )
    
}

export default Form;