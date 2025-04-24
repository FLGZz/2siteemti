document.addEventListener('DOMContentLoaded', () => {
  // Funções utilitárias para manipular a visibilidade
  const showElement = (element, displayStyle = 'block') => {
    element.style.display = displayStyle;
  };

  const hideElement = element => {
    element.style.display = 'none';
  };

  // --- Carrossel ---
  const carousel = document.querySelector('.carousel');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const scrollAmount = 660;

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // --- Overlay ---
  const carouselContainer = document.getElementById('carousel-container');
  const overlayContent = document.getElementById('overlay-content');
  const backButton = document.getElementById('back-button');
  const contentBlocks = document.querySelectorAll('#overlay-inner-content .content');

  // Inicialmente, ocultar todos os blocos de conteúdo do overlay
  contentBlocks.forEach(block => hideElement(block));

  const carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach(item => {
    item.addEventListener('click', () => {
      hideElement(carouselContainer); // Oculta o carrossel

      // Oculta todos os conteúdos do overlay e exibe o correto
      contentBlocks.forEach(block => hideElement(block));
      const targetId = item.getAttribute('data-target');
      const targetBlock = document.getElementById(targetId);
      if (targetBlock) {
        showElement(targetBlock);
      }

      // Exibe o overlay
      showElement(overlayContent);
    });
  });

  backButton.addEventListener('click', () => {
    hideElement(overlayContent);        // Oculta o overlay
    carouselContainer.style.display = 'flex'; // Retorna o carrossel (usa flex conforme configurado)
  });

  // --- Accordion ---
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      // Alterna entre mostrar e ocultar o conteúdo do accordion
      if (content.style.display === 'block') {
        hideElement(content);
        button.setAttribute('aria-expanded', 'false');
      } else {
        showElement(content);
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", () => {
    // Alterna entre abrir e fechar o menu
    if (menu.style.right === "0px") {
      menu.style.right = "-250px";
    } else {
      menu.style.right = "0px";
    }
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
      menu.style.right = "-250px";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById("contact-link");
  const emailSpan = document.getElementById("email");

  contactLink.addEventListener("click", (event) => {
    event.preventDefault(); // Impede que a página recarregue

    // Alterna entre mostrar e ocultar o email
    emailSpan.style.display = emailSpan.style.display === "none" ? "block" : "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sobreSite = document.getElementById("sobre-site");
  const siteSpan = document.getElementById("site");

  sobreSite.addEventListener("click", (event) => {
    event.preventDefault(); 

 
    siteSpan.style.display = siteSpan.style.display === "none" ? "block" : "none";
  });
});
