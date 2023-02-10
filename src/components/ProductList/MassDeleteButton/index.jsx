function MassDeleteButton(checked, setChecked) {
    async function handleDelete() {
        // DELETE request requires json object with this structure:
        // {'list': '1,2,5,7'} - and will delete the included id's

        //destructuring 'checked' object to inject only numbers into body of DELETE request below
        const object = { list: checked.checked.toString() };

        const response = await fetch(
            'http://localhost/scandiweb_proj/api/delete.php',
            { method: 'DELETE', body: JSON.stringify(object) }
        );
        const data = await response.json(response);
        setChecked([0]);
        console.log(data);
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
