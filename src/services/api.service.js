const serverLatency = 0;

export function get (endpoint, payload = {}) {
    return new Promise((resolve) => {
        fetch(`../data/${endpoint}.get.json`)
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    resolve(json.data);
                }, serverLatency);
            });
    });
}
