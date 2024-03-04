import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelecteItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelecteItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //convert items in lits to a different type using map
  //Use curly braces to render data dynamically
  //class is a keyword in typescript/react so use className instead

  //type annotation, specify the type of event in typescript

  return (
    //Empty brackets tell react to wrap as fragment without importing fragment
    //Fragments let you return multiple elements from a component
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          //key={item} makes each item have a unique key property
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //No () means you're calling the reference, not the function
            onClick={() => {
              setSelectedIndex(index);
              onSelecteItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
