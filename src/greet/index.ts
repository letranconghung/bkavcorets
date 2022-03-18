import { dontwanttoincludethis } from "./greet"

export function greetgreet(name: string): string {
  return `Hello from greetgreet${name}`
}

export function greetgreet2(name: string): string {
  return `Hello from greettgreet2 ${name}`
}

export function wanttoincludethis(x: number, y: number) : number {
  const a = dontwanttoincludethis(x, y)
  return a*2
}
