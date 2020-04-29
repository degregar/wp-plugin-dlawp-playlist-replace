<?php
/**
 * Plugin Name:     DlaWP Playlist Replace
 * Plugin URI:      https://dlawp.pl/plugins/
 * Description:     Click on music platform icon and replace iframe with the platform's music player
 * Author:          DlaWP.pl
 * Author URI:      https://dlawp.pl/
 * Text Domain:     dlawp-playlist-replace
 * Domain Path:     /languages
 * Version:         0.1.0
 * Licence:         GPL2
 * @package         Dlawp_Playlist_Replace
 */

/*
DlaWP Playlist Replace is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
 
DlaWP Playlist Replace is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with DlaWP Playlist Replace. If not, see http://www.gnu.org/licenses/.
*/

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if (!function_exists('dlawp_pr_enqueue_scripts')) {
    function dlawp_pr_enqueue_scripts()
    {
        wp_enqueue_script('dlawp-pr', plugin_dir_url(__FILE__) . 'public/js/script.js', ['jquery']);

        wp_enqueue_style('dlawp-pr', plugin_dir_url(__FILE__) . 'public/css/style.css');
    }
}

add_action('wp_enqueue_scripts', 'dlawp_pr_enqueue_scripts');