$(document).ready(function(){ //Função somente será executada quando o html tiver totalmente carregada
    //jquery para alternar os sub menus
    $('.sub-btn').click(function(){ //Uma função para abrir as subopções da opção NF-e contida no menu
        $(this).next('.sub-menu').slideToggle();  //Exibe ou oculta as subopções contidas na nf-e
        $(this).find('.dropdown').toggleClass('rotate'); //Cria uma classe rotate para a setinha da opção nf-e
    });

    //jquery para expandir e recolher o menu lateral
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');  //Adiciciona a classe active aos elementos da classe .side-bar
        $('.menu-btn').css("visibility","hidden");//define a propriedade visibility aos elementos com a classe .menu-btn para hidden, fazendo com que os elementos fiquem invisiveis
    });

    $('.close-btn').click(function(){ 
        $('.side-bar').removeClass('active'); //Remove a classe active aos elementos da classe .side-bar
        $('.menu-btn').css("visibility","visible"); //define a propriedade visibility aos elementos com a classe .menu-btn para visible, fazendo com que os elementos fiquem visiveis
    });   

    });
    