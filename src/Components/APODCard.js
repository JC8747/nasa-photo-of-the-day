import React from 'react';

const APODCard = (props) => {
    console.log( props)
    console.log(props.APOD.date)
   return (
        <APODCard top width="100%" src={props.APOD.url} alt="APOD Img Card" />
   )
}

export default APODCard