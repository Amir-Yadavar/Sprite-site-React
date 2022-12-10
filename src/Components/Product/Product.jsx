import React from 'react'
import './Product.css'

export default function Product({title , img}) {
  return (
    
        <section className='box-product'>
          <div className="col-12">
            <img src={img} alt="" className='img-fluid'/>
          </div>
          <h5 className='text-center text-light my-3 title-product'>{title}</h5>
          <button className='btn-product text-center my-2'>EXPLORE</button>
        </section>
     
  )
}
