const data = [
    {
        icon: './images/icon-sedans.svg',
        title: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        color:'#E28625',
        borderRadius1: '8px 8px 0px 0px',
        borderRadius2: '8px 0px 0px 8px',
    },
    {
        icon: './images/icon-suvs.svg',
        title: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        color: '#006971',
    },
    {
        icon: './images/icon-luxury.svg',
        title: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        color:'#004140',
        borderRadius1: '0px 0px 8px 8px',
        borderRadius2: '0px 8px 8px 0px',
    },
]

const isMobile = window.matchMedia('(max-width: 767.98px)').matches;

const card = data.map((item) => {

    const component = `
            <div class="card" style="background:${item.color}; border-radius:${item.borderRadius1 && isMobile ? item.borderRadius1 : item.borderRadius2}">
                <div class="icon">
                    <img src=${item.icon} alt=${item.title}>
                </div>
                <h2 class="title">${item.title}</h2>
                <div class="description">${item.description} </div>
                <button type="button" style="color:${item.color}">Learn more</button>
            </div>
    `
    document.querySelector('.container').insertAdjacentHTML('beforeend', component);
});