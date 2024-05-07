window.addEventListener("load", () => {
    loadBannerText();
    loadPromoCards();
    loadTestimonialCards();
})

function loadBannerText() {
    const bannerText = "We are creatives";
    const headerText = document.getElementById("headerText");
    headerText.innerHTML = bannerText;
}

function loadPromoCards() {
    const promoCardContentObj = {
        "promoCard_transformText": {
            header: "Transform your brand",
            description: "We are a full-service creative agency specializing in helping brands grow fast. Engage    your clients through compelling visuals that do most of the marketing for you.",
            CSSclasses: "learnMore-yellow"
        }, 
        "promoCard_standOutText": {
            header: "Stand out to the right audience",
            description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
            CSSclasses: "learnMore-red",
        }, 
        "promoCard_graphicDesignText": {
            header: "Graphic design",
            description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
            image: "./images/desktop/image-graphic-design.jpg",
            CSSclasses: ["promoCard__background-green", "promoCard__background-lightgreen"],
        }, 
        "promoCard_photographyText": {
            header: "Photography",
            description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
            image: "./images/desktop/image-photography.jpg",
            CSSclasses: ["promoCard__background-blue", "promoCard__background-lightblue"],
        },
    };
    const loadPromoCardNoImageIdArray = ["promoCard_transformText", "promoCard_standOutText"];
    const loadPromoCardWithImageIdArray = ["promoCard_graphicDesignText", "promoCard_photographyText"];
    
    const loadPromoCardNoImage = () => {
        for (let itemID of loadPromoCardNoImageIdArray) {
            const promoCard_Text = document.getElementById(itemID);
            promoCard_Text.innerHTML = `
                <h2 class="promoCard__header">${promoCardContentObj[itemID].header}</h2>
                <p class="promoCard__description">${promoCardContentObj[itemID].description}</p>
                <div class="learnMoreContainer">
                    <a href="#" class="promoCard__learnMore">Learn More</a>
                    <div class="promoCard__learnMore--underline ${promoCardContentObj[itemID].CSSclasses}"></div>
                </div>
            `;
        };
    };
    const loadPromoCardWithImage = () => {
        for (let itemID of loadPromoCardWithImageIdArray) {
            const promoCard_Text = document.getElementById(itemID);
            promoCard_Text.innerHTML = `
                <img src=${promoCardContentObj[itemID].image} alt=${promoCardContentObj[itemID].header} class="bottomLayer">
                <div class="upperLayer promoCard__content-bottom">
                    <h3 class="promoCard__header center ${promoCardContentObj[itemID].CSSclasses[0]}">
                        ${promoCardContentObj[itemID].header}
                    </h3>
                    <p class="promoCard__description center ${promoCardContentObj[itemID].CSSclasses[1]}">
                        ${promoCardContentObj[itemID].description}
                    </p>
                </div>
            `;
        };
    };

    loadPromoCardNoImage();
    loadPromoCardWithImage();
}

function loadTestimonialCards() {
    const testimonialArray = [{
        image: "./images/image-emily.jpg",
        description: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        title: "Marketing Director",
    }, {
        image: "./images/image-thomas.jpg",
        description: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        title: "Chief Operating Officer",
    }, {
        image: "./images/image-jennie.jpg",
        description: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        title: "Business Owner",
    }]

    const loadTestimonies = () => {
        testimonialArray.map(testimony => {
            const testimonialCardsContainer = document.getElementById("testimonialCardsContainer");
            const testimonialCard = document.createElement("div");
            testimonialCard.classList.add("testimonialCard");
            testimonialCard.innerHTML = `
                <div class="testimonialCard__imageContainer">
                    <img src=${testimony.image} alt=${testimony.name} class="testimonialCard__image"/>
                </div>
                <p class="testimonialCard__description">${testimony.description}</p>
                <h3 class="testimonialCard__name">${testimony.name}</h3>
                <h4 class="testimonialCard__title">${testimony.title}</h4>
            `;
            testimonialCardsContainer.appendChild(testimonialCard);
        });
    }
    loadTestimonies();
}
