import React from "react";
import Link from "next/link";
import UserCard from "./user-card";

function UserCardList({ users }) {

    console.log(users)
    return (
        <div>
            <div className="">
                <ul className="list-group">
                    {users.map((user) => (
                        <li key={user.id} className="col-5">
                            <Link href={`/users/${user.login}`}>
                                <a>
                                    <UserCard name={user.login} image={user.avatar_url} />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>{`
                        .list-group {
                            list-style: none;
                            display:grid;
                            grid-template-columns: auto auto auto auto;

                        }
                        .li{
                        }
                        `}</style>
        </div>

    );
}

export default UserCardList;
