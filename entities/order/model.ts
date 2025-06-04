export interface Customer {
    name: string,
    phone: string,
    org: string,
    rank: number,
    blood_group: number,
    gender: number
}

export interface Order {
    id?: string,
    date: string,
    customer: Customer,
    full_payed: boolean,
    deposite: number,
    payed_sum: number,
    photo: string
}
