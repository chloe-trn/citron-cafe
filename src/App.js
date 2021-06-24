import React, { createContext, useState, useEffect, useRef } from "react"
import { 
  BrowserRouter as Router,
  Switch
} from "react-router-dom"
import './App.css'

import NavBar from './components/NavBar/NavBar'
import IndexPage from './components/IndexPage/IndexPage'
import GalleryPage from './components/GalleryPage/GalleryPage'
import MenuPage from './components/MenuPage/MenuPage'
import ShoppingBagPage from './components/ShoppingBagPage/ShoppingBagPage'
import CheckOutPage from './components/CheckOutPage/CheckOutPage'

// menu items data - TODO: integrate a backend database
const pastries = {
  "Croissant": 3.5,
  "Vanilla Cream Bun": 5.25,
  "Egg Tart": 5.5,
  "Custard Bun":5.25,
  "Macaron": 2.25, 
  "Yuzu Swirl Roll": 9.75, 
  "Tiramisu": 2.25, 
  "Red Bean Mochi": 3.25,
  "Chocolate Lava Cake": 5.25 
}
const coffee = {
  "Vietnamese Drip Coffee": 4.5,
  "Flat White": 6.25,
  "Vanilla Latte": 4.25, 
  "Cafe Mocha": 5,
  "Cappuccino": 6.5, 
  "Affogato": 8.5, 
  "Espresso": 2.5
}
const tea = {
  "Grapefruit": 2,
  "Signature Citron": 2.5,
  "Matcha": 2,
  "Oolong": 2, 
  "English Breakfast": 2, 
  "Assam": 2, 
  "Chai": 2, 
  "Apricot Peach": 2, 
  "Black Cherry": 2,
  "Earl Grey": 2, 
  "Thai Iced Tea": 2.5, 
  "Raspberry Nectar": 2, 
  "Butterfly Pea Flower": 3
}
const menu = [ pastries, coffee, tea]

// global contexts
export const MenuContext = createContext([])
export const BagContext = createContext([])
export const BagFunctionsContext = createContext({})

// get bag from local storage if it exists on page refresh 
const localStorageBag = JSON.parse(localStorage.getItem('citron-bag')) || []

function App() {

  const [bag, setBag] = useState(localStorageBag)
  const [totalBagItems, setTotalBagItems] = useState(0) 
  const widthRef = useRef(null)  // ref to pass width of nav bar to hero slides 
  
  // edit the shopping bag functions: 
  const deleteBag = () => {
    setBag([])
  }

  const deleteItem = (index,e) => {
    const newBag = bag.slice(0)
    newBag.splice(index,1)
    setBag(newBag)
  }

  const handleQuantityChange = (item,quantity,loc) =>{
    const index = bag.findIndex(obj => obj.item === item)
    const newBag = bag.slice(0)
    if(loc === 'menu'){
      newBag[index].quantity = parseInt(newBag[index].quantity) + quantity
    }else{
      newBag[index].quantity = quantity
    }
    setBag(newBag)
  }

  const handleAddItem = (bag,item,quantity,unitPrice) => {
    const newItem = { 'item':item, 'quantity':quantity, 'unitPrice': unitPrice}
    const newBag = bag.slice(0)
    newBag.push(newItem)
    setBag(newBag)
  }

  const calcTotalQuantity = () => {
    const quantities = []
    for(let i = 0; i < bag.length ; i++ ){
      const quantity = bag[i].quantity; 
      quantities.push(quantity);
    }
    const total = quantities.reduce((a, b) => a + b, 0)
    setTotalBagItems(total)
  }

  const getTotalQuantity = () => totalBagItems

  // set current bag to local storage and calc the total num of bag items on each bag modification 
  useEffect(() => {
    localStorage.setItem('citron-bag',JSON.stringify(bag))
    calcTotalQuantity()
  },[bag])

  return (
    <Router>
      <div className="App">  
          <NavBar bagNum={totalBagItems} widthRef={widthRef}/>
          <BagContext.Provider value={bag}>
          <BagFunctionsContext.Provider value={{
              handleQuantityChange: handleQuantityChange,
              handleAddItem: handleAddItem,
              deleteBag: deleteBag, 
              deleteItem: deleteItem,
              getTotalQuantity: getTotalQuantity
          }}>
          <MenuContext.Provider value={menu}>
            <Switch>
              <MenuPage exact path="/menu" />
              <IndexPage exact path="/" widthRef={widthRef}/>
              <GalleryPage exact path="/gallery" />
              <ShoppingBagPage exact path="/shopping-bag" />
              <CheckOutPage exact path="/check-out" />
            </Switch>
          </MenuContext.Provider>
          </BagFunctionsContext.Provider>
          </BagContext.Provider>
      </div>
    </Router>
  )
}

export default App
