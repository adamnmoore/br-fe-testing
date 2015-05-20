var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
  	// if (a + b > c && a + c > b && b + c > a) {
   //  	return "triangle";
  	// }
  	if (a != b && b != c && c != a) {
    	return "scalene";
	}
  	if (a == b && b != c) {
    	return "isosceles";
	}
  	if (b == c && c != a) {
    	return "isosceles";
	}
  	if (c == a && a != b) {
    	return "isosceles";
	}
  	if (a == b && b == c) {
    	return "equilateral";
	}
  };
};
