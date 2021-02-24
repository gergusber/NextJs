import React from "react";
import axios from "axios";

function TestPage({ }) {
    if (typeof window !== "undefined") {
        window.document.cookie = "foo=bar";
    }
    axios
        .post(
            "/api/mypost",
            {},
            {
                headers: {
                    auth: "my_token",
                },
            }
        )
        .catch((e) => console.log(e))
        .then((d) => console.log(d));
    return <span>Test Page</span>;
}

export default TestPage;
