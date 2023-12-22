
export interface GetAllPatientsResponse {
    content: Patient[];
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    empty: boolean;
}

export interface Patient {
    id: string;
    name: string;
    lastName: string;
    birthDate: string;
    dni: string;
    email: string;
    phoneNumber: number;
    fotoUrl: string;
}

export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

