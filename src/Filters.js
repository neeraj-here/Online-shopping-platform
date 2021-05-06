import React, { useEffect, useState } from 'react'
import { db } from './Firebase'
import './Filters.css'

const Filters = ({setProductsList, allProducts, }) => {

    const [colors, setColors] = useState([])
    const [selectedColor, setSelectedColor] = useState("all")
    const [gender, setGender] = useState("both")
    const [price, setPrice] = useState("all")
    const ref = db.collection("Data").doc("Colors")

    function getColors() { //To fetch colors from firestore
        ref.onSnapshot((doc) => {
            setColors(doc.data().colors)
        });
    }

    function applyFilters() { //To apply filters selected by the user
        
        let newProductList = allProducts
        if (selectedColor === 'all') {
            setProductsList(newProductList)
        } else {
            newProductList = allProducts.filter(product => product.color === selectedColor)
        }

        if (gender === 'both') {
            setProductsList(newProductList)
        } else {
            newProductList = newProductList.filter(product => product.gender === gender)            
        }

        if (price === "all") {
            setProductsList(newProductList)
        } else {
            if (price === "Under Rs.500") {
                newProductList = newProductList.filter(product => product.price < 500)
            } else if (price === "Rs.500 to Rs.1000") {
                newProductList = newProductList.filter(product => product.price >= 500 && product.price <= 1000)
            } else if (price === "Rs.1000 to Rs.1500") {
                newProductList = newProductList.filter(product => product.price >= 1000 && product.price <= 1500)
            } else if (price === "Rs.1500 to Rs.2000") {
                newProductList = newProductList.filter(product => product.price >= 1500 && product.price <= 2000)
            } else if (price === "More than Rs.2000") {
                newProductList = newProductList.filter(product => product.price > 2000)
            }
        }

        setProductsList(newProductList)
    }

    useEffect(() => { // To be executed when any of the fiter changes for filterting products
        applyFilters()
    }, [gender, selectedColor, price])

    useEffect(() => { // To be executed once the components mounts
        getColors()
    }, [])
    
    function handleChange(e) { 
        const element = e.target
        if (element.name === "color") {
            const newColor = element.value
            setSelectedColor(newColor)
        } else if (element.name === 'gender') {
            const newGender = element.value
            setGender(newGender)
        } else if (element.name === "price") {
            console.log("price changed");
            const newPrice = element.value
            setPrice(newPrice)
        }
    }

    return (
        <div className="filters-container">
            
            {/* For selection of Colors */}
            <label className="color" htmlFor='color'> Color </label>
            <select className="fselect"
                name="color"
                id="color"
                value={selectedColor}
                onChange={handleChange}
            >
                <option  className="option" value="all"> All </option>
                {colors.map((color, index) => <option key={index} value={color}> {color} </option>)}
            </select>

            {/* For selection of gender */}
            <label className="gender" htmlFor='gender'> For </label>
            <select className="fselect"
                name="gender"
                id="gender"
                value={gender}
                onChange={handleChange}
            >
                <option value="both"> Both </option>
                <option value="male"> Men </option>
                <option value="female"> Women </option>
            </select>

            {/* For selection of price */}
            <label className="price" htmlFor='price'> Price </label>
            <select className="fselect"
                name="price"
                id="price"
                value={price}
                onChange={handleChange}
            >
                <option value="all"> All prices</option>
                <option value="Under Rs.500"> Under Rs.500 </option>
                <option value="Rs.500 to Rs.1000"> Rs.500 to Rs.1000 </option>
                <option value="Rs.1000 to Rs.1500">Rs.1000 to Rs.1500</option>
                <option value="Rs.1500 to Rs.2000">Rs.1500 to Rs.2000</option>
                <option value="More than Rs.2000">More than Rs.2000</option>
            </select>
        </div>
    )
}

export default Filters

