import { useState } from 'react'
import DetailsForm from '../DetailsForm'
import Header from '../Header'
import './index.css'

const HomePage = () => {

    const [isClicked, setButtonClick] = useState(false)

    const onClickBookMeeting = () => {
        setButtonClick(true)
    }

    return (
        isClicked ? (
            <DetailsForm />
         ) : (
            <div className='home-page-main-container'>
                <Header />
                <div className='home-page'>
                    <h1 className='main-para' fontSize='20px'> Welcome! We can help you with </h1>
                    <div className='expert-container'>
                        <img 
                            src='https://static.vecteezy.com/system/resources/previews/002/730/957/original/coaching-and-mentoring-concept-business-advise-or-consultation-service-businessman-with-personal-mentor-and-business-trainer-discussing-business-strategy-training-courses-vector.jpg'
                            alt='mentor_image'
                            className='expert-image'
                        />
                        <p className='expert-text'>Expert</p>
                    </div>
                    <button className='booking-button' onClick={onClickBookMeeting}>Book Appointment</button>
                </div>
            </div>
         )
        
    )
}

export default HomePage