import React from 'react';
import Image from 'next/image';
import moment from "moment";
const UserCardItem = ({ user }) => {
    const userCreated = moment(user.created_at).format("DD-MM-YYYY")

    return (
        <div className="card"
            style={{ width: "24rem", position: "center" }}>
            <div className="card-header">
                <h5 className="card-title">User: {user.login}</h5>
            </div>
            <Image src={user.avatar_url}
                width={400}
                height={400}
                className="card-img-top"
                objectFit="cover"
                objectPosition="center"></Image>
            <div className="card-body">
                <h5 className="card-title">Nombre: {user.name}</h5>
                <h6 className="card-title">Id:{user.id}</h6>

                <ul className="list-group">
                    <li className="list-group-item">
                        Followers:{user.followers}
                    </li>
                    <li className="list-group-item">
                        Following:{user.following}
                    </li>
                    <li className="list-group-item">
                        Location: {user.location}
                    </li>
                    <li className="list-group-item">
                        Public Repositories:{user.public_repos}
                    </li>
                    <li className="list-group-item">
                        Member since: {userCreated}
                    </li>
                </ul>
                <p>{user.bio}</p>
                <a href={user.html_url} className="btn btn-primary">Go {user.login} GithubPage</a>
            </div>
        </div>
    );
}

export default UserCardItem;