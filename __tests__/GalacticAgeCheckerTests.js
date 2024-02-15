import GalacticAge from '../src/js/GalacticAgeCalculator.js';
import GalacticDifference from '../src/js/GalacticDifferenceCalculator.js';

//all inputs are entered as strings to ensure that Number(earthXs) works

describe('Galactic Age', () => {

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

  test('built out constructor function should correctly identify each planetYears variable', () => {
    const age3 = new GalacticAge("1");    
    expect(age3.venusYears).toEqual(.62);
    expect(age3.marsYears).toEqual(1.88);
    expect(age3.jupiterYears).toEqual(11.86);
  });

});

describe('Galactic Year Difference', () => {

  test('should corectly identify earth age as 30', () => {
    const difference1 = new GalacticDifference("35", "30");
    expect(difference1.earthDifference).toEqual(5);
  }); 

  test('should correctly identify all the rest of the year differences', () => {
    const difference2 = new GalacticDifference("31", "30");
    expect(difference2.earthDifference).toEqual(1); //Earth Difference is not a function
    expect(difference2.mercuryDifference()).toEqual(.24);
    expect(difference2.venusDifference()).toEqual(.62);
    expect(difference2.marsDifference()).toEqual(1.88);
    expect(difference2.jupiterDifference()).toEqual(11.86);
  }); 


  test('should correctly reverse year differences with negative outputs', () => {
    const difference2 = new GalacticDifference("30", "31");
    expect(difference2.earthDifference).toEqual(-1); //Earth Difference is not a function
    expect(difference2.mercuryDifference()).toEqual(-.24);
    expect(difference2.venusDifference()).toEqual(-.62);
    expect(difference2.marsDifference()).toEqual(-1.88);
    expect(difference2.jupiterDifference()).toEqual(-11.86);
  });

});