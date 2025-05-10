document.addEventListener('DOMContentLoaded', function() {

    //js для кнопки "На главную" (xml)
    const buttonXMLElement = document.getElementById('button_xml');
    if (buttonXMLElement) {
        buttonXMLElement.addEventListener('mouseover', function() {
            buttonXMLElement.style.backgroundColor = '#f0ebe3';
            buttonXMLElement.style.color = 'rgb(30, 30, 30)';
            buttonXMLElement.style.transform = 'scale(1.1)';
            buttonXMLElement.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
            buttonXMLElement.style.cursor = 'pointer';
        });

        buttonXMLElement.addEventListener('mouseout', function() {
            buttonXMLElement.style.backgroundColor = 'transparent';
            buttonXMLElement.style.color = '#f0ebe3';
            buttonXMLElement.style.transform = 'scale(1)';
        });

        buttonXMLElement.onclick = function() {
            window.location.href = '../html/homepage.html';
        };
    } else {
        console.error("Элемент 'button_xml' не найден");
    }

    //js для svg иконок
    const facebook = document.getElementById('facebook');

    facebook.addEventListener('mouseover', function() {
        facebook.style.transform = 'scale(1.2)';
        facebook.style.cursor = 'pointer';
        facebook.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
    });

    facebook.addEventListener('mouseout', function() {
        facebook.style.transform = 'scale(1)';
        facebook.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
    });

    facebook.onclick = function() {
        window.location.href = 'https://www.facebook.com/';
    }

    const insta = document.getElementById('insta');

    insta.addEventListener('mouseover', function() {
        insta.style.transform = 'scale(1.2)';
        insta.style.cursor = 'pointer';
        insta.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
    });

    insta.addEventListener('mouseout', function() {
        insta.style.transform = 'scale(1)';
        insta.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
    });

    insta.onclick = function() {
        window.location.href = 'https://www.instagram.com/';
    }
    const youtube = document.getElementById('youtube');

    youtube.addEventListener('mouseover', function() {
        youtube.style.transform = 'scale(1.2)';
        youtube.style.cursor = 'pointer';
        youtube.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
    });

    youtube.addEventListener('mouseout', function() {
        youtube.style.transform = 'scale(1)';
        youtube.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
    });

    youtube.onclick = function() {
        window.location.href = 'https://www.youtube.com/';
    }

});
