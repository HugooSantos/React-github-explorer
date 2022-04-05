import { useState, useEffect} from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {
    name: 'unform',
    description:'forms in react',
    link:'https://github.com/HugooSantos'
}


export function RepositoryList(){
    const [repositories, setRepositories] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/HugooSantos/repos')
        .then(Response => Response.json())
        .then(data => setRepositories(data))
    },[])

    console.log();
    
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />

            </ul>
        </section>
    ) 
}