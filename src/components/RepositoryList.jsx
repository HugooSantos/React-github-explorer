import { RepositoryItem } from "./RepositoryItem";


export function RepositoryList(){
    return (
        <section classname="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository="unform2" description="Forms in react" link= "" />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />

            </ul>
        </section>
    ) 
}