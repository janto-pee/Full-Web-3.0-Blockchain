import React from 'react'
import Transact from './Transact'


function Transaction() {
  const transactionCount = [1,1,1,1,1]
  return (
    <div className='container mx-auto p-6 '>
      <h1 className='text-white text-3xl text-center mt-10 mb-14'>Latest Transactions</h1>
      <div className="gradient-bg-transactions text-center items-center flex flex-col md:flex-row basis-1/3 gap-6 flex-wrap justify-center align-center ">
        {
          transactionCount.map((transact, i) => {
            return <span key={i} > <Transact id={i} /> </span>
          })
        }
      </div>
    </div>
  )
}

export default Transaction