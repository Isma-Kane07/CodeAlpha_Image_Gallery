$(document).ready(function() {
    let currentPage = 0;
    const itemsPerPage = 9; 
    const totalPages = Math.ceil($('.gallery-item').length / itemsPerPage);
    let currentImageIndex = 0;

    function showPage(page) {
        $('.gallery-item').removeClass('active');
        $('.gallery-item').slice(page * itemsPerPage, (page + 1) * itemsPerPage).addClass('active');
    }

    function showModalImage(index) {
        const $images = $('.gallery-item img');
        if (index >= 0 && index < $images.length) {
            currentImageIndex = index;
            $('#galleryModal').css('display', 'block');
            $('#modalImage').attr('src', $images.eq(index).attr('src'));
            $('#caption').text($images.eq(index).attr('alt'));
        }
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
        currentImageIndex = $('.gallery-item img').index(this);
        showModalImage(currentImageIndex);
    });

    $('.close-modal').click(function() {
        $('#galleryModal').css('display', 'none');
    });

    $('#galleryModal').click(function(event) {
        if ($(event.target).is('#galleryModal')) {
            $(this).css('display', 'none');
        }
    });

    // Navigate through images with arrow keys
    $(document).keydown(function(e) {
        if ($('#galleryModal').css('display') === 'block') {
            if (e.key === 'ArrowRight') {
                showModalImage(currentImageIndex + 1);
            } else if (e.key === 'ArrowLeft') {
                showModalImage(currentImageIndex - 1);
            } else if (e.key === 'Escape') {
                $('#galleryModal').css('display', 'none');
            }
        }
    });
});
