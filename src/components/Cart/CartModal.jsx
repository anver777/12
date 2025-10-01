import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, X, Trash2 } from 'lucide-react'; 
import CartControls from './CartControls.jsx'; 

const PRIMARY_GREEN = '#38761d';
const PRIMARY_RED = '#cc0000';

const CartModal = ({ cartItems, onClose, setCart }) => {
    
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleRemove = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '30px',
                    width: '90%',
                    maxWidth: '450px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    maxHeight: '90vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onClick={e => e.stopPropagation()} 
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px solid ${PRIMARY_GREEN}`, paddingBottom: '15px', marginBottom: '20px' }}>
                    <h2 style={{ color: PRIMARY_GREEN, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ShoppingCart /> Ваша корзина
                    </h2>
                    <motion.button
                        onClick={onClose}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
                        whileHover={{ scale: 1.1, color: PRIMARY_RED }}
                    >
                        <X size={24} />
                    </motion.button>
                </div>

                <div className="cart-items-list" style={{ overflowY: 'auto', flexGrow: 1, marginBottom: '20px' }}>
                    {cartItems.length === 0 ? (
                        <p style={{ color: '#555', textAlign: 'center', padding: '20px 0' }}>Корзина пуста.</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} style={{ 
                                display: 'grid', 
                                gridTemplateColumns: '1fr auto auto',
                                gap: '10px', 
                                alignItems: 'center', 
                                padding: '10px 0',
                                borderBottom: '1px dotted #eee'
                            }}>
                                <span style={{ fontWeight: '600', color: '#333' }}>
                                    {item.name}
                                </span>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <CartControls item={item} setCart={setCart} />

                                    <motion.button
                                        onClick={() => handleRemove(item.id)}
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: PRIMARY_RED, padding: '5px' }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Trash2 size={20} />
                                    </motion.button>
                                </div>


                                <span style={{ fontWeight: 'bold', color: PRIMARY_RED, textAlign: 'right' }}>
                                    {(item.price * item.quantity)} ₽
                                </span>
                            </div>
                        ))
                    )}
                </div>

                <div style={{ borderTop: `1px solid #ddd`, paddingTop: '15px', marginTop: 'auto' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4em', marginBottom: '15px' }}>
                        Итого: <span style={{ color: PRIMARY_RED }}>{totalPrice} ₽</span>
                    </h3>
                    
                    <motion.button
                        onClick={() => alert(`Заказ на сумму ${totalPrice} ₽ оформлен!`)} 
                        disabled={cartItems.length === 0}
                        style={{
                            width: '100%',
                            padding: '15px',
                            backgroundColor: cartItems.length > 0 ? PRIMARY_RED : '#ccc',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                            cursor: cartItems.length > 0 ? 'pointer' : 'default',
                            transition: 'background-color 0.3s'
                        }}
                        whileHover={cartItems.length > 0 ? { backgroundColor: '#a30000' } : {}}
                        whileTap={cartItems.length > 0 ? { scale: 0.98 } : {}}
                    >
                        Оформить заказ
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default CartModal;