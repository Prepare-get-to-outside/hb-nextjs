
export default (req, res) => {
  if(req.method === 'POST'){
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HtppOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
}
