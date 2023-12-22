const generateRandomNumber = (numberOfDigits) => {
    const min = 10 ** (numberOfDigits - 1);
    const max = 10 ** numberOfDigits - 1;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum
};

export default generateRandomNumber