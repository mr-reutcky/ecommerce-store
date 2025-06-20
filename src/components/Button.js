import { Link } from "react-router-dom";

function Button({ value, className, onClick, to }){
  const finalClassName = `btn ${className || ''}`.trim();

  if (to){
    return (
      <Link to={to} className={finalClassName} onClick={onClick}>
        {value}
      </Link>
    );
  }

  return(
    <button className={finalClassName} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button