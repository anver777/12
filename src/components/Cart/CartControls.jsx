import React from 'react';
import { motion } from 'framer-motion';

const PRIMARY_GREEN = '#38761d';

const CartControls = ({ item, setCart }) => {

    const handleIncrease = () => {
        setCart(prevCart => 
            prevCart.map(i => 
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
        );
    };
9
    const handleDecrease = () => {
        setCart(prevCart => 
            prevCart.reduce((acc, i) => {
                if (i.id === item.id) {
                    if (i.quantity > 1) {
                        acc.push({ ...i, quantity: i.quantity - 1 });
                    }
                } else {
                    acc.push(i);
                }
                return acc;
            }, [])
        );
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <motion.button
                onClick={handleDecrease}
                style={{ 
                    backgroundColor: PRIMARY_GREEN, 
                    color: 'white', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: '1.2em'
                }}
                whileTap={{ scale: 0.9 }}
            >
                —
            </motion.button>

            <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                {item.quantity}
            </span>

            <motion.button
                onClick={handleIncrease}
                style={{ 
                    backgroundColor: PRIMARY_GREEN, 
                    color: 'white', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: '1.2em'
                }}
                whileTap={{ scale: 0.9 }}
            >
                +
            </motion.button>
        </div>
    );
};

export default CartControls;