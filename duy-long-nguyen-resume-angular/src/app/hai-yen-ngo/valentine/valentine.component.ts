import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay } from "swiper";
declare var $: any;
declare var Tree: any;
declare var timeElapse: any;

function delay(ms: number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

SwiperCore.use([Autoplay,]);

@Component({
    selector: 'app-valentine',
    templateUrl: './valentine.component.html',
    styleUrls: ['./valentine.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ValentineComponent implements OnInit
{
    slideShown = false;
    imgFiles = [
        "20211011_173724",
        "20211016_143621",
        "20211017_183827",
        "20211023_105134",
        "20211217_135940",
        "20220129_093139",
        "20220129_162647",
        "20220129_162758",
        "20220730_152700",
        "20220921_183905",
        "20221231_215158",
        "20230123_103048",
        "20210704_144423",
        "20210817_180641",
        "20210819_135144",
        "20210820_111832",
        "20210821_173108",
        "20210822_103851",
        "20210823_205924",
        "20211004_125346",
    ]

    constructor() { }

    ngOnInit(): void
    {
        this.setUp();
        this.playAudio();
    }

    private playAudio()
    {
        const audio = new Audio();
        audio.src = "assets/sounds/the-joker-and-the-queen--ed-sheeran.mp3";
        audio.muted = false;
        audio.loop = true;
        audio.load();
        audio.play();
    }

    private setUp(): void
    {
        var canvas = $('#canvas');

        if (!canvas[0].getContext)
        {
            $("#error").show();
            return;
        }

        var width = canvas.width();
        var height = canvas.height();
        canvas.attr("width", width);
        canvas.attr("height", height);
        var opts = {
            seed: {
                x: width / 2 - 20,
                color: "rgb(190, 26, 37)",
                scale: 2
            },
            branch: [
                [535, 680, 570, 250, 500, 200, 30, 100, [
                    [540, 500, 455, 417, 340, 400, 13, 100, [
                        [450, 435, 434, 430, 394, 395, 2, 40]
                    ]],
                    [550, 445, 600, 356, 680, 345, 12, 100, [
                        [578, 400, 648, 409, 661, 426, 3, 80]
                    ]],
                    [539, 281, 537, 248, 534, 217, 3, 40],
                    [546, 397, 413, 247, 328, 244, 9, 80, [
                        [427, 286, 383, 253, 371, 205, 2, 40],
                        [498, 345, 435, 315, 395, 330, 4, 60]
                    ]],
                    [546, 357, 608, 252, 678, 221, 6, 100, [
                        [590, 293, 646, 277, 648, 271, 2, 80]
                    ]]
                ]]
            ],
            bloom: {
                num: 700,
                width: 1080,
                height: 650,
            },
            footer: {
                width: 1200,
                height: 5,
                speed: 10,
            }
        }

        var tree = new Tree(canvas[0], width, height, opts);
        var seed = tree.seed;
        var foot = tree.footer;
        var hold = 1;

        canvas.click(function (e: any)
        {
            var offset = canvas.offset(), x, y;
            x = e.pageX - offset.left;
            y = e.pageY - offset.top;
            if (seed.hover(x, y))
            {
                hold = 0;
                canvas.unbind("click");
                canvas.unbind("mousemove");
                canvas.removeClass('hand');
            }
        }).mousemove(function (e: any)
        {
            var offset = canvas.offset(), x, y;
            x = e.pageX - offset.left;
            y = e.pageY - offset.top;
            canvas.toggleClass('hand', seed.hover(x, y));
        });

        var seedAnimate = async function ()
        {
            seed.draw();
            while (hold)
            {
                await delay(10);
            }
            while (seed.canScale())
            {
                seed.scale(0.95);
                await delay(10);
            }
            while (seed.canMove())
            {
                seed.move(0, 2);
                foot.draw();
                await delay(10);
            }
        };

        var growAnimate = async function ()
        {
            do
            {
                tree.grow();
                await delay(10);
            } while (tree.canGrow());
        };

        var flowAnimate = async function ()
        {
            do
            {
                tree.flower(2);
                await delay(10);
            } while (tree.canFlower());
        };

        var moveAnimate = async function ()
        {
            tree.snapshot("p1", 240, 0, 610, 680);
            while (tree.move("p1", 500, 0))
            {
                foot.draw();
                await delay(10);
            }
            foot.draw();
            tree.snapshot("p2", 500, 0, 610, 680);

            canvas.parent().css("background", "url(" + tree.toDataURL('image/png') + ")");
            canvas.css("background", "#ffe");
            await delay(300);
            canvas.css("background", "none");
        };

        var jumpAnimate = async function ()
        {
            var ctx = tree.ctx;
            while (true)
            {
                tree.ctx.clearRect(0, 0, width, height);
                tree.jump();
                foot.draw();
                await delay(25);
            }
        };

        var textAnimate = async function ()
        {
            var together = new Date();
            together.setFullYear(2018, 7, 20);
            together.setHours(0);
            together.setMinutes(0);
            together.setSeconds(0);
            together.setMilliseconds(0);

            $("#clock-box").fadeIn(500);
            while (true)
            {
                timeElapse(together);
                await delay(1000);
            }
        };

        var runAsync = async () =>
        {
            await seedAnimate();
            await growAnimate();
            await flowAnimate();
            await moveAnimate();

            textAnimate();
            this.slideShown = true;

            await jumpAnimate();
        };

        runAsync();
        document.addEventListener("mousemove", (e) =>
        {
            if (Math.random() < 0.1)
            {
                const body = document.querySelector("body");
                const heart = document.createElement("span");
                heart.className = "heart";
                const x = e.offsetX;
                const y = e.offsetY;
                heart.style.left = x + "px";
                heart.style.top = y + "px";
                const size = Math.random() * (30 - 10) + 10;
                heart.style.width = 20 + size + "px";
                heart.style.height = 20 + size + "px";
                body?.appendChild(heart);

                setTimeout(() =>
                {
                    heart.remove();
                }, 2000);
            }
        });
    }
}
