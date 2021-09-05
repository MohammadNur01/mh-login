const flashData = $('.flash-data').data('flashdata');
if(flashData){
  new Swal.fire({
    title: 'Menu Data',
    text: 'Already ' + flashData,
    icon: 'success'
  });
}

// delete-button

$('.delete-button').on('click', function(e){

  e.preventDefault();
  const href = $(this).attr('href');

  Swal.fire({
    title: 'Are you really to delete?',
    text: "This data will be deleted!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete data!'
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = href;
      }
    });
  });