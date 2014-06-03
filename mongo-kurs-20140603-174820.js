
/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "name": NumberInt(1)
},{
  "unique": true
});

/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "url": NumberInt(1)
},{
  "unique": true
});

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "expires": NumberInt(1)
},[
  
]);

/** themas indexes **/
db.getCollection("themas").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** themas indexes **/
db.getCollection("themas").ensureIndex({
  "name": NumberInt(1)
},{
  "unique": true
});

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "username": NumberInt(1)
},{
  "unique": true
});

/** usertexts indexes **/
db.getCollection("usertexts").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** usertexts indexes **/
db.getCollection("usertexts").ensureIndex({
  "name": NumberInt(1)
},{
  "unique": true
});

/** maintexts records **/
db.getCollection("maintexts").insert({
  "name": "Добро пожаловать на сайт",
  "body": "Ни банки, ни политика, ни религии, ни деньги не способны решать проблемы и улучшать жизнь. Вода в кране, теплый дом, интернет и лекарства от болезней — всё это плод работы ученых и инженеров. Знания — основа человеческой цивилизации, поэтому знания должны быть свободными и доступными.",
  "url": "index",
  "_id": ObjectId("5322f1f96b6fd86c3f4c17ae"),
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("533b0316ad558704a5000029"),
  "body": "<b>testtest<\/b>",
  "name": "Контакты",
  "url": "contacts"
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("5346a35dad5587ac9100002a"),
  "__v": NumberInt(0),
  "body": "<b>testtest<\/b>",
  "name": "Контакты2",
  "url": "contacts2"
});
db.getCollection("maintexts").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("53496dddad5587205d000029"),
  "body": "Добро пожаловать в кабинет пользователя",
  "name": "Регистрация прошла успешно",
  "url": "thankyoupage"
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": "69LFJjiaRRdClpu9Djpuy2jI",
  "session": "{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"\/\"}}",
  "expires": ISODate("2014-06-17T13:21:06.405Z")
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "kurs.themas",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "name": NumberInt(1)
  },
  "unique": true,
  "ns": "kurs.themas",
  "name": "name_1",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "kurs.maintexts",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "name": NumberInt(1)
  },
  "unique": true,
  "ns": "kurs.maintexts",
  "name": "name_1",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "url": NumberInt(1)
  },
  "unique": true,
  "ns": "kurs.maintexts",
  "name": "url_1",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "kurs.users",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "username": NumberInt(1)
  },
  "unique": true,
  "ns": "kurs.users",
  "name": "username_1",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "kurs.sessions",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "expires": NumberInt(1)
  },
  "ns": "kurs.sessions",
  "name": "expires_1",
  "expireAfterSeconds": NumberInt(0)
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "kurs.usertexts",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "name": NumberInt(1)
  },
  "unique": true,
  "ns": "kurs.usertexts",
  "name": "name_1",
  "background": true,
  "safe": null
});

/** themas records **/
db.getCollection("themas").insert({
  "name": "Web",
  "_id": ObjectId("532183d53a4e382c4b28ff7f"),
  "__v": NumberInt(0)
});
db.getCollection("themas").insert({
  "name": "Искусство. Ремесла",
  "_id": ObjectId("53218447c92673ec4abe1518"),
  "__v": NumberInt(0)
});
db.getCollection("themas").insert({
  "name": "Спорт. Здоровье",
  "_id": ObjectId("53218456c6482f2c41359cfe"),
  "__v": NumberInt(0)
});
db.getCollection("themas").insert({
  "name": "Наука и техника",
  "_id": ObjectId("53218463426d49b8491fdead"),
  "__v": NumberInt(0)
});
db.getCollection("themas").insert({
  "name": "Хозяйство",
  "_id": ObjectId("5321846fe55666604b077238"),
  "__v": NumberInt(0)
});
db.getCollection("themas").insert({
  "name": "Естествознание",
  "_id": ObjectId("53218478456e1d144878ed4d"),
  "__v": NumberInt(0)
});

/** users records **/
db.getCollection("users").insert({
  "username": "Petya1",
  "hashedPassword": "05a40b1fe5c85347d94e9ad14d8de93a78893905",
  "salt": "0.7449530395679176",
  "_id": ObjectId("4fb846e3cfaa183b15000006"),
  "created": ISODate("2014-04-10T14:21:22.79Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "Vasya300",
  "hashedPassword": "00c63679eb1ddf9b233384b6bfdd65c868852e57",
  "salt": "0.32389840320684016",
  "_id": ObjectId("5346af1051918470c8b31855"),
  "created": ISODate("2014-04-10T14:47:44.231Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "Vasya3011",
  "hashedPassword": "53cef9111e6423a31b0cc14943fad3d3f8b20e5b",
  "salt": "0.431654415326193",
  "_id": ObjectId("5346af2029af5dd4c917f459"),
  "created": ISODate("2014-04-10T14:48:00.593Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "test",
  "hashedPassword": "d8508d1e5090b4e2d919896e0e22938dfa3a763b",
  "salt": "0.48078693193383515",
  "_id": ObjectId("53496efb46916140b0af4057"),
  "created": ISODate("2014-04-12T16:51:07.939Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "test1",
  "hashedPassword": "222708c4b1195ef4e97b6f92fe19072e08bb73c4",
  "salt": "0.6348817783873528",
  "_id": ObjectId("534970f646916140b0af4058"),
  "created": ISODate("2014-04-12T16:59:34.784Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "mikhalkevich@ya.ru",
  "hashedPassword": "82966324a150b799ff35fbd356ec504c2a2ce8b0",
  "salt": "0.8095397497527301",
  "_id": ObjectId("53499b131c26cebcd42ace2a"),
  "created": ISODate("2014-04-12T19:59:15.419Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "mikhalkevich@ya.rud",
  "hashedPassword": "fc0ced61bc2fe0d67b7234d2367f175a71af5fb0",
  "salt": "0.09629901126027107",
  "_id": ObjectId("53499c6bc5fb1194d662fd2f"),
  "created": ISODate("2014-04-12T20:04:59.727Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "mikhalkevsdfich@ya.ru",
  "hashedPassword": "f5a7a9bc95fa33e566a191a3b5d3763787d031d5",
  "salt": "0.1929476128425449",
  "_id": ObjectId("53499eda8bb72388d8e281a3"),
  "created": ISODate("2014-04-12T20:15:22.743Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "mikhalkevdddasdfasdfich@ya.rus",
  "hashedPassword": "007454430df4b9e1d926081fb6dbeac33ebb6dba",
  "salt": "0.1045892050024122",
  "_id": ObjectId("5349a175c0b5e788dedabee0"),
  "created": ISODate("2014-04-12T20:26:29.530Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "devich@ya.ru",
  "hashedPassword": "9412162060a2607cfdd5c515fc49f608fa76d7cf",
  "salt": "0.5653978332411498",
  "_id": ObjectId("5349a2c6b499b064dc4f80b2"),
  "created": ISODate("2014-04-12T20:32:06.241Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "asdfasdfasdfasdfasdf",
  "hashedPassword": "efa6218858359602aa9d52d7d2e1b6622265aa4b",
  "salt": "0.6181144637521356",
  "_id": ObjectId("5349a95376d5a2f4e237718a"),
  "created": ISODate("2014-04-12T21:00:03.705Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "mikhalasdfkevich@ya.ru",
  "hashedPassword": "66276d5ad5f9fbd03268de6bd93f2f8a2d0ae3d4",
  "salt": "0.4668542176950723",
  "_id": ObjectId("534a300a9649ff002ed6f57e"),
  "created": ISODate("2014-04-13T06:34:50.162Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "asdfasd",
  "hashedPassword": "7fcda63c343df892b8fb38d59dc239d985f01d0c",
  "salt": "0.1466971191111952",
  "_id": ObjectId("534a6bf59e39d3e05d684cc4"),
  "created": ISODate("2014-04-13T10:50:29.802Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "asdf",
  "hashedPassword": "c6124e3aa45fca6b040dab3f5c7c4bd87a24f983",
  "salt": "0.3634362288285047",
  "_id": ObjectId("534a76ffafc274206386c17f"),
  "created": ISODate("2014-04-13T11:37:35.144Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "fdh@ya.ru",
  "hashedPassword": "179d81e5965f5c6b135fb1b97284e8a91972969b",
  "salt": "0.23394569824449718",
  "_id": ObjectId("534c40cc24856ceca1b5ce2c"),
  "created": ISODate("2014-04-14T20:10:52.415Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "mikhalkasdfasdfasdfevich@ya.ru",
  "hashedPassword": "d4ee890b8732dced5b008025d9a5de7bf6cdb3fa",
  "salt": "0.14167364197783172",
  "_id": ObjectId("534c4dc69b8b3b10b4a56b48"),
  "created": ISODate("2014-04-14T21:06:14.673Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "testasdf",
  "hashedPassword": "46ac206045115398c6194361367055961f127e35",
  "salt": "0.7102348848711699",
  "_id": ObjectId("534d10a93c697f085eabed4d"),
  "created": ISODate("2014-04-15T10:57:45.535Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "1111",
  "hashedPassword": "6b12db50076312cf849d0df675bb5d6a2eed8c4e",
  "salt": "0.9774138201028109",
  "_id": ObjectId("534d262cacbf3a309b19de6a"),
  "created": ISODate("2014-04-15T12:29:32.503Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "admin",
  "hashedPassword": "2274c8f961ee38e6072d93c4ff6705faca3af3b3",
  "salt": "0.8588379479479045",
  "_id": ObjectId("536f957625f25e0000629e79"),
  "created": ISODate("2014-05-11T15:21:26.683Z"),
  "__v": NumberInt(0)
});

/** usertexts records **/
db.getCollection("usertexts").insert({
  "name": "mikhalkevich",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad078d5d9870cdde4fee1"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich1",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad088d5d9870cdde4fee2"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich3",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad0c520a1bb8ceb5fba4a"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich5",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad14ab9d908a4ebcd3c98"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich7",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad1d5129dbddce5137373"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich0",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad22a057066ece85d789b"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich99",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad2679a763308e8ae4c1f"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "55",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad2a47f576a4ce7412152"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "m",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad39a68df5798eed2af06"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "ф",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad42998574c10e66aa503"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich4544",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("535ad9e2c0dbca58f676f04f"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "фыва",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("536781e5373fdd00005daf93"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "asdf",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("5367b19df1ec2f0000ce872d"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "asdf33",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("536a1baf1a394f0000e32e8f"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "testasdf asdf",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("536a1f40dafcf50000cc977f"),
  "__v": NumberInt(0)
});
db.getCollection("usertexts").insert({
  "name": "mikhalkevich11",
  "optionblock": "book",
  "userid": "534d262cacbf3a309b19de6a",
  "_id": ObjectId("536a21c2c66ab8000016cf5e"),
  "__v": NumberInt(0)
});
