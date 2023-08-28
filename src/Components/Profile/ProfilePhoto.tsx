import'./ProfilePhoto.module.css'
import classes from './ProfilePhoto.module.css'

interface PropsProfilePhoto {
    name: string,
    country: string,
    relationship: string,
}

function ProfilePhoto(props:PropsProfilePhoto) {
    return (
        <>
            <div className={classes.__divProfile}>
                <div className={classes.__divProfilePhoto}>
                    <div className={classes.__divProfilePhotoImg}>

                    </div>
                </div>
                <h4>{props.name}</h4>
                <h5>{props.relationship}, {props.country}</h5>
            </div>


        </>
    )
}

export default ProfilePhoto;