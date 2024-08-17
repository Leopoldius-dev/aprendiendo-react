import React, { useState } from 'react';

function App() {
  const [ingresosNetos, setIngresosNetos] = useState('');
  const [precioVivienda, setPrecioVivienda] = useState('');
  const [tipoInteres, setTipoInteres] = useState('');
  const [duracionPrestamo, setDuracionPrestamo] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcularHipoteca = () => {
    // Verificar si los campos obligatorios están llenos
    if (!tipoInteres || !duracionPrestamo) {
      alert('Por favor, rellene los campos obligatorios.');
      return;
    } else if (!ingresosNetos && !precioVivienda){
      alert('Por favor, ingrese un Ingreso neto o un Precio de vivienda.');
      return;
    }

    const i = parseFloat(tipoInteres) / 100 / 12;
    const n = parseInt(duracionPrestamo) * 12;
    let cuotaMaxima, capitalPrestado, precioMaxVivienda, ahorroEntrada, gastosEscrituracion;

    if (ingresosNetos) {
      cuotaMaxima = parseFloat(ingresosNetos) * 0.3;
    } else {
      const P = parseFloat(precioVivienda) * 0.8;
      cuotaMaxima = P * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
    }

    if (precioVivienda) {
      capitalPrestado = parseFloat(precioVivienda) * 0.8;
      ahorroEntrada = parseFloat(precioVivienda) * 0.2;
    } else {
      capitalPrestado = cuotaMaxima * ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n)));
      precioMaxVivienda = capitalPrestado / 0.8;
      ahorroEntrada = precioMaxVivienda * 0.2;
      gastosEscrituracion = precioMaxVivienda * 0.1;
    }
    
    setResultados({
      cuotaMaxima: cuotaMaxima.toFixed(2),
      capitalPrestado: capitalPrestado.toFixed(2),
      precioMaxVivienda: precioMaxVivienda.toFixed(2),
      ahorroEntrada: ahorroEntrada.toFixed(2),
      gastosEscrituracion: gastosEscrituracion.toFixed(2),
    });
  };

  const resetearCampos = () => {
    // Resetea los valores de los campos de entrada
    setIngresosNetos('');
    setPrecioVivienda('');
    setTipoInteres('');
    setDuracionPrestamo('');

    // Oculta los resultados
    setResultados(null);
  };

  return (
    <div className="App">
      <h1>Calculadora de Hipotecas</h1>
      <div>
        <label>Ingresos Netos Mensuales (opcional):</label>
        <input
          type="number"
          value={ingresosNetos}
          onChange={(e) => setIngresosNetos(e.target.value)}
        />
      </div>
      <div>
        <label>Precio de Vivienda Ofertado (opcional):</label>
        <input
          type="number"
          value={precioVivienda}
          onChange={(e) => setPrecioVivienda(e.target.value)}
        />
      </div>
      <div>
        <label>Tipo de Interés (obligatorio):</label>
        <input
          type="number"
          step="0.01"
          value={tipoInteres}
          onChange={(e) => setTipoInteres(e.target.value)}
        />
      </div>
      <div>
        <label>Duración del Préstamo (en años, obligatorio):</label>
        <input
          type="number"
          value={duracionPrestamo}
          onChange={(e) => setDuracionPrestamo(e.target.value)}
        />
      </div>
      <button onClick={calcularHipoteca}>Calcular</button>
      <button onClick={resetearCampos}>Resetear</button>

      {resultados && (
        <div>
          <h2>Resultados:</h2>
          <p>Cuota Máxima: €{resultados.cuotaMaxima}</p>
          <p>Capital Prestado por Banco: €{resultados.capitalPrestado}</p>
          <p>Precio Máximo de Vivienda: €{resultados.precioMaxVivienda}</p>
          <p>Ahorro Entrada: €{resultados.ahorroEntrada}</p>
          <p>Gastos de Escrituración: €{resultados.gastosEscrituracion}</p>
        </div>
      )}
    </div>
  );
}

export default App;
