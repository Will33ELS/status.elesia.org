import '../style/Item.scss'
import Round from './Round'

function Item({ item }){
    return (
        <div key={ item.id } className="item row justify-content-between py-4 px-3">
            <div>
                { item.name }
            </div>
            <Round id={ item.id} status={ item.status } />
        </div>
    )
}

export default Item;
