new TypeIt("#lywry", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("小培是子溢最可爱的宝呀")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("我家小培今年必TM上岸！！！")
    .pause(3000)
    .go();

new TypeIt('#talkToWRY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 50
}).go();
