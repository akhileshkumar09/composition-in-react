import React from 'react'
import { Header,Sidebar, Content } from './page-layout-component/PageLayoutComponents'

function PageLayout() {
  return (
    <div className='page-layout'>
        <Header><h1>My Website</h1></Header> 
        <Sidebar><nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav></Sidebar>
        <Content><p>Welcome to my website! This is the main content area.</p></Content>
    </div>
  )
}

export default PageLayout