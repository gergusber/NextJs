import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchUser from "../components/search-user";
import moment from "moment";
import useSWR from "swr";
import { githubFetcher } from "../libs/github-fetcher";
import UserCardList from "../components/user-card-list";

function IndexPage({ buildDateTime, initialUsers }) {

    const [inputValue, setInputValue] = useState("Mi Valor Inicial");
    const router = useRouter();
    const [page, setPage] = useState(0);
    const fetchLimit = 20;

    useEffect(() => {
        console.log(router.query.page);
        const parsedPage = parseInt(router.query.page);
        setPage(parsedPage || null)
    }, [router.query.page])

    const { data, error } = useSWR(
        page ? `/users?since=${page * fetchLimit}&per_page=${fetchLimit}` :
            `/users?per_page=${fetchLimit}`
        , githubFetcher,
        { initialData: page ? [] : initialUsers });
    const isUserListLoading = (!data && !error) || false;
    return (
        <div>
            <SearchUser
                value={inputValue}
                setValue={setInputValue}
                onSearch={() => router.push("/users/" + inputValue)}
            />
            {isUserListLoading ? (
                <div>Loading...</div>
            ) : (
                    <div>
                        <UserCardList users={data} />
                        <button onClick={() => router.push(`/${page - 1 > 0 ? "?page=" + (page - 1) : ""}`)}>Prev Page</button>
                        <button onClick={() => router.push(`/?page=${page + 1}`)}>Next Page</button>
                    </div>
                )}

            <div>
                <p>{buildDateTime}</p>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const users = await githubFetcher("/users");
    return {
        props: {
            buildDateTime: moment().format("DD-MM-YYYY hh:mm:ss"),
            initialUsers: users,
        },
        revalidate: 1,
    };
}

export default IndexPage;
