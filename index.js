// ! JANGAN DIMODIFIKASI
const dates = [
    "2019-01-02", // 1546387200 (epoch time, dalam detik)
    "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
    "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
    "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
    "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (dates, index = -1) => {
    const timeToSecond = dates.map((item) => new Date(item).getTime() / 1000); //create array baru dengan content hasil convert ke second dates
    const result = index == -1 ? timeToSecond : timeToSecond.splice(index, 1); // cek apakah index default or tidak kalau tidak get data sesuai pilihan index

    //return result in sort function
    return result.sort((a, b) => a - b).join("-");
};

// ! JANGAN DIMODIFIKASI
(() => {
    // IIFE

    // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
    console.log(createDate?.(dates));

    // '1614841200' (dalam string)
    console.log(createDate?.(dates, 2));
})();

module.exports = {
    dates,
    createDate,
};
