exports.durationOf = o => {
    if (!o) return 0;
    const hourEx = /(\d+)\s+h\s+(\d+)\s+min/.exec(o);
    const textEx = /(\d+)\s+(\w+)/.exec(o)
    const timeEx = /(\d+)\:(\d+)/.exec(o)
    const timeLg = /(\d+)\:(\d+)\:(\d+)/.exec(o)
    if (hourEx) {
      const val = (hourEx[1] * 3600) +  (hourEx[2] * 60);
      return val 
    }
    if (timeLg) {
      const val = (timeLg[1] * 3600) +  (timeLg[2] * 60) + parseInt(timeLg[3]);
      return val 
    }
    if (timeEx) {
      const val = (timeEx[1] * 60) + parseInt(timeEx[2]);
      return val 
    }
    if (textEx) {
      if (textEx[2] === 'min') return textEx[1] * 60
      return textEx[1] 
    }
    return 0;
  }