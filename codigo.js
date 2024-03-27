document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById('saveButton');
    const loadButton = document.getElementById('loadButton');
    const historyButton = document.getElementById('historyButton');
    const outputDiv = document.getElementById('output');
    let historyData = []; 

  
    saveButton.addEventListener('click', function() {
        const data = { message: '¡Hola mundo!' }; 
        localStorage.setItem('data', JSON.stringify(data)); 
        outputDiv.innerText = 'Datos guardados correctamente.';
    });

  
    loadButton.addEventListener('click', function() {
        const inputData = prompt('Ingrese los datos que desea cargar:'); 
        if (inputData !== null && inputData.trim() !== '') {
            const data = { message: inputData.trim() }; 
            outputDiv.innerText = 'Datos cargados: ' + data.message;
            historyData.push(data); 
        } else {
            outputDiv.innerText = 'No se ingresaron datos.';
        }
    });

  
    historyButton.addEventListener('click', function() {
        if (historyData.length > 0) {
            let historyOutput = 'Historial de datos cargados:\n';
            historyData.forEach(function(data, index) {
                historyOutput += `${index + 1}. ${data.message}\n`;
            });
            outputDiv.innerText = historyOutput;
        } else {
            outputDiv.innerText = 'No hay historial de datos cargados.';
        }
    });
});

