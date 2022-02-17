import React, {useState} from 'react';
import ListContent from './List.json';
import './List.scss';


function List(props) {

  const [activeId, setActiveId] = useState(["1"]);

  const openMenuMultiple = (item) => {
    const [...arr] = activeId;

    arr.includes(item.id) ?
    setActiveId(arr.filter(el => el !== item.id)) :
    setActiveId( () => {
      arr.push(item.id);
      return arr;
    });
  }


  const openMenuSingle = (item) => {
    item.id === activeId[0] ? setActiveId([]) : setActiveId([item.id]);
  }

  const openMenu = (item) => {
    props.mode === "multiple" ? openMenuMultiple(item) : openMenuSingle(item);
  }

  const createListItems = (items) => items.map((item) => (
    <li key={item.id}
        id={item.id}
        className = { activeId.includes(item.id) ? "list__item_active" : "list__item"}>
      <p className="list__item-title" onClick={(e) => openMenu(e.target.parentElement)}>{item.title}</p>
      <p className="list__item-content">{item.content}</p>
    </li>
  ));


  return (
      <div className="list">
        <ul className="list__wrapper">
          {createListItems(ListContent)}
        </ul>
      </div>
  );
}

export default List;