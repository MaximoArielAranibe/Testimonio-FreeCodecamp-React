import React from "react";
import '../styles/Testimonio.css';

function Testimonio(props) {
  return (
    <article className="container_testimonio">
      <img src={require(`../images/testimonio-${props.image}.jpg`)} 
      alt={`Fotografia-de-${props.name}`} className="image-testimonio" />
      <div className="container-text-testimonio">
        <p className="name-testimonio">
          <strong>{props.name}</strong> en <strong>{props.country}</strong>
        </p>
        <p className="job-testimonio">
          {props.job} en <strong>{props.company}</strong>
        </p>
        <p className="text-testimonio">
          "{props.testimonio}"
        </p>
      </div>

    </article>
  )
}

export default Testimonio;