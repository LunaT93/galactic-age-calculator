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

}