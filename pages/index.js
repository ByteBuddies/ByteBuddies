import React,{ useState } from "react";

function Header({title}) {
  return <h1>{title ? title : 'Default Header'}</h1>;
}





export default function App(){
  const [likes, setLikes] = useState(0);
  function handleClick(){
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header />
      <div>Total Likes:({likes})</div>
      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
