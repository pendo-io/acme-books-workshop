const serverLatency = 0;

export function get (endpoint) {
    return new Promise((resolve) => {
        fetch(`../data/${endpoint}.json`)
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    resolve(json.data);
                }, serverLatency);
            });
    });
}

export function post (endpoint, payload = {}) {
    return new Promise((resolve) => {
        fetch(`../data/${endpoint}.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
            .then(() => {
                setTimeout(() => {
                    resolve();
                }, serverLatency);
            });
    });
}
