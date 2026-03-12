export default function ToDo(props) {
    console.log(props);
    return (
        <div>
        <h2>Todo lists</h2>
        <p>{props.task}</p>
        </div>
    );
}
