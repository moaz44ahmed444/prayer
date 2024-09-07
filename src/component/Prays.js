import React,{Component} from "react";

const Prays = (props) => {
    
    return(
        <div className="info">
            {
                props.fajr && 
                <p className="info-key">الفجر: 
                    <span className="info-value"> {props.fajr}</span>
                </p>
            }
            {
                props.Sunrise &&
                <p className="info-key">الشروق: 
                    <span className="info-value"> {props.Sunrise}</span>
                </p>
            }
            {
                props.Dhuhr &&
                <p className="info-key">الظهر:
                    <span className="info-value"> {props.Dhuhr}</span> 
                </p>
            }
            {
                props.Asr && 
                <p className="info-key">العصر: 
                    <span className="info-value"> {props.Asr}</span>
                </p>
            }
            {
                props.Maghrib && 
                <p className="info-key">المغرب: 
                    <span className="info-value"> {props.Maghrib}</span>
                </p>
            }
            {
                props.Isha && 
                <p className="info-key">العشاء: 
                    <span className="info-value"> {props.Isha}</span>
                </p>
            }
            {
                props.error && 
                <p className="info-key">error: 
                    <span className="info-value"> {props.error}</span>
                </p>
            }
        </div>
    )

}

export default Prays; 