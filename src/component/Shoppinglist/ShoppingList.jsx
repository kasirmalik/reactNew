import React, { useEffect, useState } from "react";
import "./shopping.css";

function ShoppingList() {
  const [food, setfood] = useState("");
  const [shoppingList, setshoppingList] = useState([]);
  const handleInput = (e) => {
    console.log(e.target.value);
    setfood(e.target.value);
  };
  const fetchItems = async(food)=>{
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    
    setshoppingList(data);
    
  }
  console.log("Shopping List:", shoppingList);
  useEffect(() => {
    if (food.length >= 2) {
      // Call the fetchItems function when food length is 2 or more
      fetchItems(food);
    }
  
  }, [food]);
  const handleShoppingListClick = (e) => {
    const item = e.target.getAttribute("data-testid");
    if(item){
      const obj = {
        id :Date.now(),
        data: setshoppingList[item]
      }
    }
    console.log("Clicked item:", item);
  }
    

  return (
    <div className="shop">
      <h1>My Shopping List</h1>
      <div>
        <input type="text" value={food} onChange={handleInput} />
      </div>
      <div className="shopping-list"
      onClick={handleShoppingListClick}
      >
      {shoppingList.map((item,index)=>{
        return (
          <div className="item" key={index} data-testid={`item-${index}`}>
           {item}
          </div>
        );
      })}
      </div>
      <div className="bucket"></div>
    </div>
  );
}

export default ShoppingList;
