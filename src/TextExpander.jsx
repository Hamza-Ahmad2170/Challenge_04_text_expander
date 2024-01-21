import propTypes from "prop-types";
import { useState } from "react";

TextExpander.propTypes = {
  expandButtonText: propTypes.string,
  collapsedNumWords: propTypes.number,
  collapseButtonText: propTypes.string,
  buttonColor: propTypes.string,
  expanded: propTypes.bool,
  className: propTypes.string,
  children: propTypes.string,
};




function TextExpander({
  expandButtonText = "Show more",
  collapsedNumWords = 10,
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {

  const buttonStyle = {
    color: buttonColor,
    border: "none",
    background: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px" 

  }

  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded ? children : children.split(" ", collapsedNumWords).join(" ")+"...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={() => setIsExpanded(exp => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
