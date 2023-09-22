import SecondOffer from "../secondPage/secondOffer/secondOffer"
import data from "../data/data"

function Test({ data, onUpdateSearch, filter, onFilterSelect, deleteItem }) {
    return (
        <div>
            <SecondOffer
                data={data}
                onFilterSelect={onFilterSelect}
                onUpdateSearch={onUpdateSearch}
                deleteItem={deleteItem}
                filter={filter}
            />
        </div>
    )
}
export { Test }