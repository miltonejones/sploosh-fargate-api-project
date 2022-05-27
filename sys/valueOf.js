
exports.valueOf = o => { 
    if (typeof o === 'object') {
      return Object.values(o)[0];
    }
  
    return o; 
  }
    