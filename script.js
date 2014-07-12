/**
 * Created by Riley on 6/30/2014.
 */
$(document).ready(function() {
    var choice;
    $('div').hide();
    $('h1').hide();
    $('div').delay(3000).fadeIn(1000);
    $('h1').delay(3000).fadeIn(1000);
    $('img').animate({left:"+=400"}, 4000);
    $('div').mouseenter(function() {
        $(this).css('background-color', 'magenta');
    });
    $('div').mouseleave(function() {
        $(this).css('background-color', 'skyblue');
    });
    $('div').click(function(){
        switch(this.id) {
            case 'rileybutton':
                choice = '#riley';
                break;
            case 'johnbutton':
                choice = '#john';
                break;
            case 'terrybutton':
                choice = '#terry';
                break;
            case 'nancybutton':
                choice = '#nancy';
                break;
            case 'kenbutton':
                choice = '#ken';
                break;
            case 'margotbutton':
                choice = '#margot';
                break;
            case 'alexbutton':
                choice = '#alex';
                break;
            case 'nahbutton':
                choice = '#nah';
            default:
                break;
        }
        $(choice).stop(true, false);
        document.getElementById('userControlled').src = document.getElementById(choice.substring(1)).src;
        $('#userControlled').css('height', $(choice).prop('height') + 'px');
        $('#userControlled').css('width', $(choice).prop('width') + 'px');
        $('#userControlled').css('top', $(choice).offset().top);
        $('#userControlled').css('left', $(choice).offset().left);

        if (choice !== '#nah') {
            $(choice).css('height', 0);
            $(choice).css('width', 0);
        }

        $('div').fadeOut('slow');
        $('h1').fadeOut(2000);
        setTimeout(function(){
            document.getElementsByTagName('h1')[0].innerHTML = 'Dance.';
        }, 2000);
        $('h1').delay(2000).fadeIn(2000);
        $('h1').effect('bounce', {times:1, height:'5px'}, 497);
        $('h1').effect('bounce', {times:1, height:'10px'}, 497);
        $('h1').effect('bounce', {times:1, height:'20px'}, 497);
        $('h1').effect('bounce', {times:1, height:'50px'}, 497);
        $('h1').effect('explode');
    });

    for(i=0; i < 30; i++) {
        $('#riley').effect('bounce', {times:1}, 495.4);
        $('#nancy').effect('bounce', {times:1}, 495.4);
        $('#margot').effect('bounce', {times:2}, 480);
        $('#john').effect('shake', {times:1}, 585);
        $('#ken').effect('pulsate', {times:3}, 460);
        $('#alex').effect('bounce', {direction:'right', times:1}, 495.4);
    }


    $('#terry').delay(2200).animate({top:"+=20"}, 0);
    for (var i = 0; i < 3; i++) {
        $('#terry').delay(450).animate({top: "+=20"}, 0);
        $('#terry').delay(2100).animate({top: "+=20"}, 0);
        $('#terry').delay(1550).animate({top: "+=20"}, 0);
    }
    $('#terry').delay(500);

    $('#riley').animate({left:'-=300px', top:'+=250px'}, 1000);
    $('#john').animate({left:'-=200px', top:'+=250px'}, 1000);
    $('#terry').animate({left:'500px', top:'350px'}, 1000);
    $('#nancy').animate({top:'+=250px'}, 1000);
    $('#ken').animate({left:'+=100px', top:'+=250px'}, 1000);
    $('#margot').animate({left:'+=200px', top:'+=250px'}, 1000);
    $('#alex').animate({left:'+=300px', top:'+=250px'}, 1000);

    for(i=0; i < 30; i++) {
        $('#riley').effect('bounce', {times:1}, 495.4);
        $('#nancy').effect('bounce', {times:1}, 495.4);
        $('#margot').effect('bounce', {times:2}, 480);
        $('#john').effect('shake', {times:1}, 585);
        $('#ken').effect('pulsate', {times:3}, 460);
        $('#alex').effect('bounce', {direction:'right', times:1}, 495.4);
        $('#terry').effect('shake', 585);
    }


    $(document).keydown(function(key) {
        switch(parseInt(key.which, 10)) {
            //left arrow key, a
            case 37:
            case 65:
                $('#userControlled').animate({left:'-=30px'}, 50);
                break;
            //up arrow key, w
            case 38:
            case 87:
                $('#userControlled').animate({top:'-=30px'}, 50);
                break;
            //right arrow key, d
            case 39:
            case 68:
                $('#userControlled').animate({left:'+=30px'}, 50);
                break;
            //down arrow key, s
            case 40:
            case 83:
                $('#userControlled').animate({top:'+=30px'}, 50);
                break;
            //space bar
            case 32:
                $('#userControlled').effect('bounce', {times:1, height:'100px'}, 400);
                break;
            //v
            case 86:
                $('#userControlled').effect('shake');
                break;
            default:
                break;
        }
    });
});