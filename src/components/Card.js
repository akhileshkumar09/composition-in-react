import React from 'react'
import CardContent from './cardComponents/CardContent'
import CardTitle from './cardComponents/CardTitle'
import CardFooter from './cardComponents/CardFooter'

function Card() {
  return (
    <div className='card'>
        <CardTitle title='Card Title'/>
        <CardContent>
            <p>This is the content of the card.</p>
        </CardContent>
        <CardFooter>
            <button>action</button>
        </CardFooter>
    </div>
  )
}

export default Card