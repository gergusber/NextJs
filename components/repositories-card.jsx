import React from 'react';

const RepositoriesItem = ({ repositories }) => {
    console.log(repositories)
    return (
        <div>
            <ul className="list-group">
                {repositories.map((repository) => (
                    <li key={repository.id} className="list-group-item">
                        <a href={repository.clone_url}> {repository.name} </a>

                    </li>
                ))}
            </ul>
            {/* <style jsx>{`
                        .list-group {
                            max-height: 500px;
                            margin-bottom: 10px;
                            overflow:scroll;
                            -webkit-overflow-scrolling: touch;
                        }
                        `}</style> */}
        </div>

    );

}

export default RepositoriesItem;