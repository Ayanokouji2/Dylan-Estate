import React from 'react'
import {Link} from 'react-router-dom'

const BuyerForm = () => {
    return (
        <div className='rounded-2xl w-full   text-[#122B49]   bg-white pl-12  pt-2 '>
            <div className='bg-[#FCF8F4] p-4 rounded-t-2xl'>
                <h1 className='text-xl uppercase font-merri-regular'>lets get you started!</h1>
            </div>
            <form action="" className='p-3 flex  gap-5 flex-col max-h-44 overflow-y-auto  '>
                <p className='font-inter-medium' htmlFor=""><span className='text-red-500 text-sm'>*</span> I am :</p>
                <div className='flex gap-10 font-inter-regular '>
                    <div className='flex gap-2 items-center'>
                        <input className='custom-radio' type="radio" name='type' value="owner" />
                        <label htmlFor="type" className='font-inter-regular'>Owner</label>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <input className='custom-radio' type="radio" name='type' value="builder" />
                        <label htmlFor="type" className='font-inter-regular'>Builder</label>
                    </div>
                </div>
                <div className='flex flex-col gap-2 font-inter-medium '>
                    <label htmlFor="name">Your Name <span className='text-red-500 text-sm'>*</span></label>
                    <input type="text" className='p-2 border border-slate-600 outline-none max-w-sm rounded-sm' placeholder='Name' p />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="country" className='font-inter-medium'>Country <span className='text-red-500'>*</span></label>
                    <select name="" id="" className='p-2 border border-slate-600 outline-none max-w-sm rounded-sm font-inter-regular'>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="zimbabe">Zimbabe</option>
                        <option value="nigeria">Nigeria</option>
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="phone" className='font-inter-medium'>Phone <span className='text-red-500'>*</span></label>
                    <div className='flex gap-2 max-w-sm'>
                        <select name="phone" id="" className='p-2 border border-slate-600 outline-none max-w-fit rounded-sm font-inter-regular'>
                            <option value="+91">+91</option>
                            <option value="+87">+87</option>
                            <option value="+66">+66</option>
                        </select>
                        <input type="number" name="" id="" className='p-2 border border-slate-600 outline-none w-full rounded-sm' />
                    </div>
                </div>
                <p className='font-inter-medium'>OR</p>
                <div>
                    <p className='font-inter-medium'>Email <span className='text-red-500'>*</span></p>
                    <input type="email" name="" id="" className='p-2 border border-slate-600 outline-none w-full max-w-sm rounded-sm' />
                </div>
            </form>
            <div className='bg-[#FCF8F4] p-5 rounded-b-2xl flex justify-between items-end'>
                <h1 className='text-xs uppercase'>Need Help? <b>Call 9999999999</b></h1>
                <Link  to='/propertylisting' className='text-xs text-white bg-[#122B49] px-8 py-2 rounded'>Next</Link>
            </div>

        </div>
    )
}

export default BuyerForm
