/*import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

const ToDoListItem = () => {
  //arrow declaration => expensive computation ex: API calls
  const [items, setItems] = useState(() => toDoItems);

  const [filterType, setFilterType] = useState("");

  const handleChangeItem = (event) => {
    setItemToAdd(event.target.value);
  };

  const handleAddItem = () => {
    // mutating !WRONG!
    // const oldItems = items;
    // oldItems.push({ label: itemToAdd, key: uuidv4() });
    // setItems(oldItems);

    // not mutating !CORRECT!
    setItems((prevItems) => [
      { label: itemToAdd, key: uuidv4() },
      ...prevItems,
    ]);

    setItemToAdd("");
  };

  const handleItemDone = ({ key }) => {
    //first way
    // const itemIndex = items.findIndex((item) => item.key === key);
    // const oldItem = items[itemIndex];
    // const newItem = { ...oldItem, done: !oldItem.done };
    // const leftSideOfAnArray = items.slice(0, itemIndex);
    // const rightSideOfAnArray = items.slice(itemIndex + 1, items.length);
    // setItems([...leftSideOfAnArray, newItem, ...rightSideOfAnArray]);

    //  second way
    // const changedItem = items.map((item) => {
    //   if (item.key === key) {
    //     return { ...item, done: item.done ? false : true };
    //   } else return item;
    // });

    //second way updated
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.key === key) {
          return { ...item, done: !item.done };
        } else return item;
      })
    );
  };

  const handleImportant = ({ key }) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.key === key) {
          //console.log(item);
          return {
            ...item,
            important: !item.important,
          };
        } else return item;
      })
    );
  };

  const handleFilterItems = (type) => {
    setFilterType(type);
  };

  const amountDone = items.filter((item) => item.done).length;

  const amountLeft = items.length - amountDone;

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFilterType(event.target.value);
  };

  const handleDeleteItem = ({ key }) => {
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
    console.log(items);
  };

  const filteredItems =
    !filterType || filterType === "all"
      ? items
      : filterType === "active"
      ? items.filter((item) => !item.done)
      : filterType === "done"
      ? items.filter((item) => item.done)
      : items.filter((item) => item.label.toLowerCase().startsWith(filterType));

  return (
    <div>
      <li key={item.key} className="list-group-item">
        <span
          className={`todo-list-item${item.done ? " done" : ""} todo-list-item${
            item.important ? " important" : ""
          }`}
        >
          <span
            className="todo-list-item-label"
            onClick={() => handleItemDone(item)}
          >
            {item.label}
          </span>

          <button
            onClick={() => handleImportant(item)}
            type="button"
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-exclamation" />
          </button>

          <button
            onClick={() => handleDeleteItem(item)}
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </li>
    </div>
  );
};

export default ToDoListItem;
*/
