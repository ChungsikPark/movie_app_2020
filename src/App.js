import React from 'react';

// props.name = {name}
function Food({name, picture}) {
return <div>
  <h2>I like {name}</h2>
  <img src={picture} />
</div>
}

const foodIlike = [
  {
    name:"Chimaek",
    image:"https://10mag.com/wp-content/uploads/2018/10/2.-Chimaek.jpg"
  },
  {
    name:"Galbitang",
    image:"https://10mag.com/wp-content/uploads/2018/10/5.-Galbitang-1.jpg"
  },
  {
    name:"Bingsu",
    image:"https://10mag.com/wp-content/uploads/2018/10/8.-Bingsu.jpg"
  },
  {
    name:"Pajeon",
    image:"https://10mag.com/wp-content/uploads/2018/10/9.-Meokgolli-w-Pajeon-2.jpg"
  },
  {
    name:"Jjimdak",
    image:"https://10mag.com/wp-content/uploads/2018/10/4.-Jjimdak-8.jpg"
  }
]

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;