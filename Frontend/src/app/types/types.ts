
export interface User{
    pk: number;
    userName: string;
    password: string;
}


export interface Attivita{
    pk?: number;
    titolo?: string;
    descrizione?: string;
    stato?: Stato;
    totaleOre?: number;
    oreLavorate?: number;
    utenteAssegnato?: string;
    commento?: string;
}

export type Stato = 'inProgress' | 'Completata' | 'Backlog'