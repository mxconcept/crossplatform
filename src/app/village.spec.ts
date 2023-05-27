import { Village } from "./lab4/lab4.page";

describe('Village testing', ()=> {
    let village:Village;
    beforeEach(()=>
    {
        village = new Village ("Village1", 10, 4, 100)
    })

    it("creating Village instance" , ()=> {
        expect(village).toBeTruthy();
    })

    it("should correctly set properties when constructed", () => {
        expect(village.name).toBe('Village1');
        expect(village.numberOfHouses).toBe(10);
        expect(village.numberOfResidentsPerHouse).toBe(4);
        expect(village.area).toBe(100);
    })

    it("getPopulationDensity should return correct population density", () => {
        const expectedDensity = (10 * 4) / 100;
        expect(village.getPopulationDensity()).toEqual(expectedDensity);
    })

    it("getPopulation should return correct population", () => {
        const expectedPopulation = 10 * 4;
        expect(village.getPopulation()).toEqual(expectedPopulation);
    })

    it("getArea should return correct area", () => {
        expect(village.getArea()).toBe(100);
    })
})
