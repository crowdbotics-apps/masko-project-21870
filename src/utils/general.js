export function shallowEqual(objA , objB ) {
    if (objA === objB) {
      return true;
    }
  
    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Test for A's keys different from B.
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }
  
  export function shallowCompare(instance, nextProps, nextState) {
    return (
      !shallowEqual(instance.props, nextProps) ||
      !shallowEqual(instance.state, nextState)
    );
  }


  export function formatNumber(input){
    if(input){
      input = parseFloat(input)
      var rounded = Math.round((input + Number.EPSILON) * 100) / 100;
      return rounded
    }else{
      return 0
    }
    

  }

  export function formatCurrency(input){
        return '$'+formatNumber(input)
  }