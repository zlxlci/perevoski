// Sticky Header functionality
document.addEventListener('DOMContentLoaded', function() {
    const stickyHeader = document.getElementById('stickyHeader');
    const featuresSection = document.getElementById('featuresSection');
    
    if (!stickyHeader || !featuresSection) {
        console.log('Elements not found');
        return;
    }
    
    function toggleHeader() {
        const featuresRect = featuresSection.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        // Показываем header когда доскроллили до features section
        if (scrollPosition > 200) {
            stickyHeader.classList.add('visible');
        } else {
            stickyHeader.classList.remove('visible');
        }
    }
    
    // Слушаем событие прокрутки
    window.addEventListener('scroll', toggleHeader, { passive: true });
    
    // Вызываем сразу для правильного состояния при загрузке
    toggleHeader();
    
    console.log('Sticky header script loaded');
});