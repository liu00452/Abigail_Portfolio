import React from 'react';

export default function Notification(props){

    const data = {
        title: 'Submit Successful! ',
        description: 'I will contect as soon as possible :)'
    }

    return(
        <div className={props.isShowNotification ? "Notification" : "Notification hide"}>
            <p className="NotificationTitle">{data.title}</p>
            <p className="NotificationDes">{data.description}</p>
        </div>
    )
}
