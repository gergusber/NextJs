
import React from 'react';
import { useRouter } from "next/router";


function UsersIndexPage() {
    const router = useRouter();
    router.push("/");
    return (
        <h1>Users Page</h1>
    );
}

export default UsersIndexPage;