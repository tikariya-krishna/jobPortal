import React from 'react'
import titleBgImg from '../images/titleBgImg.png'

const TitleContaint = (props) => {
  return (
    <>
        <div className="bg-titleBgImg h-60">
            <div className='bg-black/50 h-full'>
                <div className='pt-32 text-center'>
                    <h2 className="font-semibold text-white text-4xl">{props.name}</h2>
                    <p className="text-sm text-white"><a href='/'>Home</a> &gt;&gt; {props.path}</p>
                </div>
            </div>
        </div>
   </>
  )
}

export default TitleContaint