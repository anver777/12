// src/components/Cart/FloatingCartButton.jsx - НОВЫЙ ФАЙЛ

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const PRIMARY_RED = '#cc0000'; 
const PRIMARY_GREEN = '#38761d';

const FloatingCartButton = ({ cartItemCount, onCartClick }) => {
    return (
        <motion.button
            onClick={onCartClick}
            style={{
                position: 'fixed', 
                bottom: '20px',    
                right: '20px',     
                backgroundColor: PRIMARY_GREEN, 
                color: 'white',
                border: 'none',
                padding: '15px 25px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '1.1em',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 100, 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <ShoppingCart size={24} />
            Корзина
            {cartItemCount > 0 && (
                <motion.span
                    key={cartItemCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        backgroundColor: 'yellow',
                        color: PRIMARY_RED,
                        borderRadius: '50%',
                        width: '25px',
                        height: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '0.9em',
                        fontWeight: '900'
                    }}
                >
                    {cartItemCount}
                </motion.span>
            )}
        </motion.button>
    );
};

export default FloatingCartButton;