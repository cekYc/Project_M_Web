import { useEffect, useRef } from 'react';

const TechBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const techs = [
    { icon: '🧊', name: 'Voxel Engine', detail: 'Özel Motor' },
    { icon: '⚡', name: 'GPU Optimized', detail: 'VRAM Yönetimi' },
    { icon: '🌱', name: 'Seed Sistemi', detail: 'Sonsuz Dünya' },
    { icon: '🔥', name: 'Isı Simülasyonu', detail: 'Gerçek Zamanlı' },
    { icon: '🏗️', name: 'Yapısal Bütünlük', detail: 'Fizik Tabanlı' },
  ];

  return (
    <div className="tech-bar reveal" ref={ref}>
      {techs.map((tech, idx) => (
        <div className="tech-item" key={idx}>
          <div className="tech-item-icon">{tech.icon}</div>
          <div className="tech-item-text">
            <strong>{tech.name}</strong>
            <span>{tech.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechBar;
