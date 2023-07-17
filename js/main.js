$(document).ready(function(){
    function clock (){
        var now = new Date(); //변수에 시간 데이터를 새로 생성하여 저장
        
        //각 변수에 시간데이터 저장
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        
        //각 변수에 날짜데이터 저장
        var year = now.getFullYear();
        //getYear()는 현재 년도에서 1900을 뺸 값을 반환하는 문제가 있으며, 더이상 권장하지 않음
        var mon = now.getMonth();
        var day = now.getDate();
        
        //숫자 00으로 표기
        if(hr<10){
            hr = '0'+hr;
        }
        if(min<10){
            min = '0'+min;
        }
        if(sec<10){
            sec = '0'+sec;
        }
        
        //특정 html 안의 코드를 원하는 것으로 변경
        document.getElementById('hr').innerHTML = hr;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
        
        //statusbar의 시간표시
        document.getElementById('hd_hr').innerHTML = hr;
        document.getElementById('hd_min').innerHTML = min;
        
         //날짜표시
        document.getElementById('year').innerHTML = year;
        document.getElementById('mon').innerHTML = mon+1;
        //달은 0부터 세기 때문에 +1을 해줌
        document.getElementById('day').innerHTML = day;

    }
    
    clock();
    
    setInterval(function(){
        clock();
    },500);
    
    //현재 시간에 맞는 디자인테마 자동으로 걸기
    /*
    1. 시간이 새벽 5시 이상이고, 오전 11시 미만일 경우 morning 클래스 추가
    2. 시간이 오전 11시 이상이고, 오후 4시 미만일 경우 afternoon 클래스 추가
    3. 시간이 오후 4시 이상이고, 오후 8시 미만일 경우 evening 클래스 추가
    4. 시간이 오후 8시 아싱이고, 새벽 5시 미만일 경우 night 클래스 추가
    */
    
    var now = new Date();
    var hr = now.getHours();
     
    
    if(hr>=5 && hr<11){
        $('#inner').removeClass();
        $('#inner').addClass('morning');
    }else if(hr>=11 && hr<16){//시간이니까 오후 4시에 해당하는 '16'으로 써야함
        $('#inner').removeClass();
        $('#inner').addClass('afternoon');
    }else if(hr>=16 && hr<20){
        $('#inner').removeClass();
        $('#inner').addClass('evening');
    }else{
        $('#inner').addClass('night');
    }
    
    if(hr<12){
        document.getElementById('am').innerHTML = 'AM';
    }else{
        document.getElementById('am').innerHTML = 'PM';
    }
});