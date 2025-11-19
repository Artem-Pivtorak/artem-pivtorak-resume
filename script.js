
document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Full-stack Developer", "JavaScript Engineer", "Python Developer", "video editor", "screenwriter", "video operator", "designer", "photographer", "3D master"];
    let currentIndex = 0;
    const roleElement = document.getElementById("developer-role");
    const typeSpeed = 100;

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            roleElement.innerHTML = text.substring(0, i + 1) + '<span class="blinking-cursor">|</span>';
            setTimeout(() => typeWriter(text, i + 1, fnCallback), typeSpeed);
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 2000);
        }
    }

    function startTextAnimation(i) {
        if (i >= roles.length) i = 0;
        typeWriter(roles[i], 0, () => startTextAnimation(i + 1));
    }

    startTextAnimation(currentIndex);

    // Icon frame interaction
    const icons = document.querySelectorAll(".icon");
    const networkIcons = document.querySelectorAll(".network-icon .icon");
    const activeFrame = document.createElement("div");
    activeFrame.classList.add("frame");
    document.querySelector(".icon-container").appendChild(activeFrame);

    icons.forEach((icon) => {
        icon.addEventListener("click", function () {
            if (![...networkIcons].includes(icon)) {
                icons.forEach(i => {
                    i.classList.remove("active");
                    i.style.transform = "scale(1)";
                });
                icon.classList.add("active");
                icon.style.transform = "scale(1.2)";
                const iconPos = icon.getBoundingClientRect();
                const containerPos = document.querySelector(".icon-container").getBoundingClientRect();
                activeFrame.style.left = (iconPos.left - containerPos.left + 4) + "px";
                activeFrame.style.display = "block";
            }
        });

        icon.addEventListener("mouseover", () => {
            if (![...networkIcons].includes(icon) && !icon.classList.contains("active")) {
                icon.style.transform = "translateY(-5px)";
            }
        });

        icon.addEventListener("mouseout", () => {
            if (![...networkIcons].includes(icon) && !icon.classList.contains("active")) {
                icon.style.transform = "translateY(0)";
            }
        });
    });

    networkIcons.forEach((icon) => {
        icon.addEventListener("mouseover", () => {
            icon.style.fill = "#eeb6b6";
            icon.style.transform = "scale(0.9)";
        });

        icon.addEventListener("mouseout", () => {
            icon.style.fill = "rgb(196, 0, 0)";
            icon.style.transform = "scale(1)";
        });
    });

    // Navigation windows
    const navIcons = document.querySelectorAll(".icons-list-skils li");
    const windows = document.querySelectorAll(".window");

    navIcons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            windows.forEach(window => window.classList.remove("active"));
            const targetId = ["home", "projects", "information", "rating", "order"][index];
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Video playback rate
    const portfolioVideo = document.querySelector(".video-portfolio video");
    if (portfolioVideo) portfolioVideo.playbackRate = 0.2;

    const backgroundVideo = document.querySelector(".background-video");
    if (backgroundVideo) backgroundVideo.playbackRate = 0.5;
});

document.addEventListener("DOMContentLoaded", function () {
    const rellax = new Rellax('.some-element');
  });

  document.querySelectorAll('.icon-clas-skils').forEach(icon => {
    icon.addEventListener('click', () => {
        const svg = icon.querySelector('.neon-icon');
        svg.classList.add('crazy');
        setTimeout(() => {
            svg.classList.remove('crazy');
        }, 600);
    });
});


document.querySelectorAll('.icon-clas-skils').forEach(icon => {
    icon.addEventListener('click', () => {
        const isActive = icon.classList.contains('active');

        document.querySelectorAll('.icon-clas-skils').forEach(i => {
            i.classList.remove('active', 'inactive');
        });

        if (!isActive) {
            icon.classList.add('active');
            document.querySelectorAll('.icon-clas-skils').forEach(i => {
                if (!i.classList.contains('active')) {
                    i.classList.add('inactive');
                }
            });
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      } else {
        entry.target.classList.remove('reveal-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-left, .scroll-right, .scroll-fade').forEach(el => {
    observer.observe(el);
  });

  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      } else {
        entry.target.classList.remove("reveal-visible");
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});

window.addEventListener('scroll', () => {
  const section = document.querySelector('.artem-skils');
  const overlay = document.querySelector('.gradient-overlay-info');

  const sectionBottom = section.offsetTop + section.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= sectionBottom) {
    overlay.classList.add('active');
  } else {
    overlay.classList.remove('active');
  }
});

  const btn = document.getElementById('flipBtn');
  btn.addEventListener('click', () => {
    const orig = document.querySelector('.flip-box');
    const parent = orig.parentElement;

    let existing = parent.querySelector('.flip-overlay');
    if (existing) {
      const fl = existing.querySelector('.overlay-flipper');
      fl.classList.remove('flipped');
      fl.addEventListener('transitionend', () => {
        existing.remove();
        orig.style.visibility = '';
      }, { once: true });
      return;
    }

    orig.style.visibility = 'hidden';

    const top  = orig.offsetTop;
    const left = orig.offsetLeft;
    const width  = orig.offsetWidth;
    const height = orig.offsetHeight;

    const overlay = document.createElement('div');
    overlay.className = 'flip-overlay';
    Object.assign(overlay.style, {
      top:  (top - 480) + 'px',
      left: (left + -210) + 'px',
      width:  width + 'px',
      height: height + 'px'
    });

    overlay.innerHTML = `
  <button class="flip-back-btn" aria-label="Close">×</button>

      <div class="overlay-flipper">
        <div class="overlay-front">
          ${orig.innerHTML}
        </div>
        <div class="overlay-back">
          <button class="back-btn" data-file="files/Artem_Pivtorak_Fullstack developer.jpg">Download jpg</button>
          <button class="back-btn" data-file="files/Artem_Pivtorak_Fullstack developer.png">Download png</button>
          <button class="back-btn" data-file="files/Artem_Pivtorak_Fullstack developer.rar">Download rar</button>
          <button class="back-btn" data-file="files/Artem_Pivtorak_Fullstack developer.pdf">Download pdf</button>
        </div>
      </div>
    `;
    parent.appendChild(overlay);

overlay.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const fileUrl = btn.dataset.file;
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});


    const backBtn = overlay.querySelector('.flip-back-btn');
backBtn.addEventListener('click', () => {
  const fl = overlay.querySelector('.overlay-flipper');
  fl.classList.remove('flipped');
  fl.addEventListener('transitionend', () => {
    overlay.remove();
    orig.style.visibility = '';
  }, { once: true });
});

requestAnimationFrame(() => {
  overlay.querySelector('.overlay-flipper').classList.add('flipped');
});

    requestAnimationFrame(() => {
      overlay.querySelector('.overlay-flipper').classList.add('flipped');
    });
  });

    const frame = document.querySelector('.neon-frame');
  const image = frame.querySelector('.resume-photo-artem-pivtorak');
  const closeBtn = frame.querySelector('.flip-back-btn');

  frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  frame.addEventListener('mouseleave', () => {
    image.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });

gsap.registerPlugin(ScrollTrigger);

gsap.set(".scroll-images", { x: "300%" });

gsap.to(".scroll-images", {
  x: "-150%",
    duration: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".gradient-overlay-info",
    start: "top bottom",
    end: "bottom top+=-110%",
    scrub: true,
  }
});


gsap.to(".scroll-bg", {
  backgroundColor: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(8px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".gradient-overlay-info",
    start: "center center", // половина скролу
    end: "bottom center",
    scrub: true
  }
});

gsap.to(".skills-label", {
  opacity: 1,
  y: 0, // або інша анімація
  scrollTrigger: {
    trigger: ".gradient-overlay-info",
    start: "top bottom+=-120%", // коли верх секції доходить до низу viewport
    end: "bottom top", // кінець скролу
    scrub: true
  }
});



function openOverlay(type) {

  const overlay = document.getElementById('overlay');
  const content = document.getElementById('overlay-content');
  let html = '';

if (type === 'programming') {
  html = `
    <div class="projects-list">

<div class="project-block">
  <h3 class="project-title">Web studio GoIt</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
                        <img src="programming/web studio/Web-studio-1.png" alt="1">
            <img src="programming/web studio/Web-studio-2.png" alt="2">
            <img src="programming/web studio/Web-studio-3.png" alt="3">
            <img src="programming/web studio/Web-studio-4.png" alt="4">
            <img src="programming/web studio/Web-studio-5.png" alt="5">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
          <a href="https://github.com/Artem-Pivtorak/goit-markup-hw-06" target="_blank" class="github-button">
        View on GitHub
      </a>
    <div class="project-details">
      <p class="project-description">The site was developed in 2024 for the GOIT company. The site has information about the company, adaptation for mobile,
tablet and desktop versions of browsers. The site is optimized using additional customization methods. All images
support 2x "Retina display" resolution. The site had a deadline of 6 weeks. Submitted successfully!</p>
    </div>
  </div>
</div>




<div class="project-block">
  <h3 class="project-title">WatchCharm</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
                        <img src="programming/watchcharm/watchcharm.png" alt="1">
            <img src="programming/watchcharm/watchcharm-2.png" alt="2">
            <img src="programming/watchcharm/watchcharm-3.png" alt="3">
            <img src="programming/watchcharm/watchcharm-4.png" alt="4">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
          <a href="https://github.com/Oxana200/commit-and-pray" target="_blank" class="github-button">
        View on GitHub
      </a>
    <div class="project-details">
      <p class="project-description">This website - a watch store, 
      was developed in 1 week by a team of developers. I participated 
      in the development of the "Reviews" section. The site has implemented: 
      adaptation for mobile, tablet and desktop versions of browsers. 
      The site is optimized using additional customization methods. All 
      images support 2x "Retina display"
       resolution. Submitted successfully!</p>
    </div>
  </div>
</div>



<div class="project-block">
  <h3 class="project-title">backend-students</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="programming/backend-students/postman.png" alt="1">
        </div>
      </div>
        <button class="slider-arrow right-arrow">→</button>
    </div>
          <a href="https://github.com/Artem-Pivtorak/nodejs-hw-mongodb" target="_blank" class="github-button">
        View on GitHub
      </a>
    <div class="project-details">
      <p class="project-description">The backend part 
      of the database was created using mongodb (students), 
      and the following functions were implemented: registration, 
      login, refresh token, logout, student viewing, 
      and much more... Submitted successfully!</p>
    </div>
  </div>
</div>




<div class="project-block">
  <h3 class="project-title">Students (React)</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="programming/students(React)/react.png" alt="1">
        </div>
      </div>
        <button class="slider-arrow right-arrow">→</button>
    </div>
          <a href="https://github.com/Artem-Pivtorak/goit-react-hw-08" target="_blank" class="github-button">
        View on GitHub
      </a>
    <div class="project-details">
      <p class="project-description">A basic student search site has been created based on the React framework. See the repository for details. Submitted successfully!</p>
    </div>
  </div>
</div>



<div class="project-block">
  <h3 class="project-title">Search Images</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
    <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="programming/search-images/search-i-1.png" alt="1">
            <img src="programming/search-images/search-i-2.png" alt="2">
            <img src="programming/search-images/search-i-3.png" alt="3">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
          <a href="https://github.com/Artem-Pivtorak/goit-js-hw-12" target="_blank" class="github-button">
        View on GitHub
      </a>
    <div class="project-details">
      <p class="project-description">A JavaScript site has been created
       (Image search and viewing). Search, viewing using a modal window,
        and loading have been implemented.
       Check out the repository. Submitted successfully!</p>
    </div>
  </div>
</div>


<div class="project-block">
  <h3 class="project-title">Harmoniq</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="programming/Harmoniq/Harmoniq.png" alt="1">
            <img src="programming/Harmoniq/Harmoniq-2.png" alt="2">
            <img src="programming/Harmoniq/Harmoniq-3.png" alt="3">
            <img src="programming/Harmoniq/Harmoniq-4.png" alt="4">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
          <a href="https://github.com/Nikolas-vl/project-harmoniq-front-end" target="_blank" class="github-button">
        View on GitHub
      </a>
    <div class="project-details">
      <p class="project-description">The site was developed by a team,
       the backend part was made using node.js, and the frontend using react.
        I participated in the "Creators" section. The site is adaptive, 
        has authorization, and many different details. Familiarization on
         the repository,
       and the live page. Submitted successfully!</p>
    </div>
  </div>
</div>





<div class="project-block">
  <h3 class="project-title">Portfolio</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="programming/portfolio/portfolio-1.png" alt="1">
            <img src="programming/portfolio/portfolio-2.png" alt="2">
            <img src="programming/portfolio/portfolio-3.png" alt="3">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
          <a href="https://github.com/HolovchukNatalia/simply-the-best" target="_blank" class="github-button">
        View on GitHub
      </a>
    <div class="project-details">
      <p class="project-description">The portfolio site was developed for a person in a very short time (1 week). The site has a responsive layout, image and icon optimization, and many new features. I participated as a developer, and worked on the "About me" section, and a swiper with skills. Submitted successfully!</p>
    </div>
  </div>
</div>


  `;
}

 else if (type === 'video') {
    html = `
      <div class="video-list">

    <div class="video-item">
      <video controls>
        <source src="video/after effects.mp4" type="video/mp4">
        Your browser does not support video..
      </video>
      <h2 class="video-title">memory card hologram</h2>
      <p class="video-description">
        The video was made with a 3D hologram effect of viewing data on a memory card. The video was made using: Premiere Pro, After Effects, DaVinci Resolve, Blender. The video was color-corrected from a log format, a hologram effect was added, and a 3D model of the camera was placed in the background.
      </p>
    </div>



    <div class="video-item">
      <video controls>
        <source src="video/chanel.mp4" type="video/mp4">
        Your browser does not support video..
      </video>
      <h2 class="video-title">voice assistant presentation</h2>
      <p class="video-description">
  video presentation of a voice assistant for a company developing technological products and high-quality products.
      </p>
    </div>

    
    <div class="video-item">
      <video controls>
        <source src="video/cinematic.mp4">
        Your browser does not support video..
      </video>
      <h2 class="video-title">Twilight Remains</h2>
      <p class="video-description">
A mini cinematic trailer for a non-existent movie. Made with programs such as: Premiere Pro, After Effects, Photoshop, Dazz 3D, Blender, DaVinci Resolve...      </div>
    </p>

    
    <div class="video-item">
      <video controls>
        <source src="video/Italy.mp4" type="video/mp4">
        Your browser does not support video..
      </video>
      <h2 class="video-title">travel</h2>
      <p class="video-description">
  Video clip about a trip to Italy. (Attention) The footage in the video was taken from the internet, filming the content was not my work.
      </p>
    </div>

  </div>
    `;
} else if (type === 'photo') {
  html = `
<div class="project-block">
  <h3 class="project-title">sunset</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="photos/sunset/photo-1.jpg" alt="1">
            <img src="photos/sunset/photo-2.jpg" alt="2">
            <img src="photos/sunset/photo-3.jpg" alt="3">
            <img src="photos/sunset/photo-4.jpg" alt="4">
            <img src="photos/sunset/photo-5.jpg" alt="5">
            <img src="photos/sunset/photo-6.jpg" alt="6">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
    <div class="project-details">
      <p class="project-description">photos of different sunsets at different times and locations.</p>
    </div>
  </div>
</div>



<div class="project-block">
  <h3 class="project-title">flowers</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="photos/flowers/photo-1.jpg" alt="1">
            <img src="photos/flowers/photo-2.jpg" alt="2">
            <img src="photos/flowers/photo-3.jpg" alt="3">
            <img src="photos/flowers/photo-4.jpg" alt="4">
            <img src="photos/flowers/photo-5.jpg" alt="5">
            <img src="photos/flowers/photo-6.jpg" alt="6">
            <img src="photos/flowers/photo-7.jpg" alt="7">
            <img src="photos/flowers/photo-8.jpg" alt="8">
            <img src="photos/flowers/photo-9.jpg" alt="9">
            <img src="photos/flowers/photo-10.jpg" alt="10">
            <img src="photos/flowers/photo-11.jpg" alt="11">
            <img src="photos/flowers/photo-12.jpg" alt="12">
            <img src="photos/flowers/photo-13.jpg" alt="13">
            <img src="photos/flowers/photo-14.jpg" alt="14">
            <img src="photos/flowers/photo-15.jpg" alt="15">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
    <div class="project-details">
      <p class="project-description">Beautiful photos of natural flowers of various types and ideas for shooting.</p>
    </div>
  </div>
</div>



<div class="project-block">
  <h3 class="project-title">animals</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="photos/animals/photo-1.jpg" alt="1">
            <img src="photos/animals/photo-2.jpg" alt="2">
            <img src="photos/animals/photo-3.jpg" alt="3">
            <img src="photos/animals/photo-4.jpg" alt="4">
            <img src="photos/animals/photo-5.jpg" alt="5">
            <img src="photos/animals/photo-6.jpg" alt="6">
            <img src="photos/animals/photo-7.jpg" alt="7">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
    <div class="project-details">
      <p class="project-description">photos of various animals, lizards, and insects.</p>
    </div>
  </div>
</div>



<div class="project-block">
  <h3 class="project-title">nature</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="photos/nature/photo-1.jpg" alt="1">
            <img src="photos/nature/photo-2.jpg" alt="2">
            <img src="photos/nature/photo-3.jpg" alt="3">
            <img src="photos/nature/photo-4.jpg" alt="4">
            <img src="photos/nature/photo-5.jpg" alt="5">
            <img src="photos/nature/photo-6.jpg" alt="6">
            <img src="photos/nature/photo-7.jpg" alt="7">
            <img src="photos/nature/photo-8.jpg" alt="8">
            <img src="photos/nature/photo-9.jpg" alt="9">
            <img src="photos/nature/photo-10.jpg" alt="10">
            <img src="photos/nature/photo-11.jpg" alt="11">
            <img src="photos/nature/photo-12.jpg" alt="12">
            <img src="photos/nature/photo-13.jpg" alt="13">
            <img src="photos/nature/photo-14.jpg" alt="14">
            <img src="photos/nature/photo-15.jpg" alt="15">

            <img src="photos/nature/photo-16.jpg" alt="1">
            <img src="photos/nature/photo-17.jpg" alt="2">
            <img src="photos/nature/photo-18.jpg" alt="3">
            <img src="photos/nature/photo-19.jpg" alt="4">
            <img src="photos/nature/photo-20.jpg" alt="5">
            <img src="photos/nature/photo-21.jpg" alt="6">
            <img src="photos/nature/photo-22.jpg" alt="7">
            <img src="photos/nature/photo-23.jpg" alt="8">
            <img src="photos/nature/photo-24.jpg" alt="9">
            <img src="photos/nature/photo-25.jpg" alt="10">
            <img src="photos/nature/photo-26.jpg" alt="11">
            <img src="photos/nature/photo-27.jpg" alt="12">
            <img src="photos/nature/photo-28.jpg" alt="13">
            <img src="photos/nature/photo-29.jpg" alt="14">
            <img src="photos/nature/photo-30.jpg" alt="15">

            <img src="photos/nature/photo-31.jpg" alt="31">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
    <div class="project-details">
      <p class="project-description">photos of nature in different locations, and ideas.</p>
    </div>
  </div>
</div>



<div class="project-block">
  <h3 class="project-title">beautiful photo</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="photos/beautiful photo/photo-1.jpg" alt="1">
            <img src="photos/beautiful photo/photo-2.jpg" alt="2">
            <img src="photos/beautiful photo/photo-3.jpg" alt="3">
            <img src="photos/beautiful photo/photo-4.jpg" alt="4">
            <img src="photos/beautiful photo/photo-5.jpg" alt="5">
            <img src="photos/beautiful photo/photo-6.jpg" alt="6">
            <img src="photos/beautiful photo/photo-7.jpg" alt="7">
            <img src="photos/beautiful photo/photo-8.jpg" alt="8">
            <img src="photos/beautiful photo/photo-9.jpg" alt="9">
            <img src="photos/beautiful photo/photo-10.jpg" alt="10">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
    <div class="project-details">
      <p class="project-description">Beautiful photos from various topics and themes.</p>
    </div>
  </div>
</div>



<div class="project-block">
  <h3 class="project-title">photoshop</h3>
  <div class="project-inner">
    <div class="image-slider-wrapper">
      <button class="slider-arrow left-arrow">←</button>
      <div class="image-slider-container">
        <div class="image-slider">
            <img src="photos/photoshop/photo-1.jpg" alt="1">
            <img src="photos/photoshop/photo-2.jpg" alt="2">
            <img src="photos/photoshop/photo-3.jpg" alt="3">
            <img src="photos/photoshop/photo-4.jpg" alt="4">
        </div>
      </div>
      <button class="slider-arrow right-arrow">→</button>
    </div>
    <div class="project-details">
      <p class="project-description">The photos were taken either completely or partially in Photoshop.</p>
    </div>
  </div>
</div>


    `;
  }

  content.innerHTML = html;
  overlay.classList.add('show');
    const allSliderImages = document.querySelectorAll('.image-slider img');
  let modalImages = [];
  let currentModalIndex = 0;

  allSliderImages.forEach((img, i) => {
    img.addEventListener('click', () => {
      modalImages = Array.from(img.parentElement.querySelectorAll('img'));
      currentModalIndex = modalImages.indexOf(img);

      const modal = document.getElementById('image-modal');
      const modalImg = modal.querySelector('.modal-image');
      modalImg.src = modalImages[currentModalIndex].src;
      modal.classList.add('show');
    });
  });

  const modal = document.getElementById('image-modal');
  const modalImg = modal.querySelector('.modal-image');
  const closeBtn = modal.querySelector('.modal-close');
  const leftBtn = modal.querySelector('.modal-left');
  const rightBtn = modal.querySelector('.modal-right');

  closeBtn.addEventListener('click', () => modal.classList.remove('show'));

  leftBtn.addEventListener('click', () => {
    currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
    modalImg.src = modalImages[currentModalIndex].src;
  });

  rightBtn.addEventListener('click', () => {
    currentModalIndex = (currentModalIndex + 1) % modalImages.length;
    modalImg.src = modalImages[currentModalIndex].src;
  });



const sliders = document.querySelectorAll('.image-slider-wrapper');

sliders.forEach(wrapper => {
  const slider = wrapper.querySelector('.image-slider');
  const container = wrapper.querySelector('.image-slider-container');
  const images = slider.querySelectorAll('img');
  let index = 0;

  const updateSlider = () => {
    const slideWidth = images[0].offsetWidth;
slider.style.transform = `translateX(-${index * slideWidth}px)`;

  };

  const leftBtn = wrapper.querySelector('.left-arrow');
  const rightBtn = wrapper.querySelector('.right-arrow');

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      index = Math.max(0, index - 1); // не виходимо за лівий край
      updateSlider();
    });

    rightBtn.addEventListener('click', () => {
      index = Math.min(images.length - 1, index + 1); // не виходимо за правий край
      updateSlider();
    });
  }

  window.addEventListener('resize', updateSlider); // підлаштовуємо при зміні ширини
  updateSlider();
});


}


function closeOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('show');
}


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert("Error sending. Please check the data.");
        }
      })
      .catch(error => {
        alert("Network error.");
        console.error(error);
      });
    });
  });

const btn2 = document.getElementById('flipBtn2');
btn2.addEventListener('click', () => {
  const orig = btn2.closest('.flip-box');
  const parent = orig.parentElement;

  let existing = parent.querySelector('.flip-overlay');
  if (existing) {
    const fl = existing.querySelector('.overlay-flipper');
    fl.classList.remove('flipped');
    fl.addEventListener('transitionend', () => {
      existing.remove();
      orig.style.visibility = '';
    }, { once: true });
    return;
  }

  orig.style.visibility = 'hidden';

  const top  = orig.offsetTop;
  const left = orig.offsetLeft;
  const width  = orig.offsetWidth;
  const height = orig.offsetHeight;

  const overlay = document.createElement('div');
  overlay.className = 'flip-overlay';
  Object.assign(overlay.style, {
    top:  (top - 480) + 'px',
    left: (left - 210) + 'px',
    width:  width + 'px',
    height: height + 'px'
  });

  overlay.innerHTML = `
    <button class="flip-back-btn" aria-label="Close">×</button>
    <div class="overlay-flipper">
      <div class="overlay-front">
        ${orig.innerHTML}
      </div>
      <div class="overlay-back">
        <button class="back-btn" data-file="files/Another_Resume.jpg">Download jpg</button>
        <button class="back-btn" data-file="files/Another_Resume.pdf">Download pdf</button>
      </div>
    </div>
  `;
  parent.appendChild(overlay);

  overlay.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const fileUrl = btn.dataset.file;
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = '';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });

  const backBtn = overlay.querySelector('.flip-back-btn');
  backBtn.addEventListener('click', () => {
    const fl = overlay.querySelector('.overlay-flipper');
    fl.classList.remove('flipped');
    fl.addEventListener('transitionend', () => {
      overlay.remove();
      orig.style.visibility = '';
    }, { once: true });
  });

  requestAnimationFrame(() => {
    overlay.querySelector('.overlay-flipper').classList.add('flipped');
  });
});


(function adaptiveScaleFix(){
  const site = document.querySelector('.site');
  const wrapper = document.querySelector('.site-viewport') || document.body;
  if(!site || !wrapper) return;

  function update(){
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const dpr = window.devicePixelRatio || 1;

    // container width logic (підкоригуй, якщо у тебе інші значення)
    let containerWidth;
    if (vw >= 1413) containerWidth = 1413;
    else if (vw >= 601) containerWidth = 1024;
    else containerWidth = 600;

    // scale (завжди <= 1)
    const rawScale = Math.min(1, vw / containerWidth);

    // Щоб уникнути субпіксельних артефактів при DPR > 1,
    // округлюємо масштаб до кроку 1/(dpr*100) або близько того.
    // Це зменшує дробові width після множення.
    const precision = Math.max(100, Math.round(dpr * 100)); // чим більший DPR, тим більша точність
    const scale = Math.floor(rawScale * precision) / precision;

    // scaledWidth в цілих пікселях (округлення важливе)
    const scaledWidth = Math.round(containerWidth * scale);

    // padding в цілих пікселях, щоб центр візуального блоку не обрізався
    const pad = Math.max(0, Math.round((vw - scaledWidth) / 2));

    // застосування: zoom (для Chrome/Edge/Safari) + transform як fallback
    site.style.zoom = scale; // non-standard, але корисний в Blink/WebKit
    site.style.transformOrigin = 'top left';
    site.style.transform = `scale(${scale})`;

    // wrapper paddings - центруємо візуальний блок і компенсуємо обріз
    wrapper.style.paddingLeft = pad + 'px';
    wrapper.style.paddingRight = pad + 'px';
    wrapper.style.overflowX = 'hidden';

    // debug лог (прибери в продакшн або коментуй)
    //console.log({ vw, dpr, containerWidth, rawScale, scale, scaledWidth, pad });
  }

  window.addEventListener('resize', update, {passive:true});
  window.addEventListener('orientationchange', update);
  update();
})();
