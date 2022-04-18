import React from 'react';

const Expert = ({ deliveryMan }) => {
    const { name, img, description } = deliveryMan;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Expert;