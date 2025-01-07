import style from './Card.module.css';

function Card({ title, image, content, tags, published, onDelete, id }) {

    // imgs di default se non c'è
    const defaultImage = 'https://placehold.co/600x400';
    const imgSrc = image || defaultImage;

    // assegno i colori dei tag
    const tagColors = {
        trip: 'info',
        landscape: 'primary',
        lowcost: 'success',
        expansive: 'danger',
    };

    // utilizzo l'operatore ternario per la condizione di published
    return published ? (
        <div className={`card m-1 ${style.card}`}>
            {/* Icona elimina posizionata in alto a destra */}
            <i
                onClick={() => onDelete(id)}
                className={`fa-solid fa-trash ${style.iconsDelete}`}
            ></i>

            {/* Immagine della card */}
            <img src={imgSrc} className={`card-img-top ${style.cardImg}`} alt={title} />

            {/* Corpo della card */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span key={index} className={`badge bg-${tagColors[tag] || 'secondary'} me-2 mb-2`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <button className={`btn btn-warning btn-sm mt-2 gx-3 ${style.cardButton}`}>Leggi di più</button>
            </div>
        </div>
    ) : null;
}

export default Card;