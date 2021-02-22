import React from "react";
import Image from 'next/image';

function UserCard({ name, image }) {
    return (
        <div className="card"
            style={{ width: "24rem", position: "center" }}>
            <div className="card-header">
                <h5 className="card-title">User: {name}</h5>
            </div>
            <Image src={image}
                width={100}
                height={200}
                className="card-img-top"
                objectFit="fit"
                objectPosition="center"></Image>
            <div className="card-body">
            </div>
        </div>
    );
}

export default UserCard;
