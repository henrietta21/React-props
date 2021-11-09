import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
    const {fullName = 'Noel Jay', bio = 'Perfect mother of five', profession = 'Student'} = props

    
    const handleName = () => {
        alert(fullName)
    }

  

    return (
        <div>
           <div>
           {props.children} 
           <h2>FullName: {fullName}</h2>
           <h2>Bio: {bio}</h2>
           <h2>Profession: {profession}</h2>
            </div>
            <button onClick={handleName}>Click here</button>
        </div>
    )
}

Profile.propTypes = {
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
};

export default Profile