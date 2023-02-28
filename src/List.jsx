import ListItem from "./ListItem";
import { useData } from "./redux/state";

const List = () => {

    const data = useData();

    return (

        data.map((element, i) => {

            return (
                <ListItem key={element.id} index={i} title={element.title} isDone={element.isDone} id={element.id} />
            )

        })

    )
}

export default List;