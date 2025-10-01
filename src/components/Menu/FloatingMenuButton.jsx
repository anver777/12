import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const PRIMARY_GREEN = '#38761d';

const FloatingMenuButton = ({ onMenuClick }) => {
    return (
        <motion.button
            onClick={onMenuClick}
            style={{
                position: 'fixed', 
                bottom: '20px',    
                left: '20px',       
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
            <Menu size={24} />
            Меню
        </motion.button>
    );
};

export default FloatingMenuButton;