$(document).ready(function() {
  $(':button.download').click(function(){
    var file_list = [];
    // remove input first
    $('input[name="file_list[]"]').remove();

    $(':checkbox[name=delete]:checked').each(function(){

      //alert();
      //$.fileDownload($(this).parent().siblings('td.name').children('a').attr('href'));
      file_list.push($(this).parent().siblings('td.name').children('input').val());
      $('<input>', {
        "type": "hidden",
        "name": "file_list[]",
        "value": $(this).parent().siblings('td.name').children('input').val()
      }).appendTo('#download_form');
    });

    //alert(file_list);
    file_list = [79,80];
    //$.post('/download', { file_list: file_list });
    //alert(file_list);
//      .done(function() { alert("second success"); })
//      .fail(function() { alert("error"); });
//    $('input[name=file_list]').val(JSON.stringify(file_list));
    $('#download_form').submit();
  });

});
