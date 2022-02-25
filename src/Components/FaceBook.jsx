import data from '../data/berlin.json';

function FaceBook () {
    const profiles = [...data]
    return (
        <div>
            <h2>FaceBook</h2>
            
            {profiles.map((profile, index) => {
                //console.log(profile);
               return (
                 <div key={index}>
                   <img
                     style={{ height: '100px' }}
                     src={profile.img}
                     alt="student"
                   />
                   <p>First name: {profile.firstName}</p>
                   <p>Last name: {profile.lastName}</p>
                   <p>Country: {profile.country}</p>
                   <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                 </div>
               );
            })}
        </div>
    )

}

export default FaceBook