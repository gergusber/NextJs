import moment from "moment";

export function timeService() {
  return moment().toString();
}

const withToken = (handler) => {
  return (req, resp) => {
    if (req.headers.auth) {
      // validation
      if (req.headers.auth === "my_token") {
        return handler(req, resp);
      }
    }
    resp.status(403);
    return resp.send();
  };
};

const withMethod = (method, handler) => {
  return (req, resp) => {
    if (req.method === method) {
      return handler(req, resp);
    }
    resp.status(400);
    return resp.send();
  };
};

const withBody = (handler) => {
  return (req, resp) => {
    if (req.method === "GET") {
      req.body = {
        name: "Pablo",
      };
    }
    return handler(req, resp);
  };
};

function getTime(req, res) {
  // if (req.method !== "GET") {
  //   res.status(400);
  //   return res.send();
  // }
  console.log("Method: " + req.method);
  console.log("Query: " + JSON.stringify(req.query || {}));
  console.log("Body: " + JSON.stringify(req.body || {}));
  console.log("Cookies: " + JSON.stringify(req.cookies || {}));
  console.log("Headers: " + JSON.stringify(req.headers || {}));
  const now = timeService();
  res.json({ date: now });
}

export default withMethod("POST", withToken(withBody(getTime)));
