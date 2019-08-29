const arc = require("@architect/functions");
exports.handler = async function http(req) {
  const db = await arc.tables();
  Promise.all(
    [1, 2, 3, 4, 5, 6].map(id => {
      return db.table.put({
        key: id,
        idx: id % 2
      });
    })
  );
  const r = await db.table.query({
    // this is the index name im talking about
    // when you deploy it to AWS, the index name will be "idx-index"
    IndexName: "test-staging-table-idx-index",
    KeyConditionExpression: "idx = :field",
    ExpressionAttributeValues: {
      ":field": 1
    }
  });

  return {
    headers: { "content-type": "text/html; charset=utf8" },
    body: JSON.stringify(r.Items)
  };
};
