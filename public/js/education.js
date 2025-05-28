
  const eduImage = document.getElementById("eduImage");
  const originalSrc = eduImage.src;

  document.querySelectorAll(".tooltip").forEach(item => {
    item.addEventListener("mouseenter", () => {
      const newSrc = item.getAttribute("data-img");
      if (newSrc) {
        eduImage.src = newSrc;
      }
    });
    item.addEventListener("mouseleave", () => {
      eduImage.src = originalSrc;
    });
  });

  const sphereRadius = 150;
  const dotSize = 8;
  
  const fibContainer = document.getElementById('fibContainer');
    const pointCount = 450;  // number of dots
    const offset = 2 / pointCount;
    const increment = Math.PI * (3 - Math.sqrt(5));  // ≈137.5°

    for (let i = 0; i < pointCount; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      createDot(fibContainer, x, y, z);
    }

    // ===== Helper =====
    function createDot(container, x, y, z) {
      const dot = document.createElement('div');
      dot.className = 'dot';
    
      // Gốc toạ độ
      const baseX = x * sphereRadius;
      const baseY = y * sphereRadius;
      const baseZ = z * sphereRadius;
    
      dot.style.setProperty('--x', baseX + 'px');
      dot.style.setProperty('--y', baseY + 'px');
      dot.style.setProperty('--z', baseZ + 'px');
    
      // Vị trí ban đầu
      dot.style.transform = `translate3d(${baseX + 200}px, ${baseY + 200}px, ${baseZ}px)`;
      container.appendChild(dot);
    }
