import React, {useContext} from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import InputField from './inputField';
import Loader from './Loader';
import shortenAddr from '../utils/shortenAddr';
import {TransactionContext} from '../Context/TransactionContext'

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);


  const handleSubmit = (e) => {
    // inputs
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    // validation
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (
  
    <div className='mx-auto container p-6 mt-6'>
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-24 items-center">
        {/* left container */}
        <div className="flex flex-col space-y-6 md:w-1/2 items-center md:items-start">
          <h1 className="max-w-md sm text-center md:text-left text-white text-4xl font-bold">
            Buy and Sell trusted Crypto
          </h1>

          <p className='max-w-sm text-white text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae quaerat eligendi quod !</p>

          <div>
            <button className='bg-blue-500 text-white rounded-full p-3 p flex items-center gap-2'><AiFillPlayCircle /> Let's get started</button>
          </div>

          <div className="hidden md:grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={`md:border-l-0 lg:border-r-1 border-l-1 md:border-r-0 ${companyCommonStyles}`}>
              Security
            </div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles} `}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl  ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={`md:border-l-0 lg:border-r-1 border-l-1 md:border-r-0 ${companyCommonStyles}`}>
              Low Fees
            </div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>

        </div>
        {/* right container */}
        <div className="flex flex-col space-y-6 md:w-1/2 items-center" >

            <div className="p-3 flex flex-col justify-end rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism relative ">
              <SiEthereum className=' absolute top-3 left-3 text-white border-solid border-2 border-white text-4xl rounded-full' />
              <BsInfoCircle className='absolute top-3 right-3 text-white border-solid border-2 border-white text-xl rounded-full' />
              <h1>{currentAccount ? shortenAddr(currentAccount): 'No Wallet Connected'}</h1>
              <h1>Ethereum</h1>
            </div>
            {/* form */}
            
           <div className="p-5 w-full flex flex-col justify-start items-center blue-glassmorphism">
           <InputField placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <InputField placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <InputField placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <InputField placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
           <div className="h-[1px] w-full bg-gray-400 my-2" />
           {
             false ? <Loader /> : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )
            }
           </div>

        </div>
      </div>
    </div>
  )
}

export default Welcome