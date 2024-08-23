import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Header from '../Header'
import './index.css'

const DeclarationPage = props => {
    const {name, areaOfInterest, mentor, date} = props
    return (
        <div className='home-page-main-container'>
        <Header />
        <div className='declaration-main-container'>
            <div className='declaration-background'>
                <TaskAltIcon className='tick-icon' fontSize='large'/>
                <h1 className='thank-you'>{`Thank you, ${name}`}</h1>
                <p className='thank-you-des'>{`your booking for ${areaOfInterest}is confirmed with ${mentor} at ${date}`}</p>
            </div>
        </div>
        </div>
    )
}

export default DeclarationPage