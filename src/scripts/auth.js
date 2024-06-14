//Authentication 

export function verifyUser(url, body) {
    return fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:1000',
                'Access-Control-Allow-Methods': 'GET,PUT,POST'
            }, body: JSON.stringify(body)
        },
    )
}

export function verifyAccessToken(url, token) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            "authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:1000',
            'Access-Control-Allow-Methods': 'GET,PUT,POST'
        }
    })
}

