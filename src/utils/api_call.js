const apiKey = '417390b221e44959848516f93177b905';

export const call_data = async () => {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
    const data = await response.json();
    return data.results;
};

export const call_data_by_id = async (id) => {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
    const data = await response.json();
    return data;
};

export const call_data_by_search = async (search) => {
    const response = await fetch(`https://api.rawg.io/api/games?search=${search}&key=${apiKey}`);
    const data = await response.json();
    return data.results;
}

export const call_data_by_genre = async (genre) => {
    const response = await fetch(`https://api.rawg.io/api/games?genres=${genre}&key=${apiKey}`);
    const data = await response.json();
    return data.results;
}

export const top_games = async () => {
    const response = await fetch(`https://api.rawg.io/api/games?ordering=-metacritic&key=${apiKey}`);
    const data = await response.json();
    return data.results;
}