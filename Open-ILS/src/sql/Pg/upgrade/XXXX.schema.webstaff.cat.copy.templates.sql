BEGIN;

SELECT evergreen.upgrade_deps_block_check('XXXX', :eg_version);

INSERT INTO config.usr_setting_type (name, label, description, datatype)
  VALUES ('webstaff.cat.copy.templates', 'Web Client Copier Editor Templates', 'Web Client Copy Editor Templates', 'object');

COMMIT;
