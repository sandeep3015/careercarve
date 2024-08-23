import {Component} from 'react'
import './index.css'
import DeclarationPage from '../DeclarationPage'
import Header from '../Header'

const mentors = [
    {
        name: 'Sandeep',
        isPremium: true,
        areaOfExpertice: 'FMCG Sales',
    },
    {
        name: 'Madhu',
        isPremium: true,
        areaOfExpertice: 'Equity Research',
    },
    {
        name: 'Naveen',
        isPremium: false,
        areaOfExpertice: 'Digital Marketing',
    },
    {
        name: 'Kishore',
        isPremium: true,
        areaOfExpertice: 'Financial Analyst',
    },
    {
        name: 'Poojitha',
        isPremium: false,
        areaOfExpertice: 'Human Resource Manager',
    },
    {
        name: 'Uday',
        isPremium: true,
        areaOfExpertice: 'Operations Manager',
    },
    {
        name: 'Yashwanth',
        isPremium: false,
        areaOfExpertice: 'Management Consultant',
    },
    {
        name: 'Sai Kumar',
        isPremium: false,
        areaOfExpertice: 'Marketing Manager',
    },
    {
        name: 'Niveditha',
        isPremium: false,
        areaOfExpertice: 'Business Development Manager',
    }
]

class DetailsForm extends Component {

    state = {
        isBacktoHome: false,
        isBookingConfirmed: false,
        name: '',
        areaOfInterest: '',
        mentor: '',
        date: new Date(),
    }

    onClickBackHome = () => {
        this.setState({
            isBacktoHome: true,
        })
    }

    onChangeName = event => {
        const {name} = this.state
        this.setState({
            name: event.target.value,
        })
        console.log(name)
    }
    onChangeAreaOfInterest = event => {
        const {areaOfInterest} = this.state
        this.setState({
            areaOfInterest: event.target.value,
        })
        console.log(areaOfInterest)
    }
    onChangeMentor = event => {
        const {mentor} = this.state
        this.setState({
            mentor: event.target.value,
        })
        console.log(mentor)
    }
    onChangeDate = event => {
        const {date} = this.state
        this.setState({
            date: event.target.value,
        })
        console.log(date)
    }

    onSubmitBookingConfirmed = event => {
        event.preventDefault()
        this.setState({
            isBookingConfirmed: true
        })
    }

    render() {
        const {isBookingConfirmed, name, areaOfInterest, mentor, date} = this.state
        return(
            <>
            {isBookingConfirmed ? (
                <DeclarationPage name={name} areaOfInterest={areaOfInterest} mentor={mentor} date={date}/>
            ) : (
                <div className='home-page-main-container'>
                <Header />
                <form className='home-page' onSubmit={this.onSubmitBookingConfirmed}>
                <div className='form-background'>
                 <div className='inputs-buttons-container'>
                    <div className='inputs-container'>
                        <label className='input-text'>Name</label>
                        <input type='text' placeholder='Name' className='input-value' value={name} onChange={this.onChangeName}/>
                    </div>
                    <div className='inputs-container'>
                        <label className='input-text'>Area of Interest</label>
                        <input type='text' placeholder='Area of Interest' className='input-value'value={areaOfInterest} onChange={this.onChangeAreaOfInterest}/>
                    </div>
                    <div className='inputs-container'>
                        <label className='input-text'>Date</label>
                        <input type='date' className='input-value' value={date} onChange={this.onChangeDate}/>
                    </div>
                    <div className='inputs-container'>
                    <label className='input-text'>Mentor</label>
                    <select className='select-input-value' value={mentor} onChange={this.onChangeMentor}>
                            <option value="">Select Mentor</option>
                        {mentors.map(eachItem => (
                            <option key={name} value={eachItem.name}>{eachItem.name}</option> 
                        ))}
                        </select>
                    </div>
                    <div className='inputs-container'>
                        <label className='input-text'>Time</label>
                        <input type='time' className='input-value'/>
                    </div>

                    <div className='booking-buttons'>
                        <button className='booking-button' type='submit' >Book Slot</button>
                        <button className='booking-button' type='button' onClick={this.onClickBackHome}>Back Home</button>
                    </div>
                    </div>
                    <div>
                        <img
                            src='https://static.vecteezy.com/system/resources/previews/002/730/957/original/coaching-and-mentoring-concept-business-advise-or-consultation-service-businessman-with-personal-mentor-and-business-trainer-discussing-business-strategy-training-courses-vector.jpg'
                            alt='mentor_image'
                            className='form-expert-image' 
                        />
                    </div>
                </div>
            </form>
            </div>
            )}
        </>
        )
    }
}

export default DetailsForm