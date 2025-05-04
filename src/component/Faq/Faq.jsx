import React from 'react'
import Faqitem from './Faqitem'

function Faq() {
    const faqs= [
        {
            question:"how many bones in human  body",
            answer:"A human body 200 bones"
        },
        {
            question:"how many legs in human  body",
            answer:"A human body 2 bones"
        },
        {
            question:"how many teeths in human  body",
            answer:"A human body 32 bones"
        },
    ]
  return (
  <>
   {
    faqs.map((faq,index)=>{
       return <Faqitem faq={faq}/>
    })
   }
   </>
  )
  
}

export default Faq
