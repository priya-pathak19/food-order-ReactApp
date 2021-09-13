import React from 'react';
import './Summary.css';

const MealsSummary = () => {
    return(
        <React.Fragment>
            <div className="main">
            <h6 style={{color:"#bd8c11"}}>OUR PRODUCTS</h6>
            <h3>Top Recommended Dishes</h3>
            </div>
            <div className="mainLink">
                <text><a href="#/" style={{color:"#bd8c11", borderBottom:"1px solid #bd8c11"}}>Starter</a></text>
                <text><a href="#/">Breakfast</a></text>
                <text><a href="#/">Lunch</a></text>
                <text><a href="#/">Dinner</a></text>
            </div>
            <br/>
        </React.Fragment>
    )
}

export default MealsSummary;