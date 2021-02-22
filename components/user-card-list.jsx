import React from "react";
import Link from "next/link";
import UserCard from "./user-card";

function UserCardList({ users }) {

    console.log(users)
    return (
        <div>
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user.id} className="list-group-item">
                        <Link href={`/users/${user.login}`}>
                            <a>
                                <UserCard name={user.login} image={user.avatar_url} />
                            </a>
                        </Link>
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

export default UserCardList;
