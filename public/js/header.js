const header = document.querySelector('#header');







function createSnowflake() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.style.left = getRandomIntInclusive(0, 90) + '%';
    snow.style.animationDuration = getRandomIntInclusive(5, 10) + 's';
    snow.style.opacity = Math.random();
    snow.style.fontSize = getRandomIntInclusive(10, 20) + 'px';
    header.append(snow);


    setTimeout(() => snow.remove(), 10000);
}


setInterval(createSnowflake, 200);







function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

