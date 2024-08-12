import React, { useState } from 'react'
import { Chart, Table, Summary } from './widget-componenets/WidgetComponents'

function Dashboard() {
    const [widgets, setWidget] = useState([])

    const addWidget = (type) => {
        setWidget([...widgets, type])
    }

    const renderWidget = (type, index) => {
        switch(type){
            case 'Chart':
                return <Chart key={index}/>
            case 'Table':
                return <Table key={index}/>
            case 'Summary':
                return <Summary key={index}/>
            default:
                return null           
        }
    }
  return (
    <div>
    <h1>Dashboard</h1>
    <div className='widget-container'>
    {widgets.map((widget,index)=>(renderWidget(widget, index)))}
    </div>
    <div className="widget-buttons">
        <button onClick={() => addWidget('Chart')}>Add Chart</button>
        <button onClick={() => addWidget('Table')}>Add Table</button>
        <button onClick={() => addWidget('Summary')}>Add Summary</button>
      </div>
    </div>
  )
}

export default Dashboard