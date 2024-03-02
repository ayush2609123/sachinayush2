// src/pages/HomePage.jsx

import React from 'react';

const HomePage = () => {
  // Dummy data for cards
  const cardsData = [
    { id: 1, name: 'Card 1', rating: 4.5, price: '$10', imageUrl: 'url_to_image_1' },
    { id: 2, name: 'Card 2', rating: 4.2, price: '$15', imageUrl: 'url_to_image_2' },
    // Add more card data as needed
  ];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="cards-container">
        {cardsData.map(card => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.name} />
            <h3>{card.name}</h3>
            <p>Rating: {card.rating}</p>
            <p>Price: {card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

