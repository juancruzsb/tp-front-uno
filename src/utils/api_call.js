export const call_data = () => {
     fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            const games = data.results;
        });

    return games;
}