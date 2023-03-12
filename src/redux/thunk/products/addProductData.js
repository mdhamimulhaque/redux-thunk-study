import { addProducts } from "../../actions/productAction";

const addProductData = (product) => {
    return async (dispatch, getStart) => {
        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json"
            }
        });
        const data = await res.json();

        if (data.acknowledgement) {
            dispatch(addProducts({
                _id: data.insertedId,
                ...product
            }))
        }
    }
};

export default addProductData;