import React from 'react'
import MenuItem from './MenuItem/MenuItem'

function MenuCategory({name,title,menu,itemClicked, handleItemClick}){

    const items = Object.values(menu)
    const itemIDs = Object.keys(menu)
    const itemNames = items.map(a => a.name)
    const itemPrices = items.map(a => a.price)

    // use menu data and map them to the DOM programmatically
    return(
            <li className={name} >
                <h3 className="menu-h3">{title}</h3>
                <hr className="line"/>
                <ul className="menu-grid" id={name+"-container"}>   
                        {
                            itemNames.map((item,index) => 
                            <MenuItem 
                                key={item + index} 
                                itemID ={itemIDs[index]}
                                item={item} 
                                unitPrice={itemPrices[index]}
                                itemClicked={itemClicked}
                                handleItemClick={handleItemClick}  
                            >             
                            </MenuItem>
                            )
                        }
                </ul>
            </li>
    )
}

export default MenuCategory