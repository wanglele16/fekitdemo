var $ = require('../libs/jquery.js');

module.exports = function () {
  $.ajax({
    url: '/api/getIndexList',
    type: 'get',
    data: {},
    success: function (res) {
      //alert(1);
      var str = "";
      $.each(res.data, function (index, value) {
        str += "<li>" + value + "</li>";
      });
      $('.body ul').html(str);
    }
  });
};
