<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
	exit;
}

delete_option('stopwarstopputin_blocker_access_email_notification');
delete_option('stopwarstopputin_blocker_api_key');
delete_option('stopwarstopputin_blocker_backend_banlist');
delete_option('stopwarstopputin_blocker_backend_block_mode');
delete_option('stopwarstopputin_blocker_backend_block_proxy');
delete_option('stopwarstopputin_blocker_backend_bots_list');
delete_option('stopwarstopputin_blocker_backend_enabled');
delete_option('stopwarstopputin_blocker_backend_error_page');
delete_option('stopwarstopputin_blocker_backend_ip_blacklist');
delete_option('stopwarstopputin_blocker_backend_ip_whitelist');
delete_option('stopwarstopputin_blocker_backend_option');
delete_option('stopwarstopputin_blocker_backend_redirect_url');
delete_option('stopwarstopputin_blocker_backend_skip_bots');
delete_option('stopwarstopputin_blocker_bypass_code');
delete_option('stopwarstopputin_blocker_database');
delete_option('stopwarstopputin_blocker_debug_log_enabled');
delete_option('stopwarstopputin_blocker_detect_forwarder_ip');
delete_option('stopwarstopputin_blocker_email_notification');
delete_option('stopwarstopputin_blocker_frontend_banlist');
delete_option('stopwarstopputin_blocker_frontend_block_mode');
delete_option('stopwarstopputin_blocker_frontend_block_proxy');
delete_option('stopwarstopputin_blocker_frontend_bots_list');
delete_option('stopwarstopputin_blocker_frontend_enabled');
delete_option('stopwarstopputin_blocker_frontend_error_page');
delete_option('stopwarstopputin_blocker_frontend_ip_blacklist');
delete_option('stopwarstopputin_blocker_frontend_ip_whitelist');
delete_option('stopwarstopputin_blocker_frontend_option');
delete_option('stopwarstopputin_blocker_frontend_redirect_url');
delete_option('stopwarstopputin_blocker_frontend_skip_bots');
delete_option('stopwarstopputin_blocker_frontend_whitelist_logged_user');
delete_option('stopwarstopputin_blocker_log_enabled');
delete_option('stopwarstopputin_blocker_lookup_mode');
delete_option('stopwarstopputin_blocker_px_api_key');
delete_option('stopwarstopputin_blocker_px_database');
delete_option('stopwarstopputin_blocker_px_lookup_mode');
delete_option('stopwarstopputin_blocker_token');

$GLOBALS['wpdb']->query('DROP TABLE IF EXISTS ' . $GLOBALS['wpdb']->prefix . 'stopwarstopputin_blocker_log');

wp_cache_flush();
