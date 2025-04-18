// DARK MODE LOGIC
const html = document.documentElement;
const lightToggle = document.querySelector('.light-toggle');
const darkToggle = document.querySelector('.dark-toggle');

// Set and update theme
function setTheme(mode) {
  if (mode === 'dark') {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    lightToggle.classList.remove('hidden');
    darkToggle.classList.add('hidden');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    lightToggle.classList.add('hidden');
    darkToggle.classList.remove('hidden');
  }
}

// On load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  lightToggle.addEventListener('click', () => setTheme('light'));
  darkToggle.addEventListener('click', () => setTheme('dark'));
});

// Mobile Menu Logic and Animation 
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const bars = menuToggle.querySelectorAll('span');

menuToggle.addEventListener('click', () => {
  // Animate hamburger bars
  menuToggle.classList.toggle('active');

  if (menuToggle.classList.contains('active')) {
    bars[0].style.transform = 'rotate(45deg) translateY(8px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translateY(-8px)';
  } else {
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  }

  // Animate mobile menu
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      mobileMenu.classList.remove('opacity-0', 'max-h-0', 'scale-95');
      mobileMenu.classList.add('opacity-100', 'max-h-screen', 'scale-100');
    }, 10);
  } else {
    mobileMenu.classList.remove('opacity-100', 'max-h-screen', 'scale-100');
    mobileMenu.classList.add('opacity-0', 'max-h-0', 'scale-95');

    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300); // match transition duration
  }
});





// Scroll to Community 
function scrollToCommunity() {
  const target = document.getElementById('Community');
  target.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Explore
function scrollToExplore() {
  const target = document.getElementById('Explore');
  target.scrollIntoView({ behavior: 'smooth' });
}


// Cards show more
const toggleBtn = document.getElementById('toggleButton');
const hiddenCards = document.querySelectorAll('.domain-card.hidden');
let expanded = false;

toggleBtn.addEventListener('click', () => {
  hiddenCards.forEach((card, index) => {
    if (!expanded) {
      setTimeout(() => {
        card.classList.remove('hidden');
        requestAnimationFrame(() => {
          card.classList.remove('opacity-0', 'translate-y-4');
        });
      }, index * 100);
    } else {
      card.classList.add('opacity-0', 'translate-y-4');
      setTimeout(() => {
        card.classList.add('hidden');
      }, 300);
    }
  });
  expanded = !expanded;
  toggleBtn.textContent = expanded ? 'Show Less' : 'Show More';
});