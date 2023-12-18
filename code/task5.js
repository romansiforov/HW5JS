

let currancyCourse = {
    "date": "14.12.2023",
    "bank": "PB",
    "baseCurrency": 980,
    "baseCurrencyLit": "UAH",
    "exchangeRate": [
        {
            "baseCurrency": "UAH",
            "currency": "CZK",
            "saleRateNB": 1.6310000,
            "purchaseRateNB": 1.6310000,
            "saleRate": 1.6450000,
            "purchaseRate": 1.6050000
        },
        {
            "baseCurrency": "UAH",
            "currency": "DKK",
            "saleRateNB": 5.3540000,
            "purchaseRateNB": 5.3540000
        },
        {
            "baseCurrency": "UAH",
            "currency": "EUR",
            "saleRateNB": 39.9217000,
            "purchaseRateNB": 39.9217000,
            "saleRate": 40.7000000,
            "purchaseRate": 39.7000000
        },
        {
            "baseCurrency": "UAH",
            "currency": "GBP",
            "saleRateNB": 46.3473000,
            "purchaseRateNB": 46.3473000,
            "saleRate": 46.9600000,
            "purchaseRate": 46.3400000
        },
        {
            "baseCurrency": "UAH",
            "currency": "GEL",
            "saleRateNB": 13.4518000,
            "purchaseRateNB": 13.4518000
        },
        {
            "baseCurrency": "UAH",
            "currency": "HUF",
            "saleRateNB": 0.1048380,
            "purchaseRateNB": 0.1048380
        },
        {
            "baseCurrency": "UAH",
            "currency": "ILS",
            "saleRateNB": 9.9928000,
            "purchaseRateNB": 9.9928000
        },
        {
            "baseCurrency": "UAH",
            "currency": "JPY",
            "saleRateNB": 0.2541400,
            "purchaseRateNB": 0.2541400
        },
        {
            "baseCurrency": "UAH",
            "currency": "KZT",
            "saleRateNB": 0.0808590,
            "purchaseRateNB": 0.0808590
        },
        {
            "baseCurrency": "UAH",
            "currency": "MDL",
            "saleRateNB": 2.0626000,
            "purchaseRateNB": 2.0626000
        },
        {
            "baseCurrency": "UAH",
            "currency": "NOK",
            "saleRateNB": 3.3748000,
            "purchaseRateNB": 3.3748000
        },
        {
            "baseCurrency": "UAH",
            "currency": "PLN",
            "saleRateNB": 9.2261000,
            "purchaseRateNB": 9.2261000,
            "saleRate": 9.4700000,
            "purchaseRate": 9.0800000
        },
        {
            "baseCurrency": "UAH",
            "currency": "SEK",
            "saleRateNB": 3.5383000,
            "purchaseRateNB": 3.5383000
        },
        {
            "baseCurrency": "UAH",
            "currency": "SGD",
            "saleRateNB": 27.5582000,
            "purchaseRateNB": 27.5582000
        },
        {
            "baseCurrency": "UAH",
            "currency": "TMT",
            "saleRateNB": 10.3867000,
            "purchaseRateNB": 10.3867000
        },
        {
            "baseCurrency": "UAH",
            "currency": "TRY",
            "saleRateNB": 1.2743000,
            "purchaseRateNB": 1.2743000
        },
        {
            "baseCurrency": "UAH",
            "currency": "UAH",
            "saleRateNB": 1.0000000,
            "purchaseRateNB": 1.0000000
        },
        {
            "baseCurrency": "UAH",
            "currency": "USD",
            "saleRateNB": 37.0245000,
            "purchaseRateNB": 37.0245000,
            "saleRate": 37.4500000,
            "purchaseRate": 36.9500000
        },
        {
            "baseCurrency": "UAH",
            "currency": "UZS",
            "saleRateNB": 0.0029561,
            "purchaseRateNB": 0.0029561
        },
        {
            "baseCurrency": "UAH",
            "currency": "XAU",
            "saleRateNB": 73363.3100000,
            "purchaseRateNB": 73363.3100000
        },
        {
            "baseCurrency": "UAH",
            "currency": "AUD",
            "saleRateNB": 24.2696000,
            "purchaseRateNB": 24.2696000
        },
        {
            "baseCurrency": "UAH",
            "currency": "AZN",
            "saleRateNB": 21.7919000,
            "purchaseRateNB": 21.7919000
        },
        {
            "baseCurrency": "UAH",
            "currency": "BYN",
            "saleRateNB": 13.4576000,
            "purchaseRateNB": 13.4576000
        },
        {
            "baseCurrency": "UAH",
            "currency": "CAD",
            "saleRateNB": 27.2590000,
            "purchaseRateNB": 27.2590000
        },
        {
            "baseCurrency": "UAH",
            "currency": "CHF",
            "saleRateNB": 42.2558000,
            "purchaseRateNB": 42.2558000,
            "saleRate": 42.7900000,
            "purchaseRate": 42.2100000
        },
        {
            "baseCurrency": "UAH",
            "currency": "CNY",
            "saleRateNB": 5.1582000,
            "purchaseRateNB": 5.1582000
        }
    ]
}

function getCurrency(currencies) {

    let tmpArray = new Array();

    for (let i = 0; i < currencies.exchangeRate.length; i++) {
        tmpArray.push(`<tr>`);
        for (let currency in currencies.exchangeRate[i]) {
            tmpArray.push(`<td>${currencies.exchangeRate[i][currency]}&nbsp</td>`);
        }
        tmpArray.push(`</tr><br>`);
    
    }
    return tmpArray.join(" ");
}

function show(rez) {
    document.getElementById("currencies-tbl").innerHTML = rez;
}

show(getCurrency(currancyCourse));

