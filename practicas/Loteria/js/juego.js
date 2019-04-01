$(document).ready(function () {
  
    $(".start").attr("disabled", true);


    //MAIN PAGE
    let TABLEJ1 = new Array();
    let TABLEJ2 = new Array();
    let arraychosse = new Array();
    loadTable();
    
    $(".start").click(function () {

        let player1 = $('#player1').val();
        let player2 = $('#player2').val();
        setCookie("player1", player1, 1);
        setCookie("player2", player2, 1);

        setCookie("J1", 0, 8);
        setCookie("J2", 0, 8);

    });

    let TAB1 = getCookie("TABLEROJ1");
    let TAB2 = getCookie("TABLEROJ2");

    let val1 = parseInt(TAB1);
    let val2 = parseInt(TAB2);
    relaseTables(val1, val2);
    // console.log("Jugador I = " + TAB1 + " Jugador II " + TAB2);



    let imgArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png',
        '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png',
        '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png',
        '40.png', '41.png', '42.png', '43.png', '44.png', '45.png', '46.png', '47.png', '48.png', '49.png', '50.png', '51.png',
        '52.png', '53.png', '54.png'];

    let cards_ReadyP1;
    let cards_ReadyP2;


    //Loading tables    
    show_Table_Player_One();
    show_Table_Player_Two();
    getPlayers();


    //Release cards 
    let image = $(".img-card");
    let pos = 0;
    let cards = new Array();
    cards = shuffle(imgArray);


    $("#takeCard").click(function () {
        if (pos < cards.length) {
            image.attr('src', './img/' + cards[pos]);
            let taked = cards[pos];
            //PAINTING CARDS
            for (let k = 0; k < cards_ReadyP1.length; k++) {
                if (cards_ReadyP1[k] == taked) {
                    let POS = cards_ReadyP1.indexOf(cards_ReadyP1[k]);
                    let container = $(".table-one").children();
                    let element = $("<p>X</p>").attr('class', 'piedra');
                    container.eq(POS).append(element);

                }
            }
            for (let l = 0; l < cards_ReadyP2.length; l++) {
                if (cards_ReadyP2[l] == taked) {
                    let POS2 = cards_ReadyP2.indexOf(cards_ReadyP2[l]);
                    let container = $(".table-two").children();
                    let element = $("<p>X</p>").attr('class', 'piedra');
                    container.eq(POS2).append(element);
                }
            }
        } else {
            alert("Se acabaron las imagenes XD");
        }
        pos++;
    });

    function validate(){
        verifyTable1();
        verifyTable2();
    }
    setInterval(validate,500);


    /* Funtion for get cards random athought of array */
    function shuffle(array) {
        let i, j, temp;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    /*Genereting tables for each players*/
    function show_Table_Player_One() {
        let container = $(".table-one").children();
        cards_ReadyP1 = TABLEJ1;
        //console.log(cards_Ready);
        for (let i = 0; i < cards_ReadyP1.length; i++) {
            let elementImg = $("<img></img>").attr('src', 'img/' + cards_ReadyP1[i]);
            container.eq(i).append(elementImg);
        }
    }

    function show_Table_Player_Two() {
        let container = $(".table-two").children();
        cards_ReadyP2 = TABLEJ2;
        //console.log(cards_Ready);
        for (let i = 0; i < cards_ReadyP2.length; i++) {
            let elementImg = $("<img></img>").attr('src', 'img/' + cards_ReadyP2[i]);
            container.eq(i).append(elementImg);
        }
    }


    //Set cookies
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    //Get Cookies
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    //Delete cookies


    function getPlayers() {
        let name1 = getCookie("player1");
        let name2 = getCookie("player2");
        let player_1 = $("#player_1");
        let player_2 = $("#player_2");
        player_1.text(name1);
        player_2.text(name2);
        //Info PTS
        let JUG1 = $("#J1"); JUG1.text(name1); let PJ1 = getCookie("J1"); let labelPJ1 = $("#PJ1"); labelPJ1.text(PJ1);
        let JUG2 = $("#J2"); JUG2.text(name2); let PJ2 = getCookie("J2"); let labelPJ2 = $("#PJ2"); labelPJ2.text(PJ2);
    }


    //FUNCTION VERIFY PLAYER1
    function verifyTable1() {
        let targets = $(".table-one").children("#C1");
        let fila1 = (targets.eq(0).children().length) + (targets.eq(1).children().length) + (targets.eq(2).children().length) + (targets.eq(3).children().length);
        let fila2 = (targets.eq(4).children().length) + (targets.eq(5).children().length) + (targets.eq(6).children().length) + (targets.eq(7).children().length);
        let fila3 = (targets.eq(8).children().length) + (targets.eq(9).children().length) + (targets.eq(10).children().length) + (targets.eq(11).children().length);
        let fila4 = (targets.eq(12).children().length) + (targets.eq(13).children().length) + (targets.eq(14).children().length) + (targets.eq(15).children().length);

        let colu1 = (targets.eq(0).children().length) + (targets.eq(4).children().length) + (targets.eq(8).children().length) + (targets.eq(12).children().length);
        let colu2 = (targets.eq(1).children().length) + (targets.eq(5).children().length) + (targets.eq(9).children().length) + (targets.eq(13).children().length);
        let colu3 = (targets.eq(2).children().length) + (targets.eq(6).children().length) + (targets.eq(10).children().length) + (targets.eq(14).children().length);
        let colu4 = (targets.eq(3).children().length) + (targets.eq(7).children().length) + (targets.eq(11).children().length) + (targets.eq(15).children().length);

        let diag1 = (targets.eq(0).children().length) + (targets.eq(5).children().length) + (targets.eq(10).children().length) + (targets.eq(15).children().length);
        let diag2 = (targets.eq(3).children().length) + (targets.eq(6).children().length) + (targets.eq(9).children().length) + (targets.eq(12).children().length);


        if (fila1 == 8 || fila2 == 8 || fila3 == 8 || fila4 == 8 || colu1 == 8 || colu2 == 8 || colu3 == 8 || colu4 == 8 || diag1 == 8 || diag2 == 8) {


            let name = getCookie("player1");
            let next = confirm("Ganaste " + name + " ¿Deseas seguir con la partida ?");
            if (next) {

                window.location.replace("table.html");
                let J1 = getCookie("J1");
                let setVal = parseInt(J1);
                let val = setVal + 1;
                setCookie("J1", val, 24);

            } else {

                window.location.replace("index.html");
            }
        }

    }

    //FUNCTION VERIFY PLAYER2
    function verifyTable2() {
        let targets = $(".table-two").children("#C2");
        let fila1 = (targets.eq(0).children().length) + (targets.eq(1).children().length) + (targets.eq(2).children().length) + (targets.eq(3).children().length);
        let fila2 = (targets.eq(4).children().length) + (targets.eq(5).children().length) + (targets.eq(6).children().length) + (targets.eq(7).children().length);
        let fila3 = (targets.eq(8).children().length) + (targets.eq(9).children().length) + (targets.eq(10).children().length) + (targets.eq(11).children().length);
        let fila4 = (targets.eq(12).children().length) + (targets.eq(13).children().length) + (targets.eq(14).children().length) + (targets.eq(15).children().length);

        let colu1 = (targets.eq(0).children().length) + (targets.eq(4).children().length) + (targets.eq(8).children().length) + (targets.eq(12).children().length);
        let colu2 = (targets.eq(1).children().length) + (targets.eq(5).children().length) + (targets.eq(9).children().length) + (targets.eq(13).children().length);
        let colu3 = (targets.eq(2).children().length) + (targets.eq(6).children().length) + (targets.eq(10).children().length) + (targets.eq(14).children().length);
        let colu4 = (targets.eq(3).children().length) + (targets.eq(7).children().length) + (targets.eq(11).children().length) + (targets.eq(15).children().length);

        let diag1 = (targets.eq(0).children().length) + (targets.eq(5).children().length) + (targets.eq(10).children().length) + (targets.eq(15).children().length);
        let diag2 = (targets.eq(3).children().length) + (targets.eq(6).children().length) + (targets.eq(9).children().length) + (targets.eq(12).children().length);


        if (fila1 == 8 || fila2 == 8 || fila3 == 8 || fila4 == 8 || colu1 == 8 || colu2 == 8 || colu3 == 8 || colu4 == 8 || diag1 == 8 || diag2 == 8) {

            let name = getCookie("player2");
            let next = confirm("Ganaste " + name + " ¿Deseas seguir con la partida ?");

            if (next) {

                window.location.replace("table.html");
                let J2 = getCookie("J2");
                let setVal = parseInt(J2);
                let val = setVal + 1;
                setCookie("J2", val, 24);
            } else {
                window.location.replace("index.html");
            }

        }


    }


    /* 
        var elementImg = $("<img></img>").attr('src','img/1.png');
        container.eq(0).append(elementImg);
        let containerImg = $(".card"); 
        let imgElement = $("<img></img>").attr('src','img/'+arrayImagen);
        container[POS].style.backgroundColor = "#e91e63";
        container[15].style.backgroundColor = "yellow";
        window.setInterval("location.reload()", 2000);
    
    */


    function loadTable() {
        let T1 = $('#T1');
        let T2 = $('#T2');
        let T3 = $('#T3');
        let T4 = $('#T4');

        let countClickT1 = 0, countClickT2 = 0, countClickT3 = 0, countClickT4 = 0;
        let tables = 0;

        T1.click(function () {

            countClickT1++;
            if (countClickT1 == 1) {
                if (tables == 2) {
                    alert("Ya seleccionaste  dos cartas");
                    countClickT1 = 0;
                } else {
                    T1.css({
                        "opacity": "1",
                        "filter": "alpha(opacity=50)"
                    });
                    tables++;
                    let parent = T1.parent();

                    parent.addClass("active");
                    prepareTable();

                    if (arraychosse.length == 2 ) {
                        $(".start").attr("disabled", false);
                    }

                }
            } if (countClickT1 == 2) {
                T1.css({
                    "opacity": "0.5",
                    "filter": "alpha(opacity=50)"
                });

                countClickT1 = 0;
                tables--;

                let parent = T1.parent();
                parent.removeClass("active");
                $(".start").attr("disabled", true);

            }


        });

        T2.click(function () {

            countClickT2++;
            if (countClickT2 == 1) {
                if (tables == 2) {
                    alert("Ya seleccionaste  dos cartas");
                    countClickT2 = 0;
                } else {
                    T2.css({
                        "opacity": "1",
                        "filter": "alpha(opacity=50)"
                    });
                    tables++;
                    let parent = T2.parent();
                    parent.addClass("active");
                    prepareTable();
                    if (arraychosse.length == 2 ) {
                        $(".start").attr("disabled", false);
                    }
                }

            } if (countClickT2 == 2) {
                T2.css({
                    "opacity": "0.5",
                    "filter": "alpha(opacity=50)"
                });

                countClickT2 = 0;
                tables--;
                let parent = T2.parent();
                parent.removeClass("active");
                $(".start").attr("disabled", true);

            }

        });

        T3.click(function () {

            countClickT3++;
            if (countClickT3 == 1) {
                if (tables == 2) {
                    alert("Ya seleccionaste  dos cartas");
                    countClickT3 = 0;
                } else {
                    T3.css({
                        "opacity": "1",
                        "filter": "alpha(opacity=50)"
                    });
                    tables++;
                    let parent = T3.parent();
                    parent.addClass("active");
                    prepareTable();
                    if (arraychosse.length == 2 ) {
                        $(".start").attr("disabled", false);
                    }
                }

            } if (countClickT3 == 2) {
                T3.css({
                    "opacity": "0.5",
                    "filter": "alpha(opacity=50)"
                });
                tables--;
                countClickT3 = 0;
                let parent = T3.parent();
                parent.removeClass("active");
                $(".start").attr("disabled", true);

            }
        });

        T4.click(function () {

            countClickT4++;
            if (countClickT4 == 1) {
                if (tables == 2) {
                    alert("Ya seleccionaste  dos cartas");
                    countClickT4 = 0;
                } else {
                    T4.css({
                        "opacity": "1",
                        "filter": "alpha(opacity=50)"
                    });
                    tables++;
                    let parent = T4.parent();
                    parent.addClass("active");
                    prepareTable();
                    if (arraychosse.length == 2 ) {
                        $(".start").attr("disabled", false);
                    }
                }

            } if (countClickT4 == 2) {
                T4.css({
                    "opacity": "0.5",
                    "filter": "alpha(opacity=50)"
                });
                tables--;
                countClickT4 = 0;

                let parent = T4.parent();
                parent.removeClass("active");
                $(".start").attr("disabled", true);

            }
        });
    }

    function prepareTable() {
        let targets = $(".content-targets").children();
        arraychosse = [];
        for (let i = 0; i < targets.length; i++) {
            const element = targets.eq(i);
            if (element.hasClass("active")) {
                arraychosse.push(i)
                let TA1 = arraychosse[0];
                let TA2 = arraychosse[1];
                setCookie("TABLEROJ1 ", TA1, 1);
                setCookie("TABLEROJ2 ", TA2, 1);
            }
        }
    }

    function relaseTables(val1, val2) {

        switch (val1) {
            case 0:
                let TABLE1 = ['19.png', '9.png', '43.png', '22.png', '34.png', '26.png', '11.png', '23.png', '20.png', '41.png', '5.png', '18.png', '2.png', '21.png', '16.png', '37.png'];
                TABLEJ1 = TABLE1;
                break;
            case 1:
                let TABLE2 = ['42.png', '47.png', '4.png', '10.png', '12.png', '30.png', '36.png', '40.png', '50.png', '49.png', '44.png', '24.png', '27.png', '17.png', '6.png', '32.png'];
                TABLEJ1 = TABLE2;
                break;
            case 2:
                let TABLE3 = ['1.png', '26.png', '14.png', '13.png', '33.png', '31.png', '19.png', '2.png', '21.png', '44.png', '35.png', '36.png', '50.png', '37.png', '49.png', '10.png'];
                TABLEJ1 = TABLE3;
                break;
            case 3:
                let TABLE4 = ['5.png', '27.png', '4.png', '29.png', '9.png', '8.png', '45.png', '48.png', '46.png', '40.png', '23.png', '20.png', '17.png', '7.png', '39.png', '52.png'];
                TABLEJ1 = TABLE4;
                break;
        }
        switch (val2) {
            case 0:
                let TABLE1 = ['19.png', '9.png', '43.png', '22.png', '34.png', '26.png', '11.png', '23.png', '20.png', '41.png', '5.png', '18.png', '2.png', '21.png', '16.png', '37.png'];
                TABLEJ2 = TABLE1;
                break;
            case 1:
                let TABLE2 = ['42.png', '47.png', '4.png', '10.png', '12.png', '30.png', '36.png', '40.png', '50.png', '49.png', '44.png', '24.png', '27.png', '17.png', '6.png', '32.png'];
                TABLEJ2 = TABLE2;
                break;
            case 2:
                let TABLE3 = ['1.png', '26.png', '14.png', '13.png', '33.png', '31.png', '19.png', '2.png', '21.png', '44.png', '35.png', '36.png', '50.png', '37.png', '49.png', '10.png'];
                TABLEJ2 = TABLE3;
                break;
            case 3:
                let TABLE4 = ['5.png', '27.png', '4.png', '29.png', '9.png', '8.png', '45.png', '48.png', '46.png', '40.png', '23.png', '20.png', '17.png', '7.png', '39.png', '52.png'];
                TABLEJ2 = TABLE4;
                break;
        }
    }


});
