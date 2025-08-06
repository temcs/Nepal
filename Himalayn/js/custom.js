
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  // shake effect every 2s 

const iconImages = document.querySelectorAll('.Brand-icon-item img');

// Ensure base styles are clean and transition-ready
iconImages.forEach((img) => {
  img.style.display = 'inline-block';
  img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  img.style.borderRadius = '50%'; // Optional: makes it circular glow if the icon is square
});

setInterval(() => {
  iconImages.forEach((img) => {
    img.style.transform = 'scale(1.1)';
    // img.style.boxShadow = '0px 0px 30px rgb(255, 95, 2)';

    setTimeout(() => {
      img.style.transform = 'scale(1)';
      img.style.boxShadow = 'none';
    }, 300);
  });
}, 2000);







  // Select all gift icons
  const giftIcons = document.querySelectorAll('.bi-gift');

  // Apply base styles (mimics CSS) using JS
  giftIcons.forEach((icon) => {
    icon.style.display = 'inline-block';
    icon.style.transition = 'transform 0.2s ease-in-out';
  });

  // Animation every 2 seconds
  setInterval(() => {
    giftIcons.forEach((icon) => {
      icon.style.transform = 'scale(1.3) rotate(5deg)';

      setTimeout(() => {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }, 200);
    });
  }, 1000);


// game links manage 


const links = [
  { name: "Play in - 8MBets", url: "https://www.8mbets.net/en-np?aff=6892c79d8a&signup=1" },
  { name: "Play in - MJ88", url: "https://www.mj88rs.com/register?affiliateCode=patnership" },
  { name: "Play in - Esewa12", url: "https://www.esewa12.com/register?affiliateCode=patnership" }
];

// Select all elements with class "gamesLinks"
const containers = document.querySelectorAll(".gamesLinks");

containers.forEach(container => {
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.className = "button custom-btn smoothscroll";
    a.target = "_blank";
    container.appendChild(a.cloneNode(true)); // clone to avoid shared references
  });
});



  // Map the text label to URLs
  const urlMap = {
    "8MBts LiveChat": "https://direct.lc.chat/17319642/",
    "MJ88 LiveChat": "https://direct.lc.chat/17355666/",
    "Esewa12 LiveChat": "https://direct.lc.chat/19159242/",
    "8MBts WhatsApp": "https://api.whatsapp.com/send?phone=60172132382&text=Hello%208MBets%2C%0D%0AI%20need%20some%20information%20about%208MBets.%0D%0ACan%20you%20help%20me%3F",
    "MJ88 WhatsApp": "https://api.whatsapp.com/send?phone=601161648104&text=ho%20company%20MJ88",
    "Esewa12 WhatsApp": "https://api.whatsapp.com/send?phone=9779701232397&text=Hi%2C%20I%20have%20some%20problem%20need%20to%20solve"
  };

  // Apply click event to all .CBChild elements in all tabs
  document.querySelectorAll(".CBChild").forEach(child => {
    child.style.cursor = "pointer";
    child.addEventListener("click", () => {
      // Get only the text part, ignoring the image
      const name = child.textContent.trim();
      if (urlMap[name]) {
        window.open(urlMap[name], "_blank");
      }
    });
  });
