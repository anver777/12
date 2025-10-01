import React from 'react';
import { motion } from 'framer-motion';

const PRIMARY_GREEN = '#38761d';
const PRIMARY_RED = '#cc0000';

const MenuItem = ({ item, onAddToCart }) => {
    
    const itemVariants = {
        rest: { scale: 1, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)' },
        hover: { 
            scale: 1.02, 
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="menu-item"
            initial="rest"
            whileHover="hover"
            variants={itemVariants}
            style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                
            }}
        >
            <div>
                <motion.h3 
                    style={{ color: PRIMARY_GREEN, margin: '0 0 5px 0' }}
                    whileHover={{ color: '#2d5e16' }}
                >
                    {item.name}
                </motion.h3>
                <p style={{ color: '#555', fontSize: '0.9em', minHeight: '40px' }}>
                    {item.description}
                </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <span style={{ fontSize: '1.4em', fontWeight: 'bold', color: PRIMARY_RED }}>
                    {item.price} ₽
                </span>
                
                <motion.button
                    onClick={() => onAddToCart(item)}
                    style={{
                        backgroundColor: PRIMARY_GREEN,
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                    whileHover={{ backgroundColor: '#2d5e16' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Добавить
                </motion.button>
            </div>
        </motion.div>
    );
};

export default MenuItem;