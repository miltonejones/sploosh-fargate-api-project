
  function keyFromText(title) {
    const match = [/\[([^\]]+)]/, /([a-z|A-Z]+-\d+)/, /(FC\d-PPV\s[0-9]+)/]
      .map((regex) => {
        return regex.exec(title);
      })
      .filter((f) => !!f)[0];
    if (match) {
      return match[1].toLowerCase();
    }
    return "";
  }

  exports.keyFromText = keyFromText;