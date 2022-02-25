import { useState } from 'react';

function ClickablePicture ({img, imgClicked}) {

    const [image, setImage] = useState(true)

    const handleToggleImage = () => setImage(!image);

    return (
      <div>
      <h2>ClickablePicture</h2>
        {image ? (
          <img src={img} alt="no-glasses" onClick={handleToggleImage} />
        ) : (
          <img src={imgClicked} alt="glasses" onClick={handleToggleImage} />
        )}
      </div>
    );

}

export default ClickablePicture
