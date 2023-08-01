import porkImg from '../img/porkImg.jpg';
import chickenImg from '../img/chickenImg.jpg';
import beefImg from '../img/beefImg.jpg';
import lumpiaImg from '../img/lumpiaImg.jpg'

export const CUISINE = [
    {
        id: 0,
        foodName: 'Pork Munchies',
        price: '$10',
        description: 'Baked/Fried pastry stuffed with savory pork fillings, potatoes, carrots and raisins.',
        quantity: '10 pcs',
        image: porkImg
    },
    {
        id: 1,
        foodName: 'Chicken Quesonada',
        price: '$10',
        description: 'Baked/Fried pastrey stuffed with chicken fillings, bell peppers, and mozzarella cheese.',
        quantity: '5 pcs',
        image: chickenImg
    },
    {
        id: 2,
        foodName: 'Beef Empanada',
        price: '$15',
        description: 'Baked/Fried pastrey stuffed with beef fillings with carrots, onions, green peas, and cheddar cheese.',
        quantity: '6 pcs',
        image: beefImg
    },
    {
        id: 3,
        foodName: 'Pork Lumpia',
        price: '$10',
        description: 'Fried spring rolls/egg rolls filled with ground pork, carrots, onions, cabbage, egg, and seasonings',
        quantity: '12 pcs',
        image: lumpiaImg
    }
];