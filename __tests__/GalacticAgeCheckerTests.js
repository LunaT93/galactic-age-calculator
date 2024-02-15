import GalacticAge from '../src/js/GalacticAgeCalculator.js';

describe('Date', () => {

  test('should corectly identify earth age as 30', () => {
    const age = new GalacticAge("30");
    expect(age.getEarthYears()).toEqual(30);
  }); 

  test('should correctly id Mercury years as .24 given input 1', () => {
    const age1 = new GalacticAge("1");
    expect(age1.getMercuryYears()).toEqual(.24);
  });

  test('should correctly identify venus, mars, jupiter years', () => {    const age2 = new GalacticAge("1");
    expect(age2.getVenusYears()).toEqual(.62);
    expect(age2.getMarsYears()).toEqual(1.88);
    expect(age2.getJupiterYears()).toEqual(11.86);
});

  test('built out constructor function should correctly identify each planetYears variable', () => {    const age2 = new GalacticAge("1");
    const age3 = new GalacticAge("1");    
    expect(age3.venusYears).toEqual(.62);
    expect(age3.marsYears).toEqual(1.88);
    expect(age3.jupiterYears).toEqual(11.86);
  });

});