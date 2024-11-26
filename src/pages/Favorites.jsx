import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(fav => fav.idMeal !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map(fav => (
          <div key={fav.idMeal}>
            <img src={fav.strMealThumb} alt={fav.strMeal} />
            <h3>{fav.strMeal}</h3>
            <button onClick={() => removeFavorite(fav.idMeal)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
