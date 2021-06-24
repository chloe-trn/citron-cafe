import React, { useState, useRef, useContext, useEffect } from 'react'
import { BagContext, BagFunctionsContext } from "../../../../../App"
import ItemName from "./ItemName"
import ItemQuantity from "../../../../ItemQuantity"
import AddItemButton from "./AddItemButton"
import ItemConfirmation from "./ItemConfirmation"

function MenuItem({item, unitPrice, itemClicked, handleItemClick}){

    // global bag context
    const bag = useContext(BagContext)
    const {handleQuantityChange, handleAddItem} = useContext(BagFunctionsContext)

     // states
    const [quantity,setQuantity] = useState(1);
    const [clicked, setClicked] = useState(false); // reflect which item is currently clicked 
    const [confirmation, setConfirmation] = useState(false);  // relect if item clicked has been added

    // refs
    const itemAddedRef = useRef(null) // allow access to "animationend" event on current item added for listener 
    const animationRef = useRef(null) // allow acess to itemAddedAnimation outside of useEffect 
 
    // show item added confirmation to user 
    const animateConfirmation = () => setConfirmation(true)
    
    // fade confirmation when "animationend" event is triggered 
    const fadeConfirmation = () => setConfirmation(false)

    // functions for the item to manage its state depending on user input: 
    const updateQuantity = (quantity) => handleQuantityChange(item,quantity,'menu')      

    const addNewItem = (quantity) => {
        setClicked(false)
        handleAddItem(bag,item,quantity,unitPrice)
        setQuantity(1)
    }

    const handleInputQuantityChange = e => setQuantity(e.target.value)

    const handleAddBtnClick= () => {
        const itemQuantity = parseInt(quantity);
        // account for input errors in quantity input 
        if(itemQuantity === "" || itemQuantity === "0"){ 
            alert("The quantity chosen is not valid. Please choose a numeric quantity greater than 0 to add to your shopping bag.")
        }else{   
            const itemInBag = bag.some(obj => obj.item === item)
            if (itemInBag){
                updateQuantity(itemQuantity) 
            }else{
                addNewItem(itemQuantity)
            }        
        }
        animateConfirmation()
        setClicked(false)
    }

    // set up event listener for animation when user add an item 
    useEffect(() => {
        // add listener and define refs 
        const itemAdded = itemAddedRef.current;
        const handleAnimationEnd = () =>  animationRef.current();
        const itemAddedRefListener = itemAddedRef.current.addEventListener("animationend", handleAnimationEnd);
        // clean up 
        return () => itemAdded.removeEventListener('animationend', itemAddedRefListener)
    },[])

    useEffect(() => {
        animationRef.current = fadeConfirmation; 
        if(itemClicked.name === item){
            setClicked(true)
        }else{
            setClicked(false)
        }
    },[itemClicked])

    return(
        <div className="menu-item">
            <ItemName item={item} unitPrice={unitPrice} handleItemClick={handleItemClick} confirmation={confirmation}/>
            <div className="pop-ups">
                <div className={ clicked ? "add-item-visible" : "add-item-hidden"} >
                   <ItemQuantity 
                        quantity={quantity} 
                        handleInputQuantityChange={handleInputQuantityChange} 
                        style={{
                            position: "relative",
                            zIndex: "2", 
                            marginRight: "15px"
                        }}/>
                   <AddItemButton handleAddBtnClick={handleAddBtnClick}/>
                </div>
                <ItemConfirmation itemAddedRef={itemAddedRef} confirmation={confirmation}/>
            </div>
        </div>
    )
}

export default MenuItem