import { removeProducts } from "../../actions/productAction";

const deleteProductData = (id) => {
    return async (dispatch, getStart) => {
        const res = await fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            body: JSON.stringify(id),
            headers: {
                "content-type": "application/json"
            }
        });
        const data = await res.json();

        if (data.acknowledgement) {
            dispatch(removeProducts(id))
        }
    }
};

export default deleteProductData;