"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class SWAPI {
    static async getPerson(search) {
        let person;
        if (search.startsWith(this.baseURL))
            person = (await axios_1.default.get(search)).data;
        else
            person = (await axios_1.default.get(`${this.baseURL}people/?search=${search}`)).data.results[0];
        return person;
    }
    static async getAllFilms() {
        return (await axios_1.default.get(`${this.baseURL}films`)).data.results;
    }
    static async getAllStarships() {
        return (await axios_1.default.get(`${this.baseURL}starships`)).data.results;
    }
    static async getAllVehicles() {
        return (await axios_1.default.get(`${this.baseURL}vehicles`)).data.results;
    }
    static async getAllSpecies() {
        return (await axios_1.default.get(`${this.baseURL}species`)).data.results;
    }
    static async getAllPlanets() {
        return (await axios_1.default.get(`${this.baseURL}planets`)).data.results;
    }
    static async getFilm(search) {
        let film;
        if (search.startsWith(this.baseURL))
            film = (await axios_1.default.get(search)).data;
        else
            film = (await axios_1.default.get(`${this.baseURL}films/?search=${search}`)).data.results[0];
        return film;
    }
    static async getStarship(search) {
        let starship;
        if (search.startsWith(this.baseURL))
            starship = (await axios_1.default.get(search)).data;
        else
            starship = (await axios_1.default.get(`${this.baseURL}starships/?search=${search}`)).data.results[0];
        return starship;
    }
    static async getVehicle(search) {
        let vehicle;
        if (search.startsWith(this.baseURL))
            vehicle = (await axios_1.default.get(search)).data;
        else
            vehicle = (await axios_1.default.get(`${this.baseURL}vehicles/?search=${search}`)).data.results[0];
        return vehicle;
    }
    static async getSpecies(search) {
        let species;
        if (search.startsWith(this.baseURL))
            species = (await axios_1.default.get(search)).data;
        else
            species = (await axios_1.default.get(`${this.baseURL}species/?search=${search}`)).data.results[0];
        return species;
    }
    static async getPlanet(search) {
        let planet;
        if (search.startsWith(this.baseURL))
            planet = (await axios_1.default.get(search)).data;
        else
            planet = (await axios_1.default.get(`${this.baseURL}planets/?search=${search}`)).data.results[0];
        return planet;
    }
    static async getPeopleFromArrayOfURLs(people) {
        const results = [];
        for (const person of people)
            results.push((await axios_1.default.get(person)).data);
        return results;
    }
    static async getFilmsFromArrayOfURLs(films) {
        const results = [];
        for (const film of films)
            results.push((await axios_1.default.get(film)).data);
        return results;
    }
    static async getPlanetsFromArrayOfURLs(planets) {
        const results = [];
        for (const planet of planets)
            results.push((await axios_1.default.get(planet)).data);
        return results;
    }
    static async getSpeciesFromArrayOfURLs(species) {
        const results = [];
        for (const _species of species)
            results.push((await axios_1.default.get(_species)).data);
        return results;
    }
    static async getStarshipsFromArrayOfURLs(starships) {
        const results = [];
        for (const starship of starships)
            results.push((await axios_1.default.get(starship)).data);
        return results;
    }
    static async getVehiclesFromArrayOfURLs(vehicles) {
        const results = [];
        for (const vehicle of vehicles)
            results.push((await axios_1.default.get(vehicle)).data);
        return results;
    }
}
exports.default = SWAPI;
SWAPI.baseURL = "https://swapi.dev/api/";
