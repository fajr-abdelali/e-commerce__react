const CURRENCY_FORMATTER = new Intl.NumberFormat('de-DE', { currency: "EUR", style: "currency" })

export function formaCurrency(number: Number): string {
    return CURRENCY_FORMATTER.format(Number(number))
}