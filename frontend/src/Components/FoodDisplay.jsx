import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='mt-[30px]' id='food-display'>
            <h2 style={{ fontSize: 'max(2vw, 24px)' }} className='font-semibold'>Top dishes near you</h2>
            <div style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }} className="grid mt-[30px] gap-[30px] gap-y-[50px]">
                {food_list.map((item, index) => {
                    if (category==="All" || category===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }

                    

                })}
            </div>
        </div>
    )
}

export default FoodDisplay