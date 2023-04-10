import React from 'react'
import data from './SubDB'
import Sub from './Sub'

function SubPage() {
  return (
    <div>
      <div>
      {
        data.map(Data=>{
            return <div><Sub Data={Data}/> </div>
        })
      }
    </div>
    </div>
  )
}

export default SubPage
