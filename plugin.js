var trackingEditor;
CKEDITOR.plugins.add( 'iconmonstr', {
    init: function( editor ) {
    	trackingEditor = editor;
		editor.ui.addButton( 'IconMonstr', {
			label: 'Insert Icons',
			command: 'execIconMonstr',
			icon: this.path + 'icons/iconmonstr.png'
		});
		CKEDITOR.dialog.add( "insertIconMonstrModal", function( editor )
		{
			return {
				title : 'Pick a tracking link for this certificate',
				minWidth : 400,
				minHeight : 200,
				contents :
				[
					{
						id : 'general',
						label : 'Settings',
						elements :
						[
						 	// UI elements of the Settings tab.
						 	{
						 		type: 'html',
						 		html: htmlLinkData
						 	}
						]
					}
				],
				buttons: []
			};
		});
		CKEDITOR.document.appendStyleSheet(CKEDITOR.plugins.getPath('iconmonstr') + 'css/iconmonstr-iconic-font.min.css');
		CKEDITOR.document.appendStyleSheet(CKEDITOR.plugins.getPath('iconmonstr') + 'css/custom.css');
		editor.addCommand( 'openIconMonstrModal',  new CKEDITOR.dialogCommand( 'insertIconMonstrModal' ));
		editor.addCommand( 'execIconMonstr', {
		    exec: function( editor ) {
		    	var icon_monstr = '';
				var icon_monstr_array = ['im-amazon','im-anchor','im-android-os','im-angle-down-circle','im-angle-down','im-angle-left-circle','im-angle-left','im-angle-right-circle','im-angle-right','im-angle-up-circle','im-angle-up','im-apple-os','im-archive','im-arrow-down-circle','im-arrow-down','im-arrow-left-circle','im-arrow-left','im-arrow-right-circle','im-arrow-right','im-arrow-up-circle','im-arrow-up','im-audio','im-bank','im-banknote','im-bar-chart','im-battery-empty','im-battery-full','im-battery','im-behance','im-bell-active','im-bell-off','im-bell','im-binoculars','im-blogger','im-book','im-bookmark','im-briefcase','im-bug','im-calculator','im-calendar','im-car','im-care-down','im-care-left','im-care-right','im-care-up','im-cc-amazon','im-cc-amex','im-cc-bitcoin','im-cc-mastercard','im-cc-paypal','im-cc-visa','im-certificate-o','im-check-mark-circle-o','im-check-mark-circle','im-check-mark','im-check-square-i','im-check-square-o','im-check-square','im-chrome','im-circle-o','im-clock-o','im-clock','im-cloud-download','im-cloud-upload','im-cloud','im-code','im-coffee','im-coin','im-computer','im-control-panel','im-copy','im-credit-card','im-crown','im-cube','im-cubes','im-cursor','im-dashboard','im-database','im-date-o','im-diamond-o','im-download','im-drop','im-edge','im-edit-off','im-edit','im-eject','im-external-link','im-eye-off','im-eye','im-facebook-like','im-facebook','im-file-o','im-file','im-files-o','im-filter','im-fingerprint','im-fire','im-firefox','im-flag','im-flash','im-flask','im-flickr','im-flip-chart-o','im-floppy-disk','im-folder-open','im-folder','im-forbidden','im-frown-o','im-fullscreen','im-gamepad','im-gear','im-gift','im-github','im-globe','im-google-plus','im-graduation-hat','im-hashtag','im-heart','im-history','im-home','im-id-card','im-ie','im-inbox','im-info','im-instagram','im-key','im-keyboard','im-language','im-laptop-o','im-leaf','im-lifebuoy','im-light-bulb','im-line-chart-up','im-link','im-linkedin','im-linux-os','im-location','im-lock-open','im-lock','im-loop','im-magnifier-minus','im-magnifier-plus','im-magnifier','im-mail','im-map-o','im-maximize','im-menu-dot-h','im-menu-dot-v','im-menu-list','im-menu','im-microphone','im-minimize','im-minus-circle','im-minus','im-mobile','im-monitor-o','im-navigation','im-network','im-newspaper-o','im-next','im-note-o','im-opera','im-paintbrush','im-paper-clip','im-paperplane','im-pause','im-paypal','im-pencil','im-phone','im-photo-camera','im-picture-o','im-pie-chart','im-pin','im-pinterest','im-play','im-plus-circle','im-plus','im-pointer','im-power','im-previous','im-printer','im-question','im-quote-left','im-quote-right','im-radio-button-circle-o','im-radio-button-circle','im-radio','im-random','im-reddit','im-redo','im-rocket','im-rss','im-safari','im-save','im-server','im-share','im-shield','im-shopping-cart','im-sign-in','im-sign-out','im-sitemap','im-skype','im-smiley-o','im-snapchat','im-soundcloud','im-speech-bubble-comment','im-speech-bubble-comments','im-speech-bubble','im-spinner','im-square-o','im-stackoverflow','im-star-half','im-star-o','im-star','im-stop','im-store','im-stumbleupon','im-sun','im-sync','im-table','im-tag','im-tags','im-target','im-task-o','im-thumb-down','im-thumb-up','im-timer','im-toggle','im-tools','im-trash-can','im-trophy','im-tumblr','im-twitch','im-twitter','im-umbrella','im-undo','im-unlink','im-upload','im-user-circle','im-user-female','im-user-male','im-user-settings','im-users','im-video-camera','im-video','im-vimeo','im-vk','im-volume-off','im-volume','im-warning-circle','im-warning','im-whatsapp','im-wifi','im-window-o','im-windows-o','im-windows-os','im-wizard','im-wrench','im-x-mark-circle-o','im-x-mark-circle','im-x-mark','im-xing','im-youtube'];
				icon_monstr = '<ul class="icon_monstr">';
				for(i in icon_monstr_array) {
					icon_monstr += '<li onclick="selectIcon(\'im '+icon_monstr_array[i]+'\')"><span class="im '+icon_monstr_array[i]+'"></span></li>'
				}
				icon_monstr += '</ul>';
				htmlLinkData = icon_monstr;
				editor.execCommand('openIconMonstrModal');
		    }
		});
	}
});
function selectIcon(icon) {
	trackingEditor.insertHtml("<span class='"+icon+"'></span>");
	CKEDITOR.dialog.getCurrent().hide();
}