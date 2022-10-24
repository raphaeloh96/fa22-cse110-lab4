// Question 10
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < prices.length; i++){
        const discountPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    // console.log(i);
    console.log(length);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);