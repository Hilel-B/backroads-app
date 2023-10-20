import React from "react";

const Tour = (props) => {
  const { id, tourIMG, date, title, text, place, duration, price } = props;
  return (
    <article key={id} className="tour-card">
      <div className="tour-img-container">
        <img src={tourIMG} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {place}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
