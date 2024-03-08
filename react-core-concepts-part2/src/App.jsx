import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Users from './Users';

function App() {
  function handleClicked(){
    alert('Hello everyone');
  }

  const addToParam = (num)=>{
    alert(num+5);
  }
 
  return (
    <>
      
      <h3>React core concepts part2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClicked}>clicked</button>
      <button onClick={()=>{alert("second clicked")}}>clicked</button>

      {/* {jodi function a parameter pass daya hoi tahola arrow function
         likhta hoba, karon normal function auto call hoy jay} */}
      <button onClick={()=>{addToParam(5)}}>clicked</button>
     
    </>
  )
}

export default App
