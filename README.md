# swapi-handler
A Star Wars API handler for node.js

## TypeScript
``` ts
import SWAPI, { ISWPerson, ISWFilm, ISWPlanet, ISWSpecies, ISWStarship, ISWVehicle } from "swapi-handler";

(async () => {
    const HanSolo: ISWPerson | undefined = await SWAPI.getPerson("Han Solo");
    const EmpireStrikesBack: ISWFilm | undefined = await SWAPI.getFilm("Empire Strikes Back");
    const Naboo: ISWPlanet | undefined = await SWAPI.getPlanet("Naboo");
    const Wookie: ISWSpecies | undefined = await SWAPI.getSpecies("Wookie");
    const XWing: ISWStarship | undefined = await SWAPI.getStarship("X-Wing");
    const Speeder: ISWVehicle | undefined = await SWAPI.getVehicle("Speeder");
    console.log(HanSolo);
    console.log(EmpireStrikesBack);
    console.log(Naboo);
    console.log(Wookie);
    console.log(XWing);
    console.log(Speeder);

    // Useful for getting all information from an object.
    const WookieFilms: ISWFilm[] = await SWAPI.getFilmsFromArrayOfURLs(Wookie?.films || []);
    console.log(WookieFilms);
})();
```

## JavaScript
``` js
const SWAPI = require("swapi-handler");

(async () => {
    const HanSol = await SWAPI.getPerson("Han Solo");
    const EmpireStrikesBack = await SWAPI.getFilm("Empire Strikes Back");
    const Naboo = await SWAPI.getPlanet("Naboo");
    const Wookie = await SWAPI.getSpecies("Wookie");
    const XWing = await SWAPI.getStarship("X-Wing");
    const Speeder = await SWAPI.getVehicle("Speeder");
    console.log(HanSolo);
    console.log(EmpireStrikesBack);
    console.log(Naboo);
    console.log(Wookie);
    console.log(XWing);
    console.log(Speeder);

    // Useful for getting all information from an object.
    const WookieFilms = await SWAPI.getFilmsFromArrayOfURLs(Wookie ? Wookie.films : []);
    console.log(WookieFilms);
})();
```