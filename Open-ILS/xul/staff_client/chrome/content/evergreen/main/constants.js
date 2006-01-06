dump('Loading constants.js\n');
var api = {
	'AUTH_INIT' : { 'app' : 'open-ils.auth', 'method' : 'open-ils.auth.authenticate.init' },
	'AUTH_COMPLETE' : { 'app' : 'open-ils.auth', 'method' : 'open-ils.auth.authenticate.complete' },
	'BILL_PAY' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.money.payment' },
	'BLOB_CHECKOUTS_RETRIEVE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.actor.user.checked_out' },
	'CAPTURE_COPY_FOR_HOLD_VIA_BARCODE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.hold.capture_copy.barcode' },
	'CHECKIN_VIA_BARCODE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.checkin.barcode' },
	'CHECKOUT_PERMIT_VIA_BARCODE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.permit_checkout' },
	'CHECKOUT_VIA_BARCODE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.checkout.barcode' },
	'FM_ACP_RETRIEVE' : { 'app' : 'open-ils.search', 'method' : 'open-ils.search.asset.copy.fleshed.retrieve' },
	'FM_ACPL_RETRIEVE' : { 'app' : 'open-ils.search', 'method' : 'open-ils.search.config.copy_location.retrieve.all' },
	'FM_ACTSC_RETRIEVE_VIA_AOU' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.stat_cat.actor.retrieve.all' },
	'FM_AHR_RETRIEVE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.holds.retrieve' },
	'FM_AOU_RETRIEVE' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.org_tree.retrieve' },
	'FM_AOU_RETRIEVE_RELATED_VIA_SESSION' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.org_unit.full_path.retrieve' },
	'FM_AOUT_RETRIEVE' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.org_types.retrieve' },
	'FM_ASV_CREATE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.survey.create' },
	'FM_ASV_RETRIEVE_REQUIRED' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.survey.retrieve.required' },
	'FM_ASVR_RETRIEVE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.survey.response.retrieve' },
	'FM_AU_IDS_RETRIEVE_VIA_HASH' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.patron.search.advanced' },
	'FM_AU_RETRIEVE_VIA_SESSION' : { 'app' : 'open-ils.auth', 'method' : 'open-ils.auth.session.retrieve' },
	'FM_AU_RETRIEVE_VIA_BARCODE' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.user.fleshed.retrieve_by_barcode' },
	'FM_AU_RETRIEVE_VIA_ID' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.user.fleshed.retrieve' },
	'FM_CCS_RETRIEVE' : { 'app' : 'open-ils.search', 'method' : 'open-ils.search.config.copy_status.retrieve.all' },
	'FM_CIRC_RETRIEVE_VIA_USER' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.actor.user.checked_out.slim' },
	'FM_CIT_RETRIEVE' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.user.ident_types.retrieve' },
	'FM_CST_RETRIEVE' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.standings.retrieve' },
	'FM_MB_CREATE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.money.billing.create' },
	'FM_MB_RETRIEVE_VIA_MBTS_ID' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.money.billing.retrieve.all' },
	'FM_MP_RETRIEVE_VIA_MBTS_ID' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.money.payment.retrieve.all' },
	'FM_MG_CREATE' : { 'app' : 'open-ils.circ', 'method' : 'open-ils.circ.money.grocery.create' },
	'FM_MOBTS_HAVING_BALANCE' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.user.transactions.have_balance' },
	'FM_PGT_RETRIEVE' : { 'app' : 'open-ils.actor', 'method' : 'open-ils.actor.groups.retrieve' },
	'MODS_SLIM_METARECORD_RETRIEVE' : { 'app' : 'open-ils.search', 'method' : 'open-ils.search.biblio.metarecord.mods_slim.retrieve' },
	'MODS_SLIM_RECORD_RETRIEVE' : { 'app' : 'open-ils.search', 'method' : 'open-ils.search.biblio.record.mods_slim.retrieve' },
	'MODS_SLIM_RECORD_RETRIEVE_VIA_COPY' : { 'app' : 'open-ils.search', 'method' : 'open-ils.search.biblio.mods_from_copy' },
}

var urls = {
	'opac' : 'http://dev.gapines.org/opac/en-US/skin/default/xml/advanced.xml',
	'REMOTE' : 'http://dev.gapines.org/',
	'XUL_BROWSER' : '/xul/server/util/browser.xul',
	'XUL_CHECKIN' : '/xul/server/circ/checkin.xul',
	'XUL_CHECKOUT' : '/xul/server/circ/checkout.xul',
	'XUL_DEBUG_CONSOLE' : 'chrome://global/content/console.xul',
	'XUL_DEBUG_FIELDMAPPER' : '/xul/server/util/fm_view.xul',
	'XUL_DEBUG_FILTER_CONSOLE' : '/xul/server/util/filter_console.xul',
	'XUL_DEBUG_SHELL' : '/xul/server/util/shell.html',
	'XUL_DEBUG_XULEDITOR' : '/xul/server/util/xuledit.xul',
	'XUL_HOLD_CAPTURE' : '/xul/server/circ/hold_capture.xul',
	'XUL_MENU_FRAME' : 'chrome://evergreen/content/main/menu_frame.xul',
	'XUL_PATRON_BARCODE_ENTRY' : '/xul/server/patron/barcode_entry.xul',
	'XUL_PATRON_BILLS' : '/xul/server/patron/bills.xul',
	'XUL_PATRON_BILL_CC_INFO' : '/xul/server/patron/bill_cc_info.xul',
	'XUL_PATRON_BILL_CHECK_INFO' : '/xul/server/patron/bill_check_info.xul',
	'XUL_PATRON_BILL_DETAILS' : '/xul/server/patron/bill_details.xul',
	'XUL_PATRON_BILL_WIZARD' : '/xul/server/patron/bill_wizard.xul',
	'XUL_PATRON_DISPLAY' : '/xul/server/patron/display.xul',
	'XUL_PATRON_EDIT' : '/xul/server/patron/user_edit.xml',
	'XUL_PATRON_HOLDS' : '/xul/server/patron/holds.xul',
	'XUL_PATRON_INFO' : 'data:text/html,<h1>Info Here</h1>',
	'XUL_PATRON_ITEMS' : '/xul/server/patron/items.xul',
	'XUL_PATRON_SEARCH_FORM' : '/xul/server/patron/search_form.xul',
	'XUL_PATRON_SEARCH_RESULT' : '/xul/server/patron/search_result.xul',
	'XUL_PATRON_SUMMARY' : '/xul/server/patron/summary.xul',
	'XUL_SURVEY_WIZARD' : 'chrome://evergreen/content/admin/survey_wizard.xul',
	'TEST_HTML' : '/xul/server/main/test.html',
	'TEST_XUL' : 'chrome://evergreen/content/admin/test.xul',
	'XUL_OPAC_WRAPPER' : '/xul/server/cat/opac.xul',
}
