import React, { useEffect, useRef } from 'react';

// Algorithm Constants
const POINT_INTERVAL = 5;
const FISH_COUNT = 3;
const MAX_INTERVAL_COUNT = 50;
const INIT_HEIGHT_RATE = 0.5;
const THRESHOLD = 50;
const WATCH_INTERVAL = 100;

// Helper classes
class SurfacePoint {
  constructor(renderer, x) {
    this.renderer = renderer;
    this.x = x;
    this.SPRING_CONSTANT = 0.03;
    this.SPRING_FRICTION = 0.9;
    this.WAVE_SPREAD = 0.3;
    this.ACCELARATION_RATE = 0.01;
    this.init();
  }

  init() {
    this.initHeight = this.renderer.height * INIT_HEIGHT_RATE;
    this.height = this.initHeight;
    this.fy = 0;
    this.force = { previous: 0, next: 0 };
  }

  setPreviousPoint(previous) {
    this.previous = previous;
  }

  setNextPoint(next) {
    this.next = next;
  }

  interfere(y, velocity) {
    this.fy =
      this.renderer.height *
      this.ACCELARATION_RATE *
      (this.renderer.height - this.height - y >= 0 ? -1 : 1) *
      Math.abs(velocity);
  }

  updateSelf() {
    this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
    this.fy *= this.SPRING_FRICTION;
    this.height += this.fy;
  }

  updateNeighbors() {
    if (this.previous) {
      this.force.previous =
        this.WAVE_SPREAD * (this.height - this.previous.height);
    }
    if (this.next) {
      this.force.next = this.WAVE_SPREAD * (this.height - this.next.height);
    }
  }

  render(ctx) {
    if (this.previous) {
      this.previous.height += this.force.previous;
      this.previous.fy += this.force.previous;
    }
    if (this.next) {
      this.next.height += this.force.next;
      this.next.fy += this.force.next;
    }
    ctx.lineTo(this.x, this.renderer.height - this.height);
  }
}

class Fish {
  constructor(renderer) {
    this.renderer = renderer;
    this.GRAVITY = 0.4;
    this.init();
  }

  init() {
    this.direction = Math.random() < 0.5;
    this.x = this.direction ? this.renderer.width + THRESHOLD : -THRESHOLD;
    this.previousY = this.y;
    this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);

    if (this.renderer.reverse) {
      this.y = this.getRandomValue(
        (this.renderer.height * 1) / 10,
        (this.renderer.height * 4) / 10,
      );
      this.vy = this.getRandomValue(2, 5);
      this.ay = this.getRandomValue(0.05, 0.2);
    } else {
      this.y = this.getRandomValue(
        (this.renderer.height * 6) / 10,
        (this.renderer.height * 9) / 10,
      );
      this.vy = this.getRandomValue(-5, -2);
      this.ay = this.getRandomValue(-0.2, -0.05);
    }
    this.isOut = false;
    this.theta = 0;
    this.phi = 0;
  }

  getRandomValue(min, max) {
    return min + (max - min) * Math.random();
  }

  controlStatus() {
    this.previousY = this.y;
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.ay;

    if (this.renderer.reverse) {
      if (this.y > this.renderer.height * INIT_HEIGHT_RATE) {
        this.vy -= this.GRAVITY;
        this.isOut = true;
      } else {
        if (this.isOut) {
          this.ay = this.getRandomValue(0.05, 0.2);
        }
        this.isOut = false;
      }
    } else {
      if (this.y < this.renderer.height * INIT_HEIGHT_RATE) {
        this.vy += this.GRAVITY;
        this.isOut = true;
      } else {
        if (this.isOut) {
          this.ay = this.getRandomValue(-0.2, -0.05);
        }
        this.isOut = false;
      }
    }
    if (!this.isOut) {
      this.theta += Math.PI / 20;
      this.theta %= Math.PI * 2;
      this.phi += Math.PI / 30;
      this.phi %= Math.PI * 2;
    }
    this.renderer.generateEpicenter(
      this.x + (this.direction ? -1 : 1) * THRESHOLD,
      this.y,
      this.y - this.previousY,
    );

    if (
      (this.vx > 0 && this.x > this.renderer.width + THRESHOLD) ||
      (this.vx < 0 && this.x < -THRESHOLD)
    ) {
      this.init();
    }
  }

  render(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(Math.PI + Math.atan2(this.vy, this.vx));
    ctx.scale(1, this.direction ? 1 : -1);
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.bezierCurveTo(-20, 15, 15, 10, 40, 0);
    ctx.bezierCurveTo(15, -10, -20, -15, -30, 0);
    ctx.fill();

    ctx.save();
    ctx.translate(40, 0);
    ctx.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(5, 10, 20, 8);
    ctx.quadraticCurveTo(12, 5, 10, 0);
    ctx.quadraticCurveTo(12, -5, 20, -8);
    ctx.quadraticCurveTo(5, -10, 0, 0);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(-3, 0);
    ctx.rotate(
      (Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi)) *
        (this.renderer.reverse ? -1 : 1),
    );

    ctx.beginPath();

    if (this.renderer.reverse) {
      ctx.moveTo(5, 0);
      ctx.bezierCurveTo(10, 10, 10, 30, 0, 40);
      ctx.bezierCurveTo(-12, 25, -8, 10, 0, 0);
    } else {
      ctx.moveTo(-5, 0);
      ctx.bezierCurveTo(-10, -10, -10, -30, 0, -40);
      ctx.bezierCurveTo(12, -25, 8, -10, 0, 0);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.restore();
    this.controlStatus();
  }
}

const FishAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext('2d');

    // Renderer Logic
    const renderer = {
      width: 0,
      height: 0,
      points: [],
      fishes: [],
      intervalCount: MAX_INTERVAL_COUNT,
      reverse: false, // Standard orientation
      animationFrameId: null,
      resizeTimer: null,
      tmpWidth: 0,
      tmpHeight: 0,
      mouseX: 0,
      mouseY: 0,

      init() {
        this.width = container.offsetWidth;
        this.height = container.offsetHeight;
        canvas.width = this.width;
        canvas.height = this.height;

        this.fishCount =
          (((FISH_COUNT * this.width) / 500) * this.height) / 500;

        this.createSurfacePoints();
        this.fishes.push(new Fish(this));

        this.bindEvent();
        this.render();
      },

      createSurfacePoints() {
        const count = Math.round(this.width / POINT_INTERVAL);
        this.pointInterval = this.width / (count - 1);
        this.points = [];
        this.points.push(new SurfacePoint(this, 0));

        for (let i = 1; i < count; i++) {
          const point = new SurfacePoint(this, i * this.pointInterval);
          const previous = this.points[i - 1];
          point.setPreviousPoint(previous);
          previous.setNextPoint(point);
          this.points.push(point);
        }
      },

      bindEvent() {
        // Window resize
        window.addEventListener('resize', this.watchWindowSize.bind(this));

        // Mouse interaction
        container.addEventListener(
          'mouseenter',
          this.startEpicenter.bind(this),
        );
        container.addEventListener('mousemove', this.moveEpicenter.bind(this));
      },

      unbindEvent() {
        window.removeEventListener('resize', this.watchWindowSize.bind(this));
        container.removeEventListener(
          'mouseenter',
          this.startEpicenter.bind(this),
        );
        container.removeEventListener(
          'mousemove',
          this.moveEpicenter.bind(this),
        );
      },

      watchWindowSize() {
        if (this.resizeTimer) clearTimeout(this.resizeTimer);
        this.tmpWidth = window.innerWidth;
        this.tmpHeight = window.innerHeight;
        this.resizeTimer = setTimeout(
          this.judgeToStopResize.bind(this),
          WATCH_INTERVAL,
        );
      },

      judgeToStopResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const stopped = width === this.tmpWidth && height === this.tmpHeight;

        this.tmpWidth = width;
        this.tmpHeight = height;

        if (stopped) {
          this.width = container.offsetWidth;
          this.height = container.offsetHeight;
          canvas.width = this.width;
          canvas.height = this.height;

          this.fishCount =
            (((FISH_COUNT * this.width) / 500) * this.height) / 500;
          this.points = [];
          this.fishes = [];
          this.createSurfacePoints();
          this.fishes.push(new Fish(this));
        }
      },

      getAxis(event) {
        const rect = container.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
      },

      startEpicenter(event) {
        this.axis = this.getAxis(event);
      },

      moveEpicenter(event) {
        const axis = this.getAxis(event);
        if (!this.axis) {
          this.axis = axis;
        }
        this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
        this.axis = axis;
      },

      generateEpicenter(x, y, velocity) {
        if (
          y < this.height / 2 - THRESHOLD ||
          y > this.height / 2 + THRESHOLD
        ) {
          return;
        }
        const index = Math.round(x / this.pointInterval);

        if (index < 0 || index >= this.points.length) {
          return;
        }
        this.points[index].interfere(y, velocity);
      },

      controlStatus() {
        for (let i = 0; i < this.points.length; i++) {
          this.points[i].updateSelf();
        }
        for (let i = 0; i < this.points.length; i++) {
          this.points[i].updateNeighbors();
        }
        if (this.fishes.length < this.fishCount) {
          if (--this.intervalCount <= 0) {
            this.intervalCount = MAX_INTERVAL_COUNT;
            this.fishes.push(new Fish(this));
          }
        }
      },

      render() {
        this.animationFrameId = requestAnimationFrame(this.render.bind(this));
        this.controlStatus();
        context.clearRect(0, 0, this.width, this.height);

        // Colors from reference or theme
        context.fillStyle = '#f0f9ff'; // Very light blue for fish? Or match parent?
        // Actually the original code checks computed style. Let's use a nice subtle color.
        // The footer is white, so maybe a very light blue-grey for fish
        context.fillStyle = '#E2E8F0'; // Slate-200, subtle

        for (let i = 0; i < this.fishes.length; i++) {
          this.fishes[i].render(context);
        }

        context.save();
        context.globalCompositeOperation = 'xor';
        context.beginPath();
        context.moveTo(0, this.reverse ? 0 : this.height);

        for (let i = 0; i < this.points.length; i++) {
          this.points[i].render(context);
        }
        context.lineTo(this.width, this.reverse ? 0 : this.height);
        context.closePath();
        context.fill();
        context.restore();
      },
    };

    renderer.init();

    return () => {
      cancelAnimationFrame(renderer.animationFrameId);
      if (renderer.resizeTimer) clearTimeout(renderer.resizeTimer);
      renderer.unbindEvent();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      className="fish-animation-container"
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default FishAnimation;
