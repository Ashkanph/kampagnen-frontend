/**
* Format datetime string

 * @param {Number} val: epochtime
*/
function formatDateTime(val, option = {}) {
    const newOption = {
        year: "numeric",
        month: "2-digit", // 'numeric' for when we dont want it to be 2-digit
        day: "2-digit",

        ...option,
    };
    if (val && val !== "") {
        return new Intl.DateTimeFormat("de-DE", newOption)
            .format(new Date(Number(val)))
            .replace(/\./g, "-");
    }
    return val || "";
}

export { formatDateTime };
