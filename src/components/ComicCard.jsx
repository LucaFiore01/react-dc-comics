const ComicCard = (props) => {
    return (

        <div className="card-container">
            {comics.map((fumetto) => (
                <article className="comics-card" key={props.id}>
                    <img src={props.thumb} alt={props.title} />
                    <h3 className="series-name">{props.series}</h3>
                </article>
            ))}
        </div>
    )

}


export default ComicCard