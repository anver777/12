import React from 'react';
import { motion } from 'framer-motion';
import { X, List } from 'lucide-react';

const PRIMARY_GREEN = '#38761d';
const PRIMARY_RED = '#cc0000';

const FloatingMenuModal = ({ categories, onClose }) => {

    const handleLinkClick = (e, anchor) => {
        onClose();
        
        setTimeout(() => {
            const targetElement = document.getElementById(anchor.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1001, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '30px',
                    width: '90%',
                    maxWidth: '450px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                    position: 'relative',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                }}
                onClick={e => e.stopPropagation()} 
            >
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px solid ${PRIMARY_GREEN}`, paddingBottom: '15px', marginBottom: '20px' }}>
                    <h2 style={{ color: PRIMARY_GREEN, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <List /> Категории Меню
                    </h2>
                    <motion.button
                        onClick={onClose}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: PRIMARY_RED }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <X size={24} />
                    </motion.button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    {categories.map(cat => (
                        <motion.a
                            key={cat.id}
                            href={cat.anchor}
                            onClick={(e) => handleLinkClick(e, cat.anchor)}
                            style={{
                                textDecoration: 'none',
                                color: PRIMARY_GREEN,
                                padding: '15px 10px',
                                borderRadius: '8px',
                                backgroundColor: '#f0fff0',
                                border: `1px solid ${PRIMARY_GREEN}`,
                                fontSize: '1em',
                                fontWeight: '600',
                                textAlign: 'center',
                                transition: 'background-color 0.2s, transform 0.2s',
                                cursor: 'pointer',
                            }}
                            whileHover={{ 
                                backgroundColor: PRIMARY_GREEN, 
                                color: 'white',
                                scale: 1.02
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {cat.title}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FloatingMenuModal;