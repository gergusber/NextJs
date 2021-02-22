import React from "react";
import Image from 'next/image';

function UserCard({ name, image }) {
    return (
        // <div>
        //     <h1>{name}</h1>
        // </div>
        <div className="card"
            style={{ width: "24rem", position: "center" }}>
            <div className="card-header">
                <h5 className="card-title">User: {name}</h5>
            </div>
            <Image src={image}
                width={70}
                height={150}
                className="card-img-top"
                objectFit="fit"
                objectPosition="center"></Image>
            <div className="card-body">
                {/* <h5 className="card-title">Nombre: {user.name}</h5> */}

                {/* <a href={user.html_url} className="btn btn-primary">Go {user.login} GithubPage</a> */}
            </div>
        </div>
    );
}

export default UserCard;
