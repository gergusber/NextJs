import React from "react";
import { githubFetcher } from "../../libs/github-fetcher";
import { useRouter } from "next/router";
import Image from 'next/image';

function UserPage({ user }) {
    const router = useRouter();
    const isFallback = router.isFallback;
    if (isFallback) {
        return <span>Loading...</span>;
    }
    return (
        <div>
            <Image src={user.avatar_url}
                width={200}
                height={200}
                className="avatar"
                objectFit="cover"
                objectPosition="center"></Image>
            <span>
                Usuario: {user.login} - {user.id} - {user.bio}
            </span>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const user = await githubFetcher("/users/" + params.user);
    return {
        props: {
            user,
        },
        revalidate: 1,
    };
}

export async function getStaticPaths() {
    const users = ["axeltaylor", "mojombo", "defunkt"];
    return {
        paths: users.map((username) => ({ params: { user: username } })),
        fallback: true,
    };
}

export default UserPage;
