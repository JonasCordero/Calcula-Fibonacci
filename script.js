document.getElementById('calculateButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const n = parseInt(numberInput);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    const fibonacciSeries = fibonacci(n);

    for (let num of fibonacciSeries) {
        const listItem = document.createElement('li');
        listItem.textContent = num;
        resultList.appendChild(listItem);
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('numberInput').value = '';
    document.getElementById('resultList').innerHTML = '';
});

document.getElementById('exitButton').addEventListener('click', function() {
    window.close();
});

function fibonacci(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
}
