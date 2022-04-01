import classes from './MeetupDetail.module.css'


const MeetupDetail = ({img, title, adress, description}) => {

    return( 
        <section className={classes.detail} >
        <img src={img}></img>
        <h1>{title}</h1>
        <p>{adress}</p>
        <p>{description}</p>
        </section>
    )
}

export default MeetupDetail