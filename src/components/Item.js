import { useState } from "react";

function mock(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
        resolve([
          { nombre: "Trados", precio: 1800, stock: 10 },
          { nombre: "Wordfast", precio: 1800, stock: 12 },
          { nombre: "MemoQ", precio: 1800, stock: 8 }
        ]);
      } else {
        reject({ message: "Errorcito" });
      }
    }, 2000);
  });
}

function Item() {
    let listaCursos = []
    async function obtenerCursos() {
        let cursos = await mock(true);
        listaCursos = cursos.map((curso) =>
        <div>
        <h1>{curso.nombre}</h1>
        <div>{curso.precio}</div>
        </div>
        );
      }
  return (
    <div>
      {listaCursos}
    </div>
  );
}
export default Item;
