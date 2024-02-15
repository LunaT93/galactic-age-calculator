export default class GalacticDifference {
    constructor(birthYear1, birthYear2){
    this.birthYear1 = birthYear1;
    this.birthYear2 = birthYear2;
    this.earthDifference = this.getEarthDifference();
    this.mercuryDifference = this.getMercuryDifference
    this.venusDifference = this.getVenusDifference;
    this.marsDifference = this.getMarsDifference;
    this.jupiterDifference = this.getJupiterDifference;
    }

    getEarthDifference() {
        return Number(this.birthYear1 - this.birthYear2);
    }

    getMercuryDifference() {
        return (this.earthDifference*.24);
    } 

    getVenusDifference() {
        return (this.earthDifference*.62);
    } 

    getMarsDifference() {
        return (this.earthDifference*1.88);
    } 

    getJupiterDifference() {
        return (this.earthDifference*11.86);
    } 

}