function convert(type) {
    if (type == "celsius") {
      let celsius = document.getElementById("celsius").value;
      let fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("fahrenheit").value = fahrenheit;
    } else {
      let fahrenheit = document.getElementById("fahrenheit").value;
      let celsius = (fahrenheit - 32) * 5/9;
      document.getElementById("celsius").value = celsius;
    }
  }
  
  function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
  }
  