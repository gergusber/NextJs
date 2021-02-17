// import { useRouter } from 'next/router';
import React from 'react';
import { useRouter } from "next/router";

function UsersIndexPage() {
    const router = useRouter();
    router.push("/");
    return <h1>Users Page </h1>;
}

// export async function getServerSideProps() {
//     return {
//         permanent: true,
//         destination: '/'
//     }
// }
export default UsersIndexPage;