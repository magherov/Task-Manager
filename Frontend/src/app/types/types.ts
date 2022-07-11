
export interface User{
    id?: number;
    userName?: string;
    name?: string;
    lastname?: string
    password?: string;
}


export interface Attivita{
    id?: number;
    titolo?: string;
    descrizione?: string;
    stato?: StatoTypeEnum;
    totaleOre?: number;
    oreLavorate?: number;
    utenteAssegnato?: User;
    commento?: string;
}

export enum StatoEnum {
    Backlog = 0,
    inProgress = 1,
    Completata = 2
}


export enum StatoTypeEnum {
    Backlogs = "backlogs",
    Progress = 'inProgress',
    Complet = "complete"
}

export const Stati = ['backlogs', 'inProgress', 'complete'];