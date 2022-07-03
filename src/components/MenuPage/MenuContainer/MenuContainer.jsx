import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MenuCategory from "./MenuCategory/MenuCategory"

function MenuContainer(){

    const [pastryMenu, setPastryMenu] = useState({});
    const [coffeeMenu, setCoffeeMenu] = useState({});
    const [teaMenu, setTeaMenu] = useState({});

    useEffect(() => {
        const fetchMenu = async () => {
            // get the data from the api
            const data = await fetch('https://citron-server.herokuapp.com/menu');
            // convert the data to json
            const json = await data.json();
            
            // set state with the result
            let pastryItems = {};
            let teaItems = {}; 
            let coffeeItems = {}; 

            for(const item of json) {
                if(item.type === 'Pastry'){
                    pastryItems[item.product_id] = {
                        name: item.name,
                        price: parseFloat(item.price)
                    }
                } 
                else if (item.type === 'Coffee') {
                    coffeeItems[item.product_id] = {
                        name: item.name,
                        price: parseFloat(item.price)
                    }
                }
                else {
                    teaItems[item.product_id] = {
                        name: item.name,
                        price: parseFloat(item.price)
                    }
                }
            }

            setPastryMenu(pastryItems)
            setCoffeeMenu(coffeeItems)
            setTeaMenu(teaItems)
        }

        fetchMenu().catch(console.error);
        
    }, []);

    const [itemClicked, setItemClicked] = useState({'name':'', count:0})

    const handleItemClick = (item,event) => {
        setItemClicked({'name':item, count: itemClicked.count + 1})
    }

    return(
        <main id="main" className="menu-container"> 
            <section className="menu">
                <h2 className="menu-h2">Menu</h2>
                <p className="menu-p">click item to add to bag</p>
                <Link to="/shopping-bag" className="navigation-btn" id="bag-btn">Go to Bag »</Link>
                <ul>
                    <MenuCategory name="pastries" title="Pastries" itemClicked={itemClicked} menu={pastryMenu} handleItemClick={handleItemClick}/>
                    <MenuCategory name="coffee" title="Coffee" itemClicked={itemClicked} menu={coffeeMenu} handleItemClick={handleItemClick}/>
                    <MenuCategory name="tea" title="Tea" itemClicked={itemClicked} menu={teaMenu} handleItemClick={handleItemClick}/>
                </ul>
            </section>
        </main>
    )
}

export default MenuContainer