import React from "react";

export default function Alert(props) {
    function captalize(word){
        let low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1)
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
     <strong>{props.alert.type === 'danger'? 'Alert' :captalize(props.alert.type)}:</strong> {props.alert.msg}
    </div>
  );
}
