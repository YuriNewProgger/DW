export const getFormatingDate = (date) => {
    let tmp = new Date(date).toLocaleDateString().split('.');
    tmp = `${tmp[2]}-${tmp[1]}-${tmp[0]}` === '1970-01-01' ? '' : tmp;
    return `${tmp[2]}-${tmp[1]}-${tmp[0]}`;
}