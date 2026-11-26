import { describe, it, expect } from "vitest";
import { par, media, filtrarMaiores18 } from "./exercicios.js";

export function par(n) {
  return n % 2 === 0;
}

export function media(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error("A lista de notas não pode ser vazia");
  }
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

export function filtrarMaiores18(usuarios) {
  return usuarios.filter((u) => u.age >= 18);
}

describe("par", () => {
  it("retorna true para 2", () => {
    expect(par(2)).toBe(true);
  });

  it("retorna false para 3", () => {
    expect(par(3)).toBe(false);
  });

  it("retorna true para 0 (boundary)", () => {
    expect(par(0)).toBe(true);
  });
});

describe("media", () => {
  it("calcula a média de [7, 8, 9]", () => {
    expect(media([7, 8, 9])).toBe(8);
  });

  it("lança erro para array vazio", () => {
    expect(() => media([])).toThrow("A lista de notas não pode ser vazia");
  });
});

describe("filtrarMaiores18", () => {
  const usuarios = [
    { name: "Ana", age: 22 },
    { name: "Beto", age: 17 },
    { name: "Carla", age: 30 },
  ];

  it("inclui Ana e Carla e exclui Beto", () => {
    const resultado = filtrarMaiores18(usuarios);
    expect(resultado).toEqual([
      { name: "Ana", age: 22 },
      { name: "Carla", age: 30 },
    ]);
    expect(resultado.map((u) => u.name)).not.toContain("Beto");
  });

  it("considera age === 18 como maior de idade", () => {
    const resultado = filtrarMaiores18([{ name: "Davi", age: 18 }]);
    expect(resultado).toHaveLength(1);
  });
});