import React from 'react'

const page = ({params}) => {
   // console.log({props},"dddd");

  return (
    <div>{params.postId}</div>
  )
}

export default page