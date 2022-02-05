import Button from "./Button"
import { useState } from 'react';

const Header = ({title}) => {
  const onClick = () => {
      countered(counter + 1)
  }
  const[counter, countered] = useState(0);

  return (
    <header>
      <h1>{title}</h1>
      <Button color= 'green' text='Counter plus 1' onClick={onClick}/>
      <h2>Number of clicks: {counter}</h2>
    </header>
  )
}

Header.defaultProps = {
    title: 'Counter'
}



export default Header
