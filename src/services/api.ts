export function fetchCharacters() {
  return fetch(`https://disney_api.nomadcoders.workers.dev/characters`).then(
    (response) => response.json()
  );
}

export function fetchCharacterDetail(Id: string) {
  return fetch(
    `https://disney_api.nomadcoders.workers.dev/characters/${Id}`
  ).then((response) => response.json());
}
