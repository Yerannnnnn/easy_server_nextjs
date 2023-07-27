import commonFilter from "../../lib/filter";
import { describeRoomList } from "../../lib/room_list";
if (!(process.env.ZEGOCLOUD_APP_ID && process.env.ZEGOCLOUD_SERVER_SECRET)) {
  throw new Error("You must define an ZEGOCLOUD_APP_ID and ZEGOCLOUD_SERVER_SECRET");
}
const ZEGOCLOUD_APP_ID = process.env.ZEGOCLOUD_APP_ID;
const ZEGOCLOUD_SERVER_SECRET = process.env.ZEGOCLOUD_SERVER_SECRET;

export default async function generateAccessToken(req, resp) {
  await commonFilter(req, resp);
  // set default query params
  const PageIndex = req.query.PageIndex || 1;
  const PageSize = req.query.PageSize || 200;
  const body = await describeRoomList(PageIndex, PageSize);
  return resp.json(body);
}
