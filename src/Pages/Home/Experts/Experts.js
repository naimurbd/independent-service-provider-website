import React from 'react';
import deliveryMan1 from '../../../images/delivery man/delivery-man1.png';
import deliveryMan2 from '../../../images/delivery man/delivery-man2.png';
import deliveryMan3 from '../../../images/delivery man/delivery-man3.png';
import Expert from '../Expert/Expert';


const deliveryMen = [
    { id: 1, name: 'Shabaz Nadif', img: deliveryMan1 },
    { id: 2, name: 'Rashid Khan', img: deliveryMan2 },
    { id: 3, name: 'Munaf Hussain', img: deliveryMan3 },

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