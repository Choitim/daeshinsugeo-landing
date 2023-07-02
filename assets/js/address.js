// https://business.juso.go.kr/addrlink/main.do  도로명 서비스
// https://postcode.map.daum.net/guide#sample  카카오 도로명 주소 api
// https://developers.kakao.com/product 카카오 전체 api

function kakaopost() {
    new daum.Postcode({
        oncomplete: function(data) {
           document.querySelector("#zipcode").value = data.zonecode;
           document.querySelector("#address").value =  data.address;
        },
        onresize: function(size) {

        }
    }).open();
};

