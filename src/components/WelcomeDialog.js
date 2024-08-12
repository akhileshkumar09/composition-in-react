import React from 'react'

function FancyBorder(props){
    return (<div className={'FancyBorder, FancyBorder-'+props.color}>
        {props.children}
    </div>
    )
}

function Dialog(props){
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-Title'>
                {props.title}
            </h1>
            <p className='Dialog-Message'>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

function WelcomeDialog() {
  return (
    <div>
        <Dialog title ='Welcome' message='Thank you for visiting our spacecraft!'>
             <button>Close</button>
        </Dialog>
    </div>
  )
}

export default WelcomeDialog