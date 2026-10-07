document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       HERO → STORY
    ========================================== */

    const heroLink =
        document.querySelector(".hero-link");

    const storySection =
        document.querySelector("#story");


    if (heroLink && storySection) {

        heroLink.addEventListener("click", (event) => {

            event.preventDefault();

            storySection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }



    /* =========================================
       STORY REVEAL
    ========================================== */

    const storyElements = [

        document.querySelector(".story-kicker"),

        document.querySelector(".story-content h2"),

        document.querySelector(".story-body"),

        document.querySelector(".story-closing")

    ];


    if (storyElements.length) {

        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.2
                }

            );


        storyElements.forEach((element) => {

            if (element) {

                observer.observe(element);

            }

        });

    }



    /* =========================================
       HERO BAG PARALLAX
    ========================================== */

    const heroBag =
        document.querySelector(".product-bag");


    if (
        heroBag &&
        window.innerWidth > 800
    ) {

        document.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    event.clientX /
                    window.innerWidth -
                    0.5;

                const y =
                    event.clientY /
                    window.innerHeight -
                    0.5;


                heroBag.style.marginLeft =
                    `${x * 10}px`;

                heroBag.style.marginTop =
                    `${y * 7}px`;

            }
        );

    }



    /* =========================================
       CARRY BAG PARALLAX
    ========================================== */

    const carryBag =
        document.querySelector(
            ".coffee-carrybag"
        );


    if (
        carryBag &&
        window.innerWidth > 800
    ) {

        document.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    event.clientX /
                    window.innerWidth -
                    0.5;

                const y =
                    event.clientY /
                    window.innerHeight -
                    0.5;


                carryBag.style.marginLeft =
                    `${x * 8}px`;

                carryBag.style.marginTop =
                    `${y * 6}px`;

            }
        );

    }



    /* =========================================
       MOBILE RESET
    ========================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth <= 800
            ) {

                if (heroBag) {

                    heroBag.style.marginLeft =
                        "0";

                    heroBag.style.marginTop =
                        "0";

                }


                if (carryBag) {

                    carryBag.style.marginLeft =
                        "0";

                    carryBag.style.marginTop =
                        "0";

                }

            }

        }
    );

});