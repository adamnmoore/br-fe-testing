/**********************************
 * Magic School Bus reminder 
 * Classifications:
 *  scalene: all three sides are different  
 *  isosceles: two of its sides are equal
 *  equilateral:  all three sides are equal
 * 
 * A Valid Triangle exists when:
 *  a + b > c
 *  a + c > b
 *  b + c > a 
 **********************************/


describe('TriangleClassifier', function() {
  it('exists', function() {
    expect(TriangleClassifier).toBeDefined();
  });

  xit('classifies as triangle 4,3,2', function() {
    var result = new TriangleClassifier().classify(4,3,2);
    expect(result).toEqual('triangle');
  });

  it('classifies as scalene 4,3,2', function() {
    var result = new TriangleClassifier().classify(4,3,2);
    expect(result).toEqual('scalene');
  });

  it('classifies as isosceles 4,4,2', function() {
    var result = new TriangleClassifier().classify(4,4,2);
    expect(result).toEqual('isosceles');
  });
  it('classifies as isosceles 4,2,4', function() {
    var result = new TriangleClassifier().classify(4,2,4);
    expect(result).toEqual('isosceles');
  });
  it('classifies as isosceles 2,4,4', function() {
    var result = new TriangleClassifier().classify(2,4,4);
    expect(result).toEqual('isosceles');
  });

  it('classifies as equilateral 4,4,4', function() {
    var result = new TriangleClassifier().classify(4,4,4);
    expect(result).toEqual('equilateral');
  });

  // What happens when a side is 0?
  // What about a negative side?
});

