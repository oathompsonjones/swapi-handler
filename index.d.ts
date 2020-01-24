export default class SWAPI {
    private static baseURL: string;
    public static getPerson(search: string): Promise<ISWPerson | undefined>;
    public static getFilm(search: string): Promise<ISWFilm | undefined>;
    public static getStarship(search: string): Promise<ISWStarship | undefined>;
    public static getVehicle(search: string): Promise<ISWVehicle | undefined>;
    public static getSpecies(search: string): Promise<ISWSpecies | undefined>;
    public static getPlanet(search: string): Promise<ISWPlanet | undefined>;
    public static getPeopleFromArrayOfURLs(people: string[]): Promise<ISWPerson[]>;
    public static getFilmsFromArrayOfURLs(films: string[]): Promise<ISWFilm[]>;
    public static getPlanetsFromArrayOfURLs(planets: string[]): Promise<ISWPlanet[]>;
    public static getSpeciesFromArrayOfURLs(species: string[]): Promise<ISWSpecies[]>;
    public static getStarshipsFromArrayOfURLs(starships: string[]): Promise<ISWStarship[]>;
    public static getVehiclesFromArrayOfURLs(vehicles: string[]): Promise<ISWVehicle[]>;
}

export interface ISWPerson {
    readonly name: string;
    readonly height: string;
    readonly mass: string;
    readonly hair_color: string;
    readonly skin_color: string;
    readonly eye_color: string;
    readonly birth_year: string;
    readonly gender: string;
    readonly homeworld: string;
    readonly films: string[];
    readonly species: string[];
    readonly vehicles: string[];
    readonly starships: string[];
    readonly created: string;
    readonly edited: string;
    readonly url: string;
}

export interface ISWFilm {
    readonly title: string;
    readonly episode_id: number;
    readonly opening_crawl: string;
    readonly director: string;
    readonly producer: string;
    readonly release_date: string;
    readonly characters: string[];
    readonly planets: string[];
    readonly starships: string[];
    readonly vehicles: string[];
    readonly species: string[];
    readonly created: string;
    readonly edited: string;
    readonly url: string;
}

export interface ISWPlanet {
    readonly name: string;
    readonly rotation_period: string;
    readonly orbital_period: string;
    readonly diameter: string;
    readonly climate: string;
    readonly gravity: string;
    readonly terrain: string;
    readonly surface_water: string;
    readonly population: string;
    readonly residents: string[];
    readonly films: string[];
    readonly created: string;
    readonly edited: string;
    readonly url: string;
}

export interface ISWSpecies {
    readonly name: string;
    readonly classification: string;
    readonly designation: string;
    readonly average_height: string;
    readonly skin_colors: string;
    readonly hair_colors: string;
    readonly eye_colors: string;
    readonly average_lifespan: string;
    readonly homeworld: string;
    readonly language: string;
    readonly people: string[];
    readonly films: string[];
    readonly created: string;
    readonly edited: string;
    readonly url: string;
}

export interface ISWStarship {
    readonly name: string;
    readonly model: string;
    readonly manufacturer: string;
    readonly cost_in_credits: string;
    readonly length: string;
    readonly max_atmosphering_speed: string;
    readonly crew: string;
    readonly passengers: string;
    readonly cargo_capacity: string;
    readonly consumables: string;
    readonly hyperdrive_rating: string;
    readonly MGLT: string;
    readonly starship_class: string;
    readonly pilots: string[];
    readonly films: string[];
    readonly created: string;
    readonly edited: string;
    readonly url: string;
}

export interface ISWVehicle {
    readonly name: string;
    readonly model: string;
    readonly manufacturer: string;
    readonly cost_in_credits: string;
    readonly length: string;
    readonly max_atmosphering_speed: string;
    readonly crew: string;
    readonly passengers: string;
    readonly cargo_capacity: string;
    readonly consumables: string;
    readonly vehicle_class: string;
    readonly pilots: string[];
    readonly films: string[];
    readonly created: string;
    readonly edited: string;
    readonly url: string;
}