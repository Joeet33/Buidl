Moralis.Cloud.define(
  "_User",
  async (request) => {
    const query = new Moralis.Query("_User");
    const results = await query.find({useMasterKey: true});
    

    return results
}
)