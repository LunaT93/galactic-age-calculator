export default class GalacticAge {
  constructor(earthYears) {
    this.mercuryYears = this.getMercuryYears();
    this.earthYears = Number(earthYears);
    this.venusYears = this.getVenusYears();
    this.marsYears = this.getMarsYears();
    this.jupiterYears = this.getJupiterYears();
    
  }

  getEarthYears() {
    return this.earthYears*1;
  }

  getMercuryYears() {
    return this.earthYears*.24;
  }

  getVenusYears() {
    return this.earthYears*.62;
  }

  getMarsYears() {
    return this.earthYears*1.88;
  }

  getJupiterYears() {
    return this.earthYears*11.86;
  }
  
}