const deleteItem = (data, id) => {

    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {

        if (id === newData[i].id) {

            newData.splice(i, 1);

            break;

        }

    }

    return newData;

}

export default deleteItem;