import numeral from 'numeral'

type MoneyPrefix = '$' | '฿'

interface MoneyFormatOptions {
  format?: string
  prefix?: MoneyPrefix
}

export const numberFormat = (value?: string | number, format = '0,0.00') =>
  numeral(value).format(format)

export const moneyFormat = (
  value?: string | number,
  options?: MoneyFormatOptions
) => {
  const format = numberFormat(value, options?.format)

  return `${options?.prefix}${format}`
}
