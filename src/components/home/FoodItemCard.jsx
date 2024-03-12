import { Link } from 'react-router-dom';
import './FoodItemCard.css';

function FoodItemCard( {mealName, thumbnail, mealId, category} ) {

    const imageStyle = { backgroundImage: `url(${thumbnail})` };

    return (
        <article className="card">
            <div className="card-hover-info">
                <span className="material-symbols-outlined card-icon-add">calendar_add_on</span>
                <div className='card-meta-icon'>
                    <span className='card-timer material-symbols-outlined'>timer</span>
                    <span>20 min</span>
                </div>
            </div>
            <div className="card-image" style={imageStyle}></div>
            <Link to={`/recipe/${mealId}`} className="card-link">
                <div className="card-hover-image" style={imageStyle}></div>
            </Link>
            <div className="card-info">
                <span className="card-category">{category}</span>
                <h4 className="card-title">{mealName}</h4>
                <span className="card-meta">Kenyan</span>
            </div>
        </article>
    )
}

export default FoodItemCard;
