import './FoodItemCard.css';

function FoodItemCard() {
    return (
        <article className="card">
            <div className="card-hover-info">
                <span className="material-symbols-outlined card-icon-add">calendar_add_on</span>
                <div className='card-meta-icon'>
                    <span className='card-timer material-symbols-outlined'>timer</span>
                    <span>20 min</span>
                </div>
            </div>
            <div className="card-image"></div>
            <a className="card-link">
                <div className="card-hover-image"></div>
            </a>
            <div className="card-info">
                <span className="card-category">Breakfast</span>
                <h4 className="card-title">Escovitch Fish</h4>
                <span className="card-meta">Kenyan</span>
            </div>
        </article>
    )
}

export default FoodItemCard;
