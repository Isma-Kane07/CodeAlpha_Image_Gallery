$(document).ready(function() {
    let currentPage = 0;
    const itemsPerPage = 9; 
    const totalPages = Math.ceil($('.gallery-item').length / itemsPerPage);

    function showPage(page) {
        $('.gallery-item').removeClass('active');
        $('.gallery-item').slice(page * itemsPerPage, (page + 1) * itemsPerPage).addClass('active');
    }

    $('.next-btn').click(function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    $('.prev-btn').click(function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    showPage(currentPage);

    $('.gallery-item img').click(function() {
        $('#galleryModal').css('display', 'block');
        $('#modalImage').attr('src', $(this).attr('src'));
        $('#caption').text($(this).attr('alt'));
    });

    $('.close-modal').click(function() {
        $('#galleryModal').css('display', 'none');
    });

    $(window).click(function(event) {
        if ($(event.target).is('#galleryModal')) {
            $('#galleryModal').css('display', 'none');
        }
    });
});
