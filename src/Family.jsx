import { useState } from "react";
import React from "react";

export default function Family({ familyTree }) {

    const [isVisible, setIsVisible] = useState(false);
    const expand = () => {
      setIsVisible(!isVisible);
    };
  return (
    <div style={{ paddingLeft: 10 }}>
      <span onClick={expand}>{familyTree.name}</span>
      {isVisible ? (
        familyTree?.children?.map((child) => {
          return (
            <div className="reply-container">
               <Family key={child.name} familyTree={child} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}