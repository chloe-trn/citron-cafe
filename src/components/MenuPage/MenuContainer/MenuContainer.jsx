import React, { useContext, useState }from "react"
import { Link } from "react-router-dom"
import { MenuContext } from "../../../App"
import MenuCategory from "./MenuCategory/MenuCategory"

function MenuContainer(){

    const menu = useContext(MenuContext)
    const [itemClicked, setItemClicked] = useState({'name':'', count:0})

    const handleItemClick = (item,event) => {
        setItemClicked({'name':item, count: itemClicked.count + 1})
    }

    return(
        <div className="menu-container">
            <h2 className="menu-h2">Menu</h2>
            <p className="menu-p">click item to add to bag</p>
            <div className="menu">
                <Link to="/shopping-bag">
                    <input className="navigation-btn" id="bag-btn" type="button" value="Go to Bag »" aria-label="Go to Bag"/>
                </Link>
                <MenuCategory name="pastries" title="Pastries" menu={menu[0]} itemClicked={itemClicked} handleItemClick={handleItemClick}/>
                <MenuCategory name="coffee" title="Coffee" menu={menu[1]} itemClicked={itemClicked} handleItemClick={handleItemClick}/>
                <MenuCategory name="tea" title="Tea" menu={menu[2]} itemClicked={itemClicked} handleItemClick={handleItemClick}/>
            </div>
        </div>
    )
}

export default MenuContainer