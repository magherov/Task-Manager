
export interface User{
    id: number;
    userName: string;
    password: string;
}


export interface Attivita{
    id?: number;
    titolo?: string;
    descrizione?: string;
    stato?: Stato;
    totaleOre?: number;
    oreLavorate?: number;
    utenteAssegnato?: string;
    commento?: string;
}

export type Stato = 'inProgress' | 'Completata' | 'Backlog'