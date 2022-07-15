function List({todo}){

    const listItem = todo.map((item)=>{
        return <li key={item.id}>{item.item}</li>
    })

    return(
        <>
        <ul>
            {listItem}
        </ul>
        </>

    )
}

export default List