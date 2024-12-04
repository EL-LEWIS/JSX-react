import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

const Menu = (props) => {
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dish) => {
        setSelectedDish(dish);
    };

    const menu = props.dishes.map((dish) => (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card onClick={() => onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                {/* Renderiza o menu de pratos */}
                {menu}
            </div>
            {/* Renderiza o detalhe do prato selecionado */}
            <DishDetail dish={selectedDish} />
        </div>
    );
};

export default Menu;
