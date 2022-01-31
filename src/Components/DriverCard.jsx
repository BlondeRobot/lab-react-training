
function DriverCard({name, rating, img, car}) {
        let roundedRating = Math.round(Number({rating}));
        rating = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
    return (
      <div>
        <img src={img} alt="driver" style={{ height: '50px' }} />
        <p>{name}</p>
        <p>{rating}</p>
        <p>
          {car.model}-{car.licensePlate}
        </p>
      </div>
    );
}

export default DriverCard