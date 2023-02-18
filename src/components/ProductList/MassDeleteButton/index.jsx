import { useContext } from 'react';
import { ListContext } from '../../../App';

function MassDeleteButton({ checked, setChecked }) {
    //bringing in list Context with reducer from App.jsx
    const listContext = useContext(ListContext);

    async function handleDelete() {
        // DELETE request requires json object with this structure:
        // {'list': '1,2,5,7'} - and will delete the included id's
        console.log(listContext.listState);

        //structuring object to inject into body of DELETE request below
        const object = { list: checked.toString() };

        try {
            const response = await fetch(
                'https://e-commerce-proj-backend.000webhostapp.com/delete.php',
                { method: 'DELETE', body: JSON.stringify(object) }
            );
            console.log(JSON.stringify(object));
            const data = await response.json();
            console.log(data);
            //setting checked list back to empty
            setChecked([]);
            listContext.listDispatch({ type: 'trigger' });
        } catch (error) {
            console.log('There was an error', error);
        }
    }

    return (
        <>
            <button id='delete-product-button' onClick={handleDelete}>
                MASS DELETE
            </button>
        </>
    );
}

export default MassDeleteButton;
