const checkboxChange = (data, id) => {

    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {

        if (id === newData[i].id) {

            if (newData[i].isDone) {

                newData[i].isDone = false;

            } else {

                newData[i].isDone = true;

            }

            break;

        }

    }

    return newData;

}

export default checkboxChange;