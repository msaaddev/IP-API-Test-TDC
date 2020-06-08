// importing axios
const axios = require('axios');

(async () => {
    await axios
        .get('http://api.ipapi.com/182.185.176.244?access_key=ACCESS_TOKEN_HERE&format=1')
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err));
})();

/* response

{ ip: '182.185.176.244',
  type: 'ipv4',
  continent_code: 'AS',
  continent_name: 'Asia',
  country_code: 'PK',
  country_name: 'Pakistan',
  region_code: 'SD',
  region_name: 'Sindh',
  city: 'Karachi',
  zip: '74000',
  latitude: 24.882999420166016,
  longitude: 67.05799865722656,
  location:
   { geoname_id: 1174872,
     capital: 'Islamabad',
     languages: [ { code: 'en', name: 'English', native: 'English' },
                 { code: 'ur', name: 'Urdu', native: 'اردو', rtl: 1 } ],
     country_flag: 'http://assets.ipapi.com/flags/pk.svg',
     country_flag_emoji: '🇵🇰',
     country_flag_emoji_unicode: 'U+1F1F5 U+1F1F0',
     calling_code: '92',
     is_eu: false }
}

*/
