import NewMeetupForm from "../../components/meetups/NewMeetupForm"


const NewMeetupPage = () => {

    const addNewMeetupHandler = (enteredMeetUpDatas) => {

        console.log(enteredMeetUpDatas)

    }

    return (
    <>
    <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
    
    </>
    )
}

export default NewMeetupPage