## Iterate Mongo
```js
let cursor = client.db('CSDL_QLVT').collection('T_DonViKinhDoanh').find()
while (await cursor.hasNext()) {
  let doc = await cursor.next();
  //do something
}
```
## Get log
```js
db.getSiblingDB("local").getCollection("oplog.rs").find({
	"ns": "vuejx_cfg.vuejx_page",
	"o2._id": ObjectId("5fd6d41ed29c7221b4004e65")
})

// Lấy từ ngày 2021-08-08
db.getSiblingDB("local").getCollection("oplog.rs").find({
	$and: [{
		"ns": "vuejx_cfg.vuejx_page",
		"o2._id": ObjectId("61405cec49846c00087ad9b3")
	}, {
		"wall": {
			$gt: ISODate("2021-08-08 00:00:00.000")
		}
	}]
})
```
## Dùng setOnInsert để: Create if not exist. More info at mongodb doc
```js
db.products.updateOne(
  { }, // find condition, if exist => not insert
  {
     $setOnInsert: { defaultQty: 100 } // document to insert
  },
  { upsert: true }
)
```
## Bulk
```js
bulk.find(condition).upsert().updateOne({ $setOnInsert: obj });
```