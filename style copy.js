$(document).ready(function(){
     //START 이미지//
     $('#START').click(function(){
          $('#q-1').css({'z-index':5})
          $('#START').hide();
          $('#GOTO').css({'z-index':-1})
     //소주 JS//     
     $('#a').click(function(){
          $('#q-2a').css({'z-index':5});
          $('#q-1').css({'z-index':3});
     
     });
     $('#aa').click(function(){
          $('#q-1').css({'z-index':2});
          $('#q-2a').css({'z-index':2});
          $('#ans').css({'z-index':6});
          $('#ans>span').html('데박이군요!! 당신과 어울리는 술은 소주입니다!!');
    });
    $('#ab').click(function(){
     $('#q-1').css({'z-index':10});
     ;
});
     //맥주 JS//
     $('#b').click(function(){
          $('#q-2b').css({'z-index':5});
          $('#q-1').css({'z-index':3});

     });
     $('#ba').click(function(){
          $('#q-1').css({'z-index':2});
          $('#q-2b').css({'z-index':2});
          $('#ans').css({'z-index':6});
          $('#ans>span').html('데박이군요!! 당신과 어울리는 술은 맥주입니다!!');
     });
     $('#bb').click(function(){
     $('#q-1').css({'z-index':10});
     ;
     });
     //막걸리 JS//
     $('#c').click(function(){
               $('#q-2c').css({'z-index':5});
               $('#q-1').css({'z-index':3});
          
          });
          $('#ca').click(function(){
               $('#q-1').css({'z-index':2});
               $('#q-2c').css({'z-index':2});
               $('#ans').css({'z-index':6});
               $('#ans>span').html('데박이군요!! 당신과 어울리는 술은 막걸리입니다!!');
     });
     $('#cb').click(function(){
          $('#q-1').css({'z-index':10});
          ;
     });
     //위스키 JS//
     $('#d').click(function(){
          $('#q-2d').css({'z-index':5});
          $('#q-1').css({'z-index':3});
     
     });
     $('#da').click(function(){
          $('#q-1').css({'z-index':2});
          $('#q-2d').css({'z-index':2});
          $('#ans').css({'z-index':6});
          $('#ans>span').html('데박이군요!! 당신과 어울리는 술은 위스키입니다!!');
    });
    $('#db').click(function(){
     $('#q-1').css({'z-index':10});
     ;
});
     //다시하기 JS//
          $('#replay').click(function(){
            $('#q-1').css({'z-index':10});
            $('#ans').css({'z-index':1});  
          });
   });
});