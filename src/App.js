import React, {useState} from 'react'
const Button = ({handleClick, text}) =>
<button onClick = {handleClick}>{text}</button>

const App = () => {
  const [points,setPoints] = useState(0)
  const [multiplier,setMultiplier] = useState(0)
  
  const increaseByOne = () => setPoints(points + (1.0)*multiplier)
  const uprgadeOne = () => setMultiplier(multiplier + 1.00002000), setPoints(points - 1)

  return(
    <div>
      <h1>{points} {multiplier}</h1>
      <Button handleClick={increaseByOne} text={'Click me!'}/>
      <Button handleClick={uprgadeOne} text ={'First uprgade!'}/>
    </div>
    
  )
}

export default App