function Rating({children}) {
    let roundedRating = Math.round(Number(children));
    let stars = '★'.repeat(roundedRating) + '☆'.repeat(5-roundedRating)
    
    return (
        <div>
            {stars}
        </div>
    )
}

export default Rating