// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsWithLang = document.querySelectorAll('[data-en][data-zh]');
    
    // Set initial language
    let currentLang = 'zh';
    
    // Language data
    const translations = {
        en: {
            'Features': 'Features',
            'Screenshots': 'Screenshots', 
            'Download': 'Download',
            'ChronoDiary': 'ChronoDiary',
            'Capture your moments, timeline your stories': 'Capture your moments, timeline your stories',
            'Transform your daily thoughts into a beautiful chronological journey. Experience diary writing like never before with our intuitive timeline interface.': 'Transform your daily thoughts into a beautiful chronological journey. Experience diary writing like never before with our intuitive timeline interface.',
            'Download Now': 'Download Now',
            'Learn More': 'Learn More',
            'Core Features': 'Core Features',
            'Chronological Feed': 'Chronological Feed',
            'View diary entries arranged by date and time in a beautiful timeline format that makes it easy to navigate through your memories.': 'View diary entries arranged by date and time in a beautiful timeline format that makes it easy to navigate through your memories.',
            'Memory Lane': 'Memory Lane',
            'Swipe through diary cards like a timeline, reliving your memories with smooth, intuitive gestures that make browsing your past effortless.': 'Swipe through diary cards like a timeline, reliving your memories with smooth, intuitive gestures that make browsing your past effortless.',
            'Quick Add': 'Quick Add',
            'Instantly capture thoughts as they come with our streamlined interface. No complex forms, just pure, spontaneous expression.': 'Instantly capture thoughts as they come with our streamlined interface. No complex forms, just pure, spontaneous expression.',
            'App Screenshots': 'App Screenshots',
            'Start Your Journey': 'Start Your Journey',
            'Download ChronoDiary today and begin capturing your life\'s precious moments in a beautiful, chronological format.': 'Download ChronoDiary today and begin capturing your life\'s precious moments in a beautiful, chronological format.',
            'Download on the': 'Download on the',
            'App Store': 'App Store',
            'Privacy Policy': 'Privacy Policy',
            'Terms of Use': 'Terms of Use',
            'All rights reserved.': 'All rights reserved.'
        },
        zh: {
            'Features': '功能',
            'Screenshots': '截图',
            'Download': '下载',
            'ChronoDiary': 'ChronoDiary',
            'Capture your moments, timeline your stories': '捕捉你的时刻，时间线记录你的故事',
            'Transform your daily thoughts into a beautiful chronological journey. Experience diary writing like never before with our intuitive timeline interface.': '将你的日常想法转化为美丽的时间线旅程。通过我们直观的时间线界面，体验前所未有的日记写作。',
            'Download Now': '立即下载',
            'Learn More': '了解更多',
            'Core Features': '核心功能',
            'Chronological Feed': '时间线动态',
            'View diary entries arranged by date and time in a beautiful timeline format that makes it easy to navigate through your memories.': '以美丽的时间线格式查看按日期和时间排列的日记条目，让您轻松浏览回忆。',
            'Memory Lane': '回忆长廊',
            'Swipe through diary cards like a timeline, reliving your memories with smooth, intuitive gestures that make browsing your past effortless.': '像时间线一样滑动日记卡片，通过流畅直观的手势重温回忆，让浏览过去变得轻松。',
            'Quick Add': '快速添加',
            'Instantly capture thoughts as they come with our streamlined interface. No complex forms, just pure, spontaneous expression.': '通过我们简化的界面即时捕捉想法。没有复杂的表单，只有纯粹、自发的表达。',
            'App Screenshots': '应用截图',
            'Start Your Journey': '开始你的旅程',
            'Download ChronoDiary today and begin capturing your life\'s precious moments in a beautiful, chronological format.': '立即下载ChronoDiary，开始以美丽的时间线格式捕捉你生命中的珍贵时刻。',
            'Download on the': '在',
            'App Store': 'App Store',
            'Privacy Policy': '隐私政策',
            'Terms of Use': '使用条款',
            'All rights reserved.': '保留所有权利。'
        }
    };
    
    // Function to update language
    function updateLanguage(lang) {
        currentLang = lang;
        
        // Update active button
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update all elements with language data
        elementsWithLang.forEach(element => {
            const text = element.dataset[lang];
            if (text) {
                element.textContent = text;
            }
        });
        
        // Update document language
        document.documentElement.lang = lang;
    }
    
    // Add click event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.nav-menu a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add glow effect to buttons on hover
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .download-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(77, 208, 225, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add floating animation to feature icons
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.style.animation = 'float 3s ease-in-out infinite';
    });
    
    // Add click ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Add ripple effect to all buttons
    const allButtons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .download-btn');
    allButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        button, .btn-primary, .btn-secondary, .download-btn {
            position: relative;
            overflow: hidden;
        }
        
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.95);
            padding: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            z-index: 1000;
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize with Chinese
    updateLanguage('zh');
});
