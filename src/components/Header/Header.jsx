import React from 'react';
import logoImage from '../../assets/photo.jpg'; 

const PRIMARY_RED = '#cc0000';
const PRIMARY_GREEN = '#38761d'; 

const Header = () => { 
    return (
        <header style={{
            backgroundColor: PRIMARY_GREEN, 
            color: 'white',
            padding: '20px 30px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            position: 'sticky', 
            top: 0,
            zIndex: 900 
        }}>
            
            <div style={{ flexGrow: 1 }}>
                <h1 style={{ margin: 0, fontSize: '2em' }}>12 Стульев</h1>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>Кафе-Хинкальная</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.9em' }}>г. Шатура, ул. Советская, 33/1</p>
                <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>+7 (967) 021-11-00</p>
            </div>

            <img 
                src={logoImage} 
                alt="Логотип 12 Стульев"
                style={{
                    width: '80px',     
                    height: '80px',    
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '4px solid white' 
                }}
            />
            

        </header>
    );
};

export default Header;