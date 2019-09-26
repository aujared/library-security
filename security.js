function analyzeSecurity(array){
  let countObj = {
    truePositive: 0,
    falsePositive: 0,
    trueNegative: 0,
    falseNegative: 0,
  }
  _.map(array, function(iter){
    countObj.truePositive += iter.truePositive;
    countObj.falsePositive += iter.falsePositive;
    countObj.trueNegative += iter.trueNegative;
    countObj.falseNegative += iter.falseNegative;
  })

  console.log(`truePositive: ${countObj.truePositive}`);
  console.log(`falsePositive: ${countObj.falsePositive}`);
  console.log(`trueNegative: ${countObj.trueNegative}`);
  console.log(`falseNegative: ${countObj.falseNegative}`);
}


console.log(analyzeSecurity([
  {
    truePositive: 1,
    falsePositive: 4,
    trueNegative: 8,
    falseNegative: 2,
  },
  {
    truePositive: 2,
    falsePositive: 4,
    trueNegative: 16,
    falseNegative: 1,
  }
]));
