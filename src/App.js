import React from 'react';
import PropTypes from 'prop-types';

const foodIlike = [
  {
    id:1,
    name:"Chimaek",
    image:
      "https://10mag.com/wp-content/uploads/2018/10/2.-Chimaek.jpg",
    // rating: 5.0
  },
  {
    id:2,
    name:"Galbitang",
    image:
      "https://10mag.com/wp-content/uploads/2018/10/5.-Galbitang-1.jpg",
    rating: 4.6
  },
  {
    id:3,
    name:"Bingsu",
    image:
      "https://10mag.com/wp-content/uploads/2018/10/8.-Bingsu.jpg",
    rating: 4.8
  },
  {
    id:4,
    name:"Pajeon",
    image:
      "https://10mag.com/wp-content/uploads/2018/10/9.-Meokgolli-w-Pajeon-2.jpg",
    rating: 4.5
  },
  {
    id:5,
    name:"Jjimdak",
    image:
      "https://10mag.com/wp-content/uploads/2018/10/4.-Jjimdak-8.jpg",
    rating: 4.7
  }
]

// props.name = {name}
function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;