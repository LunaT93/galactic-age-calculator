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

  // test('should correctly identify the day as 0-6', () => {
  //   const day1 = new Date('1975-8-19');
  //   const dayOfWeek1 = new Day(day1);
  //   expect(dayOfWeek1.getTheDay()).toEqual('Tuesday'); 
  // });


    // test('should correctly determine whether three lengths are not a triangle', () => {
    //     const notTriangle = new Triangle(3,9,22);
    //     expect(notTriangle.checkType()).toEqual("not a triangle");
    // });

    // test('should correctly determine whether three lengths make a scalene triangle', () => {
    //     const scalTriangle = new Triangle(4,5,7)
    //     expect(scalTriangle.checkType()).toEqual("scalene triangle");
    // });

    // test('should correctly determine whether three lengths make an isosceles triangle', () => {
    //     const isoscTriangle = new Triangle(5,5,7)
    //     expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
    // });
    // test('should correctly determine whether three lengths make an equilateral triangle', () => {
    //     const equiTriangle = new Triangle(5,5,5)
    //     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
    //   });
});