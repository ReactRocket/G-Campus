const sIdGenerator = (StudentCount) => {
    let date = new Date();
    let currentYear = date.getFullYear();
    let counter = currentYear * 10000;
    counter = counter + StudentCount + 1;
    return counter;
}

export default sIdGenerator;