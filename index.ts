import axios from "axios";

export default class SWAPI {
    private static baseURL: string = "https://swapi.dev/api/";

    public static async getPerson(search: string): Promise<ISWPerson | undefined> {
        let person: ISWPerson | undefined;
        if (search.startsWith(this.baseURL)) person = (await axios.get(search)).data;
        else person = (await axios.get(`${this.baseURL}people/?search=${search}`)).data.results[0];
        return person;
    }

    public static async getAllFilms(): Promise<ISWFilm[]> {
        return (await axios.get(`${this.baseURL}films`)).data.results;
    }

    public static async getAllStarships(): Promise<ISWStarship[]> {
        return (await axios.get(`${this.baseURL}starships`)).data.results;
    }

    public static async getAllVehicles(): Promise<ISWVehicle[]> {
        return (await axios.get(`${this.baseURL}vehicles`)).data.results;
    }

    public static async getAllSpecies(): Promise<ISWSpecies[]> {
        return (await axios.get(`${this.baseURL}species`)).data.results;
    }

    public static async getAllPlanets(): Promise<ISWPlanet[]> {
        return (await axios.get(`${this.baseURL}planets`)).data.results;
    }

    public static async getFilm(search: string): Promise<ISWFilm | undefined> {
        let film: ISWFilm | undefined;
        if (search.startsWith(this.baseURL)) film = (await axios.get(search)).data;
        else film = (await axios.get(`${this.baseURL}films/?search=${search}`)).data.results[0];
        return film;
    }

    public static async getStarship(search: string): Promise<ISWStarship | undefined> {
        let starship: ISWStarship | undefined;
        if (search.startsWith(this.baseURL)) starship = (await axios.get(search)).data;
        else starship = (await axios.get(`${this.baseURL}starships/?search=${search}`)).data.results[0];
        return starship;
    }

    public static async getVehicle(search: string): Promise<ISWVehicle | undefined> {
        let vehicle: ISWVehicle | undefined;
        if (search.startsWith(this.baseURL)) vehicle = (await axios.get(search)).data;
        else vehicle = (await axios.get(`${this.baseURL}vehicles/?search=${search}`)).data.results[0];
        return vehicle;
    }

    public static async getSpecies(search: string): Promise<ISWSpecies | undefined> {
        let species: ISWSpecies | undefined;
        if (search.startsWith(this.baseURL)) species = (await axios.get(search)).data;
        else species = (await axios.get(`${this.baseURL}species/?search=${search}`)).data.results[0];
        return species;
    }

    public static async getPlanet(search: string): Promise<ISWPlanet | undefined> {
        let planet: ISWPlanet | undefined;
        if (search.startsWith(this.baseURL)) planet = (await axios.get(search)).data;
        else planet = (await axios.get(`${this.baseURL}planets/?search=${search}`)).data.results[0];
        return planet;
    }

    public static async getPeopleFromArrayOfURLs(people: string[]): Promise<ISWPerson[]> {
        const results: ISWPerson[] = [];
        for (const person of people) results.push((await axios.get(person)).data);
        return results;
    }

    public static async getFilmsFromArrayOfURLs(films: string[]): Promise<ISWFilm[]> {
        const results: ISWFilm[] = [];
        for (const film of films) results.push((await axios.get(film)).data);
        return results;
    }

    public static async getPlanetsFromArrayOfURLs(planets: string[]): Promise<ISWPlanet[]> {
        const results: ISWPlanet[] = [];
        for (const planet of planets) results.push((await axios.get(planet)).data);
        return results;
    }

    public static async getSpeciesFromArrayOfURLs(species: string[]): Promise<ISWSpecies[]> {
        const results: ISWSpecies[] = [];
        for (const _species of species) results.push((await axios.get(_species)).data);
        return results;
    }

    public static async getStarshipsFromArrayOfURLs(starships: string[]): Promise<ISWStarship[]> {
        const results: ISWStarship[] = [];
        for (const starship of starships) results.push((await axios.get(starship)).data);
        return results;
    }

    public static async getVehiclesFromArrayOfURLs(vehicles: string[]): Promise<ISWVehicle[]> {
        const results: ISWVehicle[] = [];
        for (const vehicle of vehicles) results.push((await axios.get(vehicle)).data);
        return results;
    }

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