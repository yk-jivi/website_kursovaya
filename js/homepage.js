document.addEventListener('DOMContentLoaded', function() {

    //js для кнопок "Посмотреть рецепт" (html)
    const liderElement = document.getElementById('lider_element');
    if (liderElement) {
        liderElement.onclick = function() {
            window.location.href = '../xml/recept.xml';
        };
    } else {
        console.error("Элемент 'lider_element' не найден");
    }

    const breakfast = document.getElementById('breakfast');
    if (breakfast) {
        breakfast.onclick = function() {
            window.location.href = '../xml/breakfast_lider.xml';
        };
    } else {
        console.error("Элемент 'breakfast' не найден");
    }

    const breakfast1 = document.getElementById('breakfast1');
    if (breakfast1) {
        breakfast1.onclick = function() {
            window.location.href = '../xml/breakfast1.xml';
        };
    } else {
        console.error("Элемент 'breakfast1' не найден");
    }

    const breakfast2 = document.getElementById('breakfast2');
    if (breakfast2) {
        breakfast2.onclick = function() {
            window.location.href = '../xml/breakfast2.xml';
        };
    } else {
        console.error("Элемент 'breakfast2' не найден");
    }

    const lunch = document.getElementById('lunch');
    if (lunch) {
        lunch.onclick = function() {
            window.location.href = "../xml/lunch_lider.xml";
        };
    } else {
        console.error("Элемент 'lunch' не найден");
    }
    
    const lunch1 = document.getElementById("lunch1");
    if (lunch1) {
        lunch1.onclick = function() {
            window.location.href = "../xml/lunch1.xml";
        };
    } else {
        console.error("Элемент 'lunch2' не найден");
    }

    const lunch2 = document.getElementById("lunch2");
    if (lunch2) {
        lunch2.onclick = function() {
            window.location.href = "../xml/lunch2.xml";
        };
    } else {
        console.error("Элемент 'lunch2' не найден");
    }

    const dinner = document.getElementById('dinner');
    if (dinner) {
        dinner.onclick = function() {
            window.location.href = '../xml/dinner_lider.xml';
        };
    } else {
        console.error("Элемент 'dinner' не найден");
    }

    //js для кнопки вверх (html)
    const up_button = document.getElementById('up');
    up_button.onclick = function() {
        window.location.href="#";
    }
    up_button.addEventListener('mouseover', function() {
        up_button.style.backgroundColor='#cbc6c0';
        up_button.style.transform = 'scale(1.1)';
        up_button.style.transition = 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease';
        up_button.style.cursor = 'pointer';

    })
    up_button.addEventListener('mouseout', function() {
        up_button.style.backgroundColor = 'transparent';
        up_button.style.backgroundColor = 'transparent';
        up_button.style.transform = 'scale(1)';
    })

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