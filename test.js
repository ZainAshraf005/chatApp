let obj ={
    "message": "Request failed with status code 400",
    "name": "AxiosError",
    "stack": "AxiosError: Request failed with status code 400\n    at settle (http://localhost:5173/node_modules/.vite/deps/axios.js?v=7d112f25:1230:12)\n    at XMLHttpRequest.onloadend (http://localhost:5173/node_modules/.vite/deps/axios.js?v=7d112f25:1593:7)\n    at Axios.request (http://localhost:5173/node_modules/.vite/deps/axios.js?v=7d112f25:2145:41)\n    at async handleSubmit (http://localhost:5173/src/pages/Signup.jsx?t=1731484028236:43:24)",
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http",
            "fetch"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        "method": "post",
        "url": "http://localhost:3000/api/auth/register",
        "data": "{\"fullName\":\"Zain Ashraf\",\"username\":\"zain_005\",\"email\":\"zain@zain.com\",\"password\":\"password\",\"confirmPassword\":\"password\",\"gender\":\"male\"}"
    },
    "code": "ERR_BAD_REQUEST",
    "status": 400
}

console.log(obj.data)