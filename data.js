// Country, hospital and monthly revenue data.
// Each hospital's 12 monthly amounts add up to its yearly revenue.
const DATA = [
  {
    "name": "Malaysia",
    "code": "MY",
    "revenue": 50000,
    "cost": 35462,
    "hospitals": [
      {
        "name": "Hospital 1",
        "city": "Kuala Lumpur",
        "revenue": 14200,
        "cost": 9870,
        "monthly": [
          1131,
          1056,
          1271,
          1106,
          1268,
          1201,
          1170,
          1273,
          1109,
          1230,
          1162,
          1223
        ]
      },
      {
        "name": "Hospital 2",
        "city": "Penang",
        "revenue": 11800,
        "cost": 8240,
        "monthly": [
          912,
          955,
          901,
          902,
          1020,
          1062,
          1029,
          983,
          1057,
          895,
          1076,
          1008
        ]
      },
      {
        "name": "Hospital 3",
        "city": "Johor Bahru",
        "revenue": 9600,
        "cost": 7015,
        "monthly": [
          727,
          700,
          792,
          858,
          786,
          837,
          880,
          827,
          823,
          759,
          774,
          837
        ]
      },
      {
        "name": "Hospital 4",
        "city": "Kota Kinabalu",
        "revenue": 8150,
        "cost": 5862,
        "monthly": [
          660,
          608,
          646,
          668,
          678,
          644,
          738,
          718,
          630,
          687,
          694,
          779
        ]
      },
      {
        "name": "Hospital 5",
        "city": "Ipoh",
        "revenue": 6250,
        "cost": 4475,
        "monthly": [
          515,
          457,
          569,
          470,
          520,
          545,
          502,
          533,
          466,
          542,
          563,
          568
        ]
      }
    ]
  },
  {
    "name": "Singapore",
    "code": "SG",
    "revenue": 24534,
    "cost": 44643,
    "hospitals": [
      {
        "name": "Hospital 1",
        "city": "Novena",
        "revenue": 14320,
        "cost": 25980,
        "monthly": [
          1189,
          1032,
          1210,
          1163,
          1207,
          1154,
          1294,
          1306,
          1147,
          1215,
          1094,
          1309
        ]
      },
      {
        "name": "Hospital 2",
        "city": "Jurong East",
        "revenue": 10214,
        "cost": 18663,
        "monthly": [
          838,
          866,
          912,
          804,
          854,
          886,
          806,
          876,
          792,
          800,
          805,
          975
        ]
      }
    ]
  },
  {
    "name": "India",
    "code": "IN",
    "revenue": 67000,
    "cost": 40000,
    "hospitals": [
      {
        "name": "Hospital 1",
        "city": "Mumbai",
        "revenue": 18500,
        "cost": 11200,
        "monthly": [
          1350,
          1341,
          1502,
          1616,
          1435,
          1520,
          1612,
          1703,
          1617,
          1663,
          1511,
          1630
        ]
      },
      {
        "name": "Hospital 2",
        "city": "Bengaluru",
        "revenue": 15200,
        "cost": 9300,
        "monthly": [
          1190,
          1277,
          1408,
          1175,
          1230,
          1220,
          1270,
          1324,
          1299,
          1241,
          1196,
          1370
        ]
      },
      {
        "name": "Hospital 3",
        "city": "Chennai",
        "revenue": 13400,
        "cost": 8100,
        "monthly": [
          999,
          1006,
          1177,
          1098,
          1105,
          1105,
          1162,
          1013,
          1154,
          1151,
          1195,
          1235
        ]
      },
      {
        "name": "Hospital 4",
        "city": "Kochi",
        "revenue": 11250,
        "cost": 6600,
        "monthly": [
          921,
          893,
          913,
          997,
          922,
          905,
          971,
          952,
          950,
          911,
          919,
          996
        ]
      },
      {
        "name": "Hospital 5",
        "city": "New Delhi",
        "revenue": 8650,
        "cost": 4800,
        "monthly": [
          637,
          652,
          659,
          768,
          760,
          677,
          720,
          728,
          702,
          680,
          803,
          864
        ]
      }
    ]
  },
  {
    "name": "Thailand",
    "code": "TH",
    "revenue": 32643,
    "cost": 66532,
    "hospitals": [
      {
        "name": "Hospital 1",
        "city": "Bangkok",
        "revenue": 13820,
        "cost": 27410,
        "monthly": [
          1112,
          1081,
          1081,
          1063,
          1164,
          1123,
          1306,
          1132,
          1056,
          1298,
          1221,
          1183
        ]
      },
      {
        "name": "Hospital 2",
        "city": "Chiang Mai",
        "revenue": 10915,
        "cost": 22086,
        "monthly": [
          860,
          747,
          902,
          964,
          982,
          933,
          889,
          900,
          829,
          956,
          930,
          1023
        ]
      },
      {
        "name": "Hospital 3",
        "city": "Phuket",
        "revenue": 7908,
        "cost": 17036,
        "monthly": [
          595,
          564,
          689,
          697,
          708,
          688,
          718,
          700,
          607,
          658,
          649,
          635
        ]
      }
    ]
  },
  {
    "name": "Brunei",
    "code": "BN",
    "revenue": 6789,
    "cost": 46432,
    "hospitals": [
      {
        "name": "Hospital 1",
        "city": "Bandar Seri Begawan",
        "revenue": 6789,
        "cost": 46432,
        "monthly": [
          481,
          492,
          533,
          570,
          623,
          554,
          633,
          633,
          605,
          550,
          544,
          571
        ]
      }
    ]
  }
];
