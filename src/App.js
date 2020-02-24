import React from 'react';

const foodIlike = [
  {
    id:1,
    name:"Chimaek",
    image:"https://10mag.com/wp-content/uploads/2018/10/2.-Chimaek.jpg"
  },
  {
    id:2,
    name:"Galbitang",
    image:"https://10mag.com/wp-content/uploads/2018/10/5.-Galbitang-1.jpg"
  },
  {
    id:3,
    name:"Bingsu",
    image:"https://10mag.com/wp-content/uploads/2018/10/8.-Bingsu.jpg"
  },
  {
    id:4,
    name:"Pajeon",
    image:"https://10mag.com/wp-content/uploads/2018/10/9.-Meokgolli-w-Pajeon-2.jpg"
  },
  {
    id:5,
    name:"Jjimdak",
    image:"https://10mag.com/wp-content/uploads/2018/10/4.-Jjimdak-8.jpg"
  }
]

// props.name = {name}
function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name}/>
  </div>
  }

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;