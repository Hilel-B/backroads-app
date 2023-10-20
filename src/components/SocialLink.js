import React from "react";

const SocialLink = (props) => {
  const { id, href, icon, itemClass } = props;
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
