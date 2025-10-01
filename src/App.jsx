import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import MenuSection from './components/Menu/MenuSection.jsx';
import CartModal from './components/Cart/CartModal.jsx';
import FloatingCartButton from './components/Cart/FloatingCartButton.jsx';
import FloatingMenuButton from './components/Menu/FloatingMenuButton.jsx'; 
import FloatingMenuModal from './components/Menu/FloatingMenuModal.jsx';

import { menuItems, categories } from './data/menuData.js'; 

const groupedMenu = menuItems.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
}, {});

const App = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('12stulyev_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    useEffect(() => {
        localStorage.setItem('12stulyev_cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                return prevCart.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            
            <Header /> 
            

            <main style={{ padding: '20px 40px' }}>
                
                {categories.map(category => (
                    <MenuSection
                        key={category.id}
                        category={category}
                        items={groupedMenu[category.id] || []}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </main>

            <FloatingCartButton 
                cartItemCount={totalItems} 
                onCartClick={() => setIsCartOpen(true)}
            />

            <FloatingMenuButton 
                onMenuClick={() => setIsMenuOpen(true)}
            />

            {isCartOpen && (
                <CartModal 
                    cartItems={cart} 
                    onClose={() => setIsCartOpen(false)} 
                    setCart={setCart}
                />
            )}
            
            {isMenuOpen && (
                <FloatingMenuModal
                    categories={categories}
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
        </div>
    );
};

export default App;