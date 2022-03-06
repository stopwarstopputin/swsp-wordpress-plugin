jQuery(document).ready(function ($) {
	$('#lookup_mode').on('change', function () {
		if ($(this).val() == 'bin') {
			$('#bin_database').show();
			$('#api_web_service').hide();
		} else {
			$('#bin_database').hide();
			$('#api_web_service').show();
		}
	}).trigger('change');

	$('#update_ip2location_database').on('click', function (e) {
		e.preventDefault();

		var ipv4_only = $('#download_ipv4_only').is(':checked');

		$('#download_token').prop('readonly', true);
		$('#update_ip2location_database, #lookup_mode, #download_ipv4_only').prop('disabled', true);

		$('#update_status').html('<span class="dashicons dashicons-update spin"></span> Updating database...');

		$.post(ajaxurl, {
			action: 'ip2location_country_blocker_update_ip2location_database',
			token: $('#download_token').val(),
			ipv4_only: ipv4_only,
			__nonce: $('#update_nonce').val(),
		}, function (data) {
			if (data.status == 'OK') {
				$('#update_status').html('<span class="dashicons dashicons-yes-alt"></span> Database updated successfully.');
			} else {
				$('#update_status').html('<span class="dashicons dashicons-warning"></span>' + data.message);
			}
		}, 'json')
			.error(function () {
				$('#update_status').html('<span class="dashicons dashicons-warning"></span> Request timed out. Please check your server error log for details.');
			})
			.always(function () {
				$('#download_token').prop('readonly', false);
				$('#update_ip2location_database, #lookup_mode, #download_ipv4_only').prop('disabled', false);
			});
	});

	$('#px_lookup_mode').on('change', function () {
		if ($(this).val() == 'px_bin') {
			$('#px_bin_database').show();
			$('#px_api_web_service').hide();
		} else if ($(this).val() == 'px_ws') {
			$('#px_bin_database').hide();
			$('#px_api_web_service').show();
		} else {
			$('#px_bin_database').hide();
			$('#px_api_web_service').hide();
		}
	}).trigger('change');

	$('#update_ip2proxy_database').on('click', function (e) {
		e.preventDefault();

		var ipv4_only = $('#px_download_ipv4_only').is(':checked');

		$('#px_download_token').prop('readonly', true);
		$('#update_ip2proxy_database, #px_lookup_mode, #px_download_ipv4_only').prop('disabled', true);

		$('#px_update_status').html('<span class="dashicons dashicons-update spin"></span> Updating database...');

		$.post(ajaxurl, {
			action: 'ip2location_country_blocker_update_ip2proxy_database',
			token: $('#px_download_token').val(),
			ipv4_only: ipv4_only,
			__nonce: $('#update_nonce').val(),
		}, function (data) {
			if (data.status == 'OK') {
				$('#px_update_status').html('<span class="dashicons dashicons-yes-alt"></span> Database updated successfully.');
			} else {
				$('#px_update_status').html('<span class="dashicons dashicons-warning"></span>' + data.message);
			}
		}, 'json')
			.error(function () {
				$('#px_update_status').html('<span class="dashicons dashicons-warning"></span> Request timed out. Please check your server error log for details.');
			})
			.always(function () {
				$('#px_download_token').prop('readonly', false);
				$('#update_ip2proxy_database, #px_lookup_mode, #px_download_ipv4_only').prop('disabled', false);
			});
	});

	$('#btn-get-started').on('click', function (e) {
		e.preventDefault();

		$('#modal-get-started').css('display', 'none');
		$('#modal-step-1').css('display', 'block');
	});

	$('#setup_token').on('input', function () {
		$('#btn-to-step-2').prop('disabled', !($(this).val().length == 64));
	});

	$('#btn-to-step-2').on('click', function (e) {
		e.preventDefault();

		var $btn = $(this);

		$('#token_status').html('<span class="dashicons dashicons-update spin"></span> Validating download token...');
		$btn.prop('disabled', true);

		$.post(ajaxurl, {
			action: 'ip2location_country_blocker_validate_token',
			token: $('#setup_token').val(),
			__nonce: $('#update_nonce').val(),
		}, function (data) {
			if (data.status == 'OK') {
				$('#token_status').html('<span class="dashicons dashicons-yes-alt"></span> Download token is valid.</div>');

				$('#modal-step-1').css('display', 'none');
				$('#modal-step-2').css('display', 'block');
				$('#btn-to-step-3').prop('disabled', true);

				$('#ip2location_download_status').html('<span class="dashicons dashicons-update spin"></span> Downloading IP2Location database...');

				$.post(ajaxurl, {
					action: 'ip2location_country_blocker_update_ip2location_database',
					token: $('#setup_token').val(),
					ipv4_only: true,
					__nonce: $('#update_nonce').val(),
				}, function (data) {
					if (data.status == 'OK') {
						$('#ip2location_download_status').html('<span class="dashicons dashicons-yes-alt"></span> IP2Location database successfully downloaded.</p></div>');

						$('#btn-to-step-3').prop('disabled', false);
					} else {
						$('#ip2location_download_status').html('<span class="dashicons dashicons-warning"></span>' + data.message);

						$('#btn-to-step-3').prop('disabled', false);
					}
				}).always(function () {
					$('#btn-to-step-1').prop('disabled', false);
				});
			} else {
				$('#token_status').html('<span class="dashicons dashicons-warning"></span>' + data.message);
			}
		}).always(function () {});
	});

	$('#btn-to-step-1').on('click', function (e) {
		e.preventDefault();

		$('#modal-step-1').css('display', 'block');
		$('#modal-step-2').css('display', 'none');
		$('#btn-to-step-2').prop('disabled', false);
	});

	$('#btn-back-to-step-2').on('click', function (e) {
		e.preventDefault();

		$('#modal-step-2').css('display', 'block');
		$('#modal-step-3').css('display', 'none');
	});

	$('#btn-to-step-3').on('click', function (e) {
		e.preventDefault();

		$('#modal-step-3').css('display', 'block');
		$('#modal-step-2').css('display', 'none');
	});
});