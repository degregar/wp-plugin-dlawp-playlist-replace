jQuery(document).ready(function ($) {
    // remove all fill attribute from social icons to make sure we can manipulate the color of SVGs
    $('.home .elementor-widget-social-icons svg path').attr('fill', 'inherit');

    // get all the boxes
    $('.home .elementor-widget-eael-flip-box').each((index, item) => {
        // prepare name for iframe
        var iframeName = 'box_' + index;

        // name all the iframes
        $(item).find('iframe').attr('name', iframeName);

        // add target for all links within the box
        // $(item).parent().find('a.elementor-social-icon').each((aindex, aitem) => {
        //     // console.log($(this));
        //     $(aitem).attr('target', iframeName).end();
        // });
        $(item).parent().find('a.elementor-social-icon').attr('target', iframeName).end();
        // console.log("right after searching for a tags");
    });

    // replace links for all boxes

    // add event listener to icons
    

    // replace music platform icon at the top of flipped box function
    function replaceMusicPlatformIcon() {

    }
});