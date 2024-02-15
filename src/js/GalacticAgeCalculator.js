export default class GalacticAge {
  constructor(earthYears) {
    this.earthYears = Number(earthYears);
  }

  getEarthYears() {
    const earthAge = this.earthYears*1;
    return earthAge;
  }

  getMercuryYears() {
    const mercuryAge = this.earthYears*.24;
    return mercuryAge;
  }

  getVenusYears() {
    const venusAge = this.earthYears*.62;
    return venusAge;
  }

  getMarsYears() {
    const marsAge = this.earthYears*1.88;
    return marsAge;
  }

  getJupiterYears() {
    const jupiterAge = this.earthYears*11.86;
    return jupiterAge;
  }
  

}