export const scaleSecurePassword = (values: string, setSecurityPasswordNumber: (number: number) => void, setSecurityPasswordTitle: (string: string) => void) => {
    const reg = /[a-z-а-я]/
    const reg2 = /[0-9]/
    const reg3 = /[A-Z-А-Я]/
    const reg4 = /[!@#$%^&*]/

    const variantSecure_1 =
        (values.match(reg) && !values.match(reg2) && !values.match(reg3) && !values.match(reg4)) ||
        (values.match(reg2) && !values.match(reg) && !values.match(reg3) && !values.match(reg4)) ||
        (values.match(reg3) && !values.match(reg2) && !values.match(reg) && !values.match(reg4)) ||
        (values.match(reg4) && !values.match(reg2) && !values.match(reg3) && !values.match(reg))

    const variantSecure_2 =
        (values.match(reg) && values.match(reg2) && !values.match(reg3) && !values.match(reg4)) ||
        (values.match(reg) && values.match(reg3) && !values.match(reg2) && !values.match(reg4)) ||
        (values.match(reg) && values.match(reg4) && !values.match(reg3) && !values.match(reg2)) ||

        (values.match(reg2) && values.match(reg3) && !values.match(reg4) && !values.match(reg)) ||
        (values.match(reg2) && values.match(reg4) && !values.match(reg3) && !values.match(reg)) ||

        (values.match(reg3) && values.match(reg4) && !values.match(reg2) && !values.match(reg))


    const variantSecure_3 =
        (values.match(reg) && values.match(reg2) && values.match(reg3) && !values.match(reg4)) ||
        (values.match(reg) && values.match(reg3) && values.match(reg4) && !values.match(reg2)) ||

        (values.match(reg2) && values.match(reg3) && values.match(reg4) && !values.match(reg)) ||

        (values.match(reg3) && values.match(reg4) && values.match(reg2) && !values.match(reg)) ||

        (values.match(reg4) && values.match(reg) && values.match(reg2) && !values.match(reg3))


    const variantSecure_4 =
        (values.match(reg) && values.match(reg2) && values.match(reg3) && values.match(reg4))

    if (variantSecure_1 && values.length >= 6) {
        setSecurityPasswordNumber(1);
        setSecurityPasswordTitle('Очень простой')
    } else if (variantSecure_2 && values.length >= 6 && values.length < 20) {
        setSecurityPasswordNumber(2);
        setSecurityPasswordTitle("Простой")
    } else if (variantSecure_3 && values.length >= 6 && values.length < 20) {
        setSecurityPasswordNumber(3);
        setSecurityPasswordTitle('Средний')
    } else if (variantSecure_4 && values.length >= 6 && values.length < 20) {
        setSecurityPasswordNumber(4);
        setSecurityPasswordTitle('Сложный')
    } else if (variantSecure_4 && values.length === 20) {
        setSecurityPasswordNumber(5);
        setSecurityPasswordTitle('Очень сложный')
    } else if (values.length < 6) {
        setSecurityPasswordNumber(0);
        setSecurityPasswordTitle('')
    }
}