import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const TestPage = () => {

    // const gotoIndex=()=>{
    //     const router = useRouter();
    //     router.push("/")
    // }


    const router = useRouter();
    console.log(router.query)
    return <span>Hello world!
        <Link href="/"> holas</Link>
        {/* <button onClick={gotoIndex}>index</button> */}
    </span>
}


export default TestPage;