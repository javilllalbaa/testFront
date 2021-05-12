export interface ProductModel {
    accountInformation?: AccountInformation,
    locked?: boolean,
    id?: number,
    typeAccount?: string,
    openedDate?: Date,
    closedDate?: Date,
    dueDate?: Date,
    lastTransactionDate?: Date,
    term?: Term,
    periodicityOfPayment?: PeriodicityOfPayment,
    productAccountBalances?: ProductAccountBalances,
    capacity?: number
}

export interface AccountInformation {
    accountIdentifier?: string,
    productType?: string,
    bank?: string
}

export interface Term {
    count?: number,
    units?: string
}

export interface PeriodicityOfPayment {
    count?: number,
    units?: string
}

export interface ProductAccountBalances {
    saldo_pendiente_pago?: Saldo_pendiente_pago,
    tasa_nominal?: Tasa_nominal,
    interes_pagado?: Interes_pagado,
    valor_constitucion?: Valor_constitucion,
    intereses_causados?: Intereses_causados,
    retefuente?: Retefuente,
    pago_total_pesos?: Pago_total_pesos,
    cupo_disponible_avances_pesos?: Cupo_disponible_avances_pesos,
    saldo_mora_pesos?: Saldo_mora_pesos,
    saldo_actual?: Saldo_actual,
    cupo_disponible_compras_pesos?: Cupo_disponible_compras_pesos,
    valor_pago_minimo?: Valor_pago_minimo,
    cupo_total?: Cupo_total,
    saldo_disponible?: Saldo_disponible,
    saldo_canje?: Saldo_canje
}

export interface Saldo_pendiente_pago {
    amount?: number
}

export interface Saldo_disponible {
    amount?: number
}

export interface Saldo_canje {
    amount?: number
}

export interface Tasa_nominal {
    amount?: number,
    rate?: number
}

export interface Interes_pagado {
    amount?: number
}

export interface Valor_constitucion {
    amount?: number
}

export interface Intereses_causados {
    amount?: number
}

export interface Retefuente {
    amount?: number
}

export interface Pago_total_pesos {
    amount?: number,
    currencyCode?: string
}

export interface Cupo_disponible_avances_pesos {
    amount?: number,
    currencyCode?: string
}

export interface Saldo_mora_pesos {
    amount?: number,
    currencyCode?: string
}

export interface Saldo_actual {
    amount?: number
}

export interface Cupo_disponible_compras_pesos {
    amount?: number,
    currencyCode?: string
}

export interface Valor_pago_minimo {
    amount?: number,
    currencyCode?: string
}

export interface Cupo_total {
    amount?: number,
    currencyCode?: string
}
