import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price } = service;
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName: title,
            price,
            customerName: name,
            email,
            phone,
            message
        }
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">Your are about to order: {title}</h2>
                <h2 className="text-3xl">Price :${price}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-ghost w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-ghost w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-ghost w-full " />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-ghost w-full " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
                <input type="submit" className='btn' value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;