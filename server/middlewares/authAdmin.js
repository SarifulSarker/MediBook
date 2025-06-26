import jwt from 'jsonwebtoken'




// admin authentication middleware

const authAdmin = async (req, res, next) => {
  try {
   const atoken = req.headers.atoken

    if (!atoken) {
      return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }

    const tokenDecode = jwt.verify(atoken, process.env.JWT_SECRET);
    if (tokenDecode.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }

    next();  // <-- CALL NEXT HERE!
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: error.message });
  }
};


export default authAdmin