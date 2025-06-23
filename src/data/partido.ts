import type { EquipoParticipante } from "./interfaz";

export interface Partido {
    jugado: boolean;
    equipo1: EquipoParticipante;
    equipo2: EquipoParticipante;
    golesEquipo1: number;
    golesEquipo2: number;
    penalesEquipo1: number;
    penalesEquipo2: number;
}