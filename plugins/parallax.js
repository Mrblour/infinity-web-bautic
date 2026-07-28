/**
 * Orbit Glow Plugin
 * ─────────────────────────────────────────
 * Orbits a green glow around the EDGE of the logo.
 * Also animates the logo's drop-shadow in the same direction
 * so the contour glow follows too.
 *
 * AUTO:  glow rotates continuously around the logo border
 * HOVER: glow moves toward the mouse direction
 * LEAVE: resumes auto-orbit
 */

function initOrbitGlow() {
    const container = document.getElementById('hero-interactive-area');
    const glow      = document.getElementById('orbit-glow');
    const logoImg   = document.getElementById('logo-img');
    if (!container || !glow) return;

    if (window._orbitGlowRAF) {
        cancelAnimationFrame(window._orbitGlowRAF);
        window._orbitGlowRAF = null;
    }

    // ── Config ───────────────────────────────────────────────
    const ORBIT_RATIO = 0.78;  // how far from center (0=center, 1=corner)
    const AUTO_SPEED  = 1.0;   // degrees per frame
    const SNAP_EASE   = 0.07;  // easing on hover

    const GLOW_W = 170;  // must match CSS width
    const GLOW_H = 170;

    let angle       = -90;   // start at top
    let targetAngle = -90;
    let isHovered   = false;

    // ── Position glow and update logo drop-shadow ─────────────
    function update(deg) {
        const rad = deg * Math.PI / 180;
        const cx  = container.offsetWidth  / 2;
        const cy  = container.offsetHeight / 2;
        const r   = Math.min(cx, cy) * ORBIT_RATIO;

        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);

        // Move the glow blob
        glow.style.left = (x - GLOW_W / 2) + 'px';
        glow.style.top  = (y - GLOW_H / 2) + 'px';

        // Update logo drop-shadow to point in same direction (subtle directional glow on contour)
        if (logoImg) {
            const sdx = Math.cos(rad) * 10;
            const sdy = Math.sin(rad) * 10;
            logoImg.style.filter = `drop-shadow(${sdx}px ${sdy}px 14px rgba(137,243,54,0.75))`;
        }
    }

    // ── Shortest angular delta ────────────────────────────────
    function shortestDelta(from, to) {
        let d = ((to - from) % 360 + 360) % 360;
        if (d > 180) d -= 360;
        return d;
    }

    // ── Mouse events ─────────────────────────────────────────
    container.addEventListener('mouseenter', () => { isHovered = true; });
    container.addEventListener('mouseleave', () => { isHovered = false; });
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const mx   = e.clientX - rect.left  - rect.width  / 2;
        const my   = e.clientY - rect.top   - rect.height / 2;
        targetAngle = Math.atan2(my, mx) * (180 / Math.PI);
    });

    // ── Animation loop ────────────────────────────────────────
    function tick() {
        if (isHovered) {
            angle += shortestDelta(angle, targetAngle) * SNAP_EASE;
        } else {
            angle = (angle + AUTO_SPEED) % 360;
        }
        update(angle);
        window._orbitGlowRAF = requestAnimationFrame(tick);
    }

    tick();
}

document.addEventListener('fc-view-loaded', initOrbitGlow);
document.addEventListener('DOMContentLoaded', initOrbitGlow);
