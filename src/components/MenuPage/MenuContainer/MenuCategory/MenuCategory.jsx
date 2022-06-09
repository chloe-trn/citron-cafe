import React from 'react'
import MenuItem from './MenuItem/MenuItem'

function MenuCategory({name,title,menu,itemClicked, handleItemClick}){

    const items = Object.values(menu)
    const itemIDs = Object.keys(menu)
    const itemNames = items.map(a => a.name)
    const itemPrices = items.map(a => a.price)

    // use menu data and map them to the DOM programmatically
    return(
            <div className={name} >
                <h3 className="menu-h3">{title}</h3>
                <div className="line"></div>
                <div className="menu-grid" id={name+"-container"}>
                    <div className="left-side">
                        {
                            itemNames.map((item,index) => 
                            (index % 2 === 0)?
                            <MenuItem 
                                key={item + index} 
                                itemID ={itemIDs[index]}
                                item={item} 
                                unitPrice={itemPrices[index]}
                                itemClicked={itemClicked}
                                handleItemClick={handleItemClick}  
                            />:
                            <React.Fragment key={item + index + "left"}></React.Fragment>
                            )
                        }
                    </div>
                    <div className="right-side">
                        {
                            itemNames.map((item,index) => 
                            (index % 2 !== 0)?
                            <MenuItem 
                                key={item + index} 
                                itemID ={itemIDs[index]}
                                item={item} 
                                unitPrice={itemPrices[index]}
                                itemClicked={itemClicked}
                                handleItemClick={handleItemClick}
                            />:
                            <React.Fragment key={item + index + "right"}></React.Fragment>
                            )
                        }
                    </div>
                </div>
            </div>
    )
}

export default MenuCategory