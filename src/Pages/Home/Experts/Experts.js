import React from 'react';
import deliveryMan1 from '../../../images/delivery man/delivery-man1.png';
import deliveryMan2 from '../../../images/delivery man/delivery-man2.png';
import deliveryMan3 from '../../../images/delivery man/delivery-man3.png';
import Expert from '../Expert/Expert';


const deliveryMen = [
    { id: 1, name: 'Shabaz Nadif', img: deliveryMan1, description: 'Hello Everyone.I am Shabaz.I am working here for last 3 years.' },
    { id: 2, name: 'Rashid Khan', img: deliveryMan2, description: 'Hello Everyone.I am Rashid.I am working here for last 2 years.' },
    { id: 3, name: 'Munaf Hussain', img: deliveryMan3, description: 'Hellow Everyone.I am Munaf.I am working here for last 3 years.' },

]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Delivery Man</h2>
            <div className="row">
                {
                    deliveryMen.map(deliveryMan => <Expert
                        key={deliveryMan.id}
                        deliveryMan={deliveryMan}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;