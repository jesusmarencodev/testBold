export const formatCurrency = (locales, currency, fractionDigits, number) =>{
    let formatted = new Intl.NumberFormat(locales, {
        style                 : 'currency',
        currency              : currency,
        minimumFractionDigits : fractionDigits
    }).format(number);

    return formatted;
}