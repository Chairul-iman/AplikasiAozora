function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
  }
  
  function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    var display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      alert('Invalid expression');
    }
  }
  