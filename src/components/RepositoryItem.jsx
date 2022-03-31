export function RepositoryItem(props){
    return (
        <li>
        <strong>{props.repository ?? 'default'}</strong>
        <p>Forms in Reactjs</p>

        <a href="">
            acessar respositório
        </a>
    </li>
    )
}