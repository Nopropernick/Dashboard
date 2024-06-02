$(document).ready(function(){
    // Show contact modal on button click
    $('#contactBtn').click(function(){
        $('#contactModal').modal('show');
    });

    // Handle hover effect on carousel items
    $('.carousel-item').hover(function(){
        $(this).find('img').css('opacity', '0.5');
        $(this).append('<div class="overlay">Topic - <a href="https://www.fylehq.com" target="_blank">Read More</a></div>');
    }, function(){
        $(this).find('img').css('opacity', '1');
        $(this).find('.overlay').remove();
    });

    const projectContents = $('.project-content');
    const projectImage = $('#projectImage');

    projectContents.click(function(){
        // Remove selected class from all project contents
        projectContents.removeClass('selected');

        // Add selected class to the clicked project content
        $(this).addClass('selected');

        // Change project image based on selected content
        const imageSrc = $(this).attr('data-image');
        projectImage.attr('src', imageSrc);
    });
});
