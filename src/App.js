import React from 'react';

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Learn With Us</h1>
      <table>
        <tr>
          <td className="td2">Nombre 1</td>
          <td className="td2">Nombre 2</td>
          <td className="td2">Apellido 1</td>
          <td className="td2">Apellido 2</td>
          <td className="td2">Correo</td>
          <td className="td2">Teléfono</td>
        </tr>
        <tr>
          <td>Santiago</td>
          <td className="none"></td>
          <td>Álvarez</td>
          <td>Muñoz</td>
          <td>santiagoa150@gmail.com</td>
          <td>3008185774</td>
        </tr>
        <tr>
          <td>Esteban</td>
          <td className="none"></td>
          <td>Ruiz</td>
          <td>Álvarez</td>
          <td>esteban.alvarez.286@gmail.com</td>
          <td>3233066655</td>
        </tr> 
        <tr>
          <td>Jonnier</td>
          <td>Julián</td>
          <td>Riaños</td>
          <td>Ocampo</td>
          <td>ocampopaloma582@gmail.com</td>
          <td>3102907449</td>
        </tr> 
        <tr>
          <td>Juan</td>
          <td>Camilo</td>
          <td>Montoya</td>
          <td>Mejía</td>
          <td>jucamo.0713@gmail.com</td>
          <td>3014186162</td>
        </tr> 
      </table>
    </div>
  );
}

export default App;
