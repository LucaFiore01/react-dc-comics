const ComicCard = (props) => {
    return (
        <section id="products">
            <div className="container">
                <div className="section-tag">Current Series</div>

                <div className="card-container">
                    {comics.map((fumetto) => (
                        <article className="comics-card" key={props.id}>
                            <img src={props.thumb} alt={props.title} />
                            <h3 className="series-name">{props.series}</h3>
                        </article>
                    ))}
                </div>

                <div className="actions">
                    <button className="btn load-more" type="button">Load More</button>
                </div>
            </div>
        </section>
    )

}


export default ComicCard