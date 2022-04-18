import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div>
                <div>
                    <h3>Difference between Authorization and Authentication.</h3>
                    <p>Authentication: Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.
                        Authorization: Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.	Authorization always takes place after authentication.
                    </p>
                </div>
                <div>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Firebase has so many benefit. It Create Application without backend server.No need extra money spent for backend server.Sync real time data in the application.Quick display data in the application.Faster then any backend web services.For this I use firebase.
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>
                </div>
                <div>
                    <h3>What other services does firebase provide other than authentication?</h3>
                    <p>Open Source Backend Platform.Firebase to help take our mobile app development a notch higher.Simple core library, with a modular API for our application..</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;