/***
 * get home page message
 *
 */
const getHomePageMessages = (req, res)=>
{
  console.log('getHomePageMessages');
  const messages = [
    {
      _id: '1',
      message: ' This is a test'
    },
    {
      _id: '1',
      message: ' Message number two'
    },
  ];

  res.status(200).json({
      success: true,
      messages: messages
    });

}

module.exports = {
  getHomePageMessages
}