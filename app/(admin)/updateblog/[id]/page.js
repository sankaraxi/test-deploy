import Updateblog from '@/app/_components/Updateblog/Updateblog';
import React from 'react'

const page = ({params}) => {
    const {id} = params;
  return (
    <div>
        <Updateblog id={id}/> 
    </div>
  )
}

export default page