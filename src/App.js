// import packages
import React, { createContext, useState, useEffect, useRef } from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
// import css
import 'normalize.css'
import './App.css'
// import components
import NavBar from './components/NavBar/NavBar'
import IndexPage from './components/IndexPage/IndexPage'
import GalleryPage from './components/GalleryPage/GalleryPage'
import MenuPage from './components/MenuPage/MenuPage'
import ShoppingBagPage from './components/ShoppingBagPage/ShoppingBagPage'
import CheckOutPage from './components/CheckOutPage/CheckOutPage'

// global contexts
export const BagContext = createContext([])
export const BagFunctionsContext = createContext({})

// get bag from local storage if it exists on page refresh 
const localStorageBag = JSON.parse(localStorage.getItem('citron-bag')) || []

function App() {

  // Wake up Heroku server
  const [apiResponse, setApiResponse] = useState('')

  useEffect(() => {
    const wakeUpServer = async () => {
      // get the data from the api
      const data = await fetch('https://citron-server.herokuapp.com/')
      // convert the data to json
      const json = await data.json()
      // set state with the result
      setApiResponse(json.date)
    }

    wakeUpServer()
    // make sure to catch any error
    .catch(console.error)
  }, [])

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

  const handleAddItem = (bag,itemID,item,quantity,unitPrice) => {
    const newItem = { 'itemID':itemID, 'item':item, 'quantity':quantity, 'unitPrice': unitPrice}
    const newBag = bag.slice(0)
    newBag.push(newItem)
    setBag(newBag)
  }

  const calcTotalQuantity = () => {
    const quantities = []
    for(let i = 0; i < bag.length ; i++ ){
      const quantity = bag[i].quantity
      quantities.push(quantity)
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
      <div id='App' className='App'>  
          <Link to='#main' className='skip-link'>Skip to main content</Link>
          <NavBar bagNum={totalBagItems} widthRef={widthRef}/>
          <BagContext.Provider value={bag}>
          <BagFunctionsContext.Provider value={{
              handleQuantityChange: handleQuantityChange,
              handleAddItem: handleAddItem,
              deleteBag: deleteBag, 
              deleteItem: deleteItem,
              getTotalQuantity: getTotalQuantity
          }}>
          <Switch>
            <MenuPage exact path='/menu' />
            <IndexPage exact path='/' widthRef={widthRef}/>
            <GalleryPage exact path='/gallery' />
            <ShoppingBagPage exact path='/shopping-bag' />
            <CheckOutPage exact path='/check-out' />
          </Switch>
          </BagFunctionsContext.Provider>
          </BagContext.Provider>
          <Link to='#App' className='skip-link'>Skip to top</Link>
      </div>
    </Router>
  )
}

export default App
