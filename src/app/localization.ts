// DevExtreme Globalize integration
import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';

// DevExtreme messages (en messages already included)
import frMessages from 'devextreme/localization/messages/fr.json';
// CLDR data
import frCldrData from 'devextreme-cldr-data/fr.json';
import supplementalCldrData from 'devextreme-cldr-data/supplemental.json';

import Globalize from 'globalize';

Globalize.load(
  frCldrData,
  supplementalCldrData
);

Globalize.loadMessages(frMessages);

Globalize.locale('fr');

