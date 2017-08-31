# Add-on Installation Instructions
1. Download this addon and rename "icon-monstr-ckeditor-plugin-master" folder to "iconmonstr".
2. Enable the plugin by using the extraPlugins configuration setting
config.extraPlugins = 'iconmonstr';

3. Add item in toolbar
config.toolbar_basic =
[
	{ name: 'other', items: ['IconMonstr'] }
];

4. Enable blank span tag
CKEDITOR.dtd.$removeEmpty['span'] = false;

5. Add iconmonstr css
config.contentsCss = ['js/ckeditor/plugins/iconmonstr/css/iconmonstr-iconic-font.min.css'];

Also to view the icons on your website please add iconmonstr css in your index.html/index.php file.
