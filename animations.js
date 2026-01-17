const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let particles = [];
let nebulas = [];

class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x < 0 || this.x > width) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y < 0 || this.y > height) {
            this.velocity.y = -this.velocity.y;
        }

        this.draw();
    }
}

class Nebula {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 0.1,
            y: (Math.random() - 0.5) * 0.1
        };
    }

    draw() {
        let gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.06)`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x - this.radius > width) {
            this.x = -this.radius;
        }
        if (this.x + this.radius < 0) {
            this.x = width + this.radius;
        }
        if (this.y - this.radius > height) {
            this.y = -this.radius;
        }
        if (this.y + this.radius < 0) {
            this.y = height + this.radius;
        }

        this.draw();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < 200; i++) {
        let radius = Math.random() * 1.5;
        let x = Math.random() * width;
        let y = Math.random() * height;
        let color = Math.random() > 0.5 ? 'white' : '#6366F1';
        let velocity = {
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2
        };
        particles.push(new Particle(x, y, radius, color, velocity));
    }

    nebulas = [];
    const nebulaColors = [
        { r: 99, g: 102, b: 241 },   // Indigo
        { r: 139, g: 92, b: 246 },   // Electric Purple
        { r: 217, g: 70, b: 239 }    // Neon Magenta
    ];
    for (let i = 0; i < 5; i++) {
        let radius = Math.random() * (width / 2) + (width / 4);
        let x = Math.random() * width;
        let y = Math.random() * height;
        let color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
        nebulas.push(new Nebula(x, y, radius, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgb(3, 2, 18)';
    ctx.fillRect(0, 0, width, height);

    nebulas.forEach(nebula => {
        nebula.update();
    });

    particles.forEach(particle => {
        particle.update();
    });
}

window.addEventListener('resize', () => {
    // Only re-init if the WIDTH changes (e.g. rotation or desktop resize)
    // This ignores vertical resizes caused by mobile address bars showing/hiding
    if (window.innerWidth !== width) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        init();
    }
});

init();
animate();