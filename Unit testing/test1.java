
public class MyTest extends ESSingleNodeTestCase {
    public MyTest() {
    }

    @Test
    public void featureToTest() {
      
    }
}


@Test
public void indexApi() {
  IndexRequest idxRequest =
      new IndexRequest()
          .index("users")
          .id("sansa")
          .source(newSource());

  IndexResponse idxResponse = node().client().index(idxRequest).actionGet();
  assertEquals("users", idxResponse.getIndex());
  assertEquals(RestStatus.CREATED, idxResponse.status());
  assertEquals("sansa", idxResponse.getId());
  assertEquals(1L, idxResponse.getPrimaryTerm());
  assertEquals(0L, idxResponse.getSeqNo());
  assertEquals(1L, idxResponse.getVersion());

  ShardInfo shardInfo = idxResponse.getShardInfo();
  assertEquals(0, shardInfo.getFailed());
  assertEquals(1, shardInfo.getSuccessful());
  assertEquals(1, shardInfo.getTotal());
}

private Map<String, String> newSource() {
  Map<String, String> source = new HashMap<>();
  source.put("firstName", "Sansa");
  source.put("lastName", "Stark");
  return source;
}

@Test
public void getApi() {
  GetResponse response =
      node()
          .client()
          .prepareGet()
          .setIndex("users")
          .setId("sansa")
          .execute()
          .actionGet();

  assertEquals("users", response.getIndex());
  assertEquals("sansa", response.getId());

  Map<String, Object> source = response.getSourceAsMap();
  assertEquals("Sansa", source.get("firstName"));
  assertEquals("Stark", source.get("lastName"));
}

@Test
public void searchApi() {
  SearchResponse response =
      node()
          .client()
          .prepareSearch("users")
          .setQuery(QueryBuilders.termQuery("lastName", "stark"))
          .get();

  SearchHits hits = response.getHits();
  assertEquals(2L, hits.getTotalHits().value);
  assertEquals("sansa", hits.getHits()[0].getId());
  assertEquals("arya", hits.getHits()[1].getId());
}
