import React from 'react';
import MenuItem from './MenuItem.jsx'; 
import { motion } from 'framer-motion';

const MenuSection = ({ category, items, onAddToCart }) => {
    
    const anchorId = category.anchor.substring(1); 
    
    return (
        <section id={anchorId} style={{ padding: '40px 0', borderTop: '1px solid #ddd' }}>
            <motion.h2 
                style={{ 
                    color: '#38761d', 
                    fontSize: '2.5em', 
                    borderBottom: '2px solid #cc0000', 
                    paddingBottom: '10px', 
                    marginBottom: '25px'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {category.title}
            </motion.h2>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '25px' 
            }}>
                {items.map(item => (
                    <MenuItem 
                        key={item.id} 
                        item={item} 
                        onAddToCart={onAddToCart} 
                    />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;