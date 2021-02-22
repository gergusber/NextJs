import React from "react";
import { githubFetcher } from "../../libs/github-fetcher";
import { useRouter } from "next/router";
import moment from "moment";
import UserCardItem from '../../components/user-card-item'
import RepositoriesItem from "../../components/repositories-card";


function UserPage({ user, repos }) {
    const router = useRouter();
    const isFallback = router.isFallback;
    console.log(repos);
    const userCreated = moment(user.created_at).format("DD-MM-YYYY")
    const userSomething = user != null;
    if (isFallback) {
        return <span>Loading...</span>;
    }
    return (

        <div className="container">
            <div className="list-group">
                <div className="">
                    <UserCardItem user={user} />
                </div>
                <div className="">
                    <RepositoriesItem repositories={repos} />
                </div>
            </div>

            <style jsx>{`
                .list-group {
                            display:grid;
                            grid-template-columns: auto auto;
                        }
                        `}</style>

        </div>
    );
}

export async function getStaticProps({ params }) {
    const user = await githubFetcher("/users/" + params.user);
    const repos = await githubFetcher("/users/" + params.user + "/repos");
    return {
        props: {
            user,
            repos,
        },
        revalidate: 1,
    };
}

export async function getStaticPaths() {
    const users = ["axeltaylor", "mojombo", "defunkt", "gergusber"];
    return {
        paths: users.map((username) => ({ params: { user: username } })),
        fallback: true,
    };
}

export default UserPage;
