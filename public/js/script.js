// replace music platform icon at the top of flipped box function
function replaceMusicPlatformIcon() {

}

/**
 * 
 * @param {string} platformUrl 
 * @returns {string}
 */
function getMusicPlatformEmbedUrl(platformUrl) {
    var embedUrl = platformUrl;
    // embedLink = platformUrl;

    // search for spotify.com
    if (platformUrl.search('spotify.com') >= 0) {
        // https://open.spotify.com/playlist/4AVlwLmEauQukKLDff6dLB?si=cCxerbfpSXC57HEQnUHAvw
        // https://open.spotify.com/embed/playlist/5KnTU4fbb9lH6RqiPVHEHM
        embedUrl = embedUrl.replace('open.spotify.com/', 'open.spotify.com/embed/');
    }

    // search for apple.com
    if (platformUrl.search('apple.com') >= 0) {
        // https://music.apple.com/us/playlist/justaddedmusicr-b-2020/pl.u-aZb0kd9u12779P9
        // https://embed.music.apple.com/us/playlist/just-added-music-trap/pl.u-11zBXqVTNvaax8x
        embedUrl = embedUrl.replace('music.apple.com', 'embed.music.apple.com');
    }

    // search for soundcloud
    if (platformUrl.search('soundcloud.com') >= 0) {
        // https://soundcloud.com/user-212265679/sets/justaddedmusicr-b-2020
        // https://w.soundcloud.com/player/?url=https://soundcloud.com/user-212265679/sets/justaddedmusicr-b-2020
        embedUrl = embedUrl.replace('https://', 'https://w.soundcloud.com/player/?url=https://');
    }

    // search for deezer.com
    if (platformUrl.search('deezer.com') >= 0) {
        // https://www.deezer.com/pl/playlist/7302430124?utm_source=deezer&utm_content=playlist-7302430124&utm_term=3173108944_1587667311&utm_medium=web
        // https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=playlist&id={PLAYLIST_ID}&app_id=1
        var playlistId = platformUrl.match(/(\d+)/g)[0];

        embedUrl = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=playlist&id={PLAYLIST_ID}&app_id=1'.replace('{PLAYLIST_ID}', playlistId);
    }

    return embedUrl;
}

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
        $(item).parent().find('a.elementor-social-icon').attr('target', iframeName);
        $(item).parent().find('a.elementor-social-icon').on('click', function(e) {
            // get original link
            var platformUrl = $(this).attr('href');

            // get link ready to embed
            var embedUrl = getMusicPlatformEmbedUrl(platformUrl);
            
            // check if changed
            if (embedUrl != platformUrl) {
                e.preventDefault();
                // if link is the same, allow to open new tab
                $('iframe[name="' + iframeName + '"]').attr('src', embedUrl);

                // TODO: clear all hover states

                // TODO: trigger hover event for the 
                $(this).parent().parent().parent().parent().find('.eael-elements-flip-box-container').trigger('hover');
            }
            // if not, open in new window, only youtube link should behaves like this
        });
        // console.log("right after searching for a tags");
    });

    // replace links for all boxes

    // add event listener to icons
    
});