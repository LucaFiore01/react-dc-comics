const ComicCard = ({ id, thumb, title, series }) => {
    return (
        <article className="comics-card">
            <img src={thumb} alt={title} />
            <h3 className="series-name">{series}</h3>
        </article>
    )
}

export default ComicCard