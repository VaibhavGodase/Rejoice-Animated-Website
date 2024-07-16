






function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoscroll()



function cursoreffect() {
    var page1content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#CURSOR")

    page1content.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1content.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1content.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })

}
cursoreffect()


function page2animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2

        }
    })
}
page2animation()

function page3animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2

        }
    })
}
page3animation()


function slideranimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
        },
    });

}
slideranimation()


var t1 = gsap.timeline()

t1.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})

t1.to("#loader h3", {
    opacity: 0,
    x: -40,
    duration: 1,

    stagger: 0.1
})

t1.to("#loader", {
    opacity: 0
})

t1.to("#loader", {
    display: "none"
})


t1.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1

})