import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import tomatoEgg from '../assets/menu/tomatoEgg.jpg';
import dessert from '../assets/menu/dessert.jpg';
import creamSoup from '../assets/menu/creamSoup.jpg';
import pasta from '../assets/menu/pasta.jpg';
import salad from '../assets/menu/salad.jpg';
import sichuan from '../assets/menu/sichuan.jpg';
import soup from '../assets/menu/soup.jpg';
import tomatoRice from '../assets/menu/tomatoRice.jpg';
import MealItem from './MealItem';


const AvailableMeals = () => {
    const mealItems = [
        {
            id: "1",
            name:"Tomatoes and Eggs",
            description:"Fresh tomato and eggs with a toast",
            price:25.5,
            src: tomatoEgg
        },
        {
            id: "2",
            name:"Dessert",
            description:"Dessert filled with freshness",
            price:14.4,
            src: dessert
        },
        {
            id: "3",
            name:"Cream Soup",
            description:"Hot and Sweet cream soup",
            price:55.0,
            src: creamSoup
        },
        {
            id: "4",
            name:"Pasta",
            description:"Mouth watering italian pasta",
            price:42.2,
            src: pasta
        },
        {
            id: "5",
            name:"Salad",
            description:"Fresh Salad from farm",
            price:12.1,
            src: salad
        },
        {
            id: "6",
            name:"Sichuan",
            description:"Best Thai dish Hoty and Spicy",
            price:34.4,
            src: sichuan
        },
        {
            id: "7",
            name:"Soup",
            description:"Start your Day with Tomato Soup",
            price:44.4,
            src: soup
        },
        {
            id: "8",
            name:"Tomato Rice",
            description:"Tangy Rice with Hint of spice",
            price:22.8,
            src: tomatoRice
        }
    ]
    
        
    return(
        <React.Fragment>
            <Container fluid>
            <Row>
           
            {
                mealItems.map((item)=> 
                <Col md={3}>
                    <MealItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        src={item.src}
                    />
                    </Col>)
            }
            
            </Row>
            </Container>
        </React.Fragment>
    )
}

export default AvailableMeals;