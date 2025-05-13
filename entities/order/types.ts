interface customer {
    name: string,
    phone: string,
    org: string,
    rank: number,
    blood_group: number,
    gender: number
}

interface order {
    date: Date,
    customer: customer,
    full_payed: boolean,
    deposite: number,
    payed_sum: number
}