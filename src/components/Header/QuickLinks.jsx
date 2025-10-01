import React from 'react';
import { motion } from 'framer-motion';

const QuickLinks = ({ categories }) => {
    return (
        <nav 
            className="quick-links-nav" 
            style={{
                backgroundColor: '#f9f9f9',
                borderBottom: '1px solid #eee',
                overflowX: 'auto', 
                whiteSpace: 'nowrap',
                padding: '10px 40px',
                boxShadow: '0 2px 3px rgba(0, 0, 0, 0.05)',
                position: 'sticky', 
                top: '120px', 
                zIndex: 40
            }}
        >
            <div style={{ display: 'flex', gap: '15px' }}>
                {categories.map(cat => (
                    <motion.a
                        key={cat.id}
                        href={cat.anchor}
                        style={{
                            textDecoration: 'none',
                            color: '#333',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            fontSize: '0.9em',
                            display: 'inline-block',
                            transition: 'background-color 0.2s, color 0.2s',
                            cursor: 'pointer',
                        }}
                        whileHover={{ 
                            backgroundColor: '#38761d', 
                            color: 'white',
                            borderColor: '#38761d'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {cat.title}
                    </motion.a>
                ))}
            </div>
        </nav>
    );
};

export default QuickLinks;