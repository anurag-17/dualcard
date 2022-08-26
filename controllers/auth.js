const User = require("../models/User");
const Image = require("../models/Image")
const crypto = require("crypto");
const ErrorResponse = require("../utlis/errorresponse.js");
const sendEmail = require("../utlis/sendEmail.js");
const user = require("../models/User");
const emailValidator = require("deep-email-validator");
const bodyParser = require("body-parser")


async function isEmailValid(email) {
    return emailValidator.validate(email)
  }
exports.register = async (req, res, next) => {
   
  const { username, email, password,dob} = req.body;


  try {
  await  User.findOne({ email}, async (err, user) => {
      
      const {valid, reason, validators} = await isEmailValid(email);
      console.log(validators)

      if(!valid){
 return res.status(500).json("email is invalid please enter a valid email")
        
      }else if(user){
        return res.status(500).json("user already registered")
      }
       else {
        const user = await User.create({
          username,
          email,
          password,
          dob,
          avatar:[
            {url:"https://res.cloudinary.com/degu3b9yz/image/upload/v1660723144/giphy_jcbcps.gif"}
          ]
        });
      sendToken(user, 200, res);
      }

     
    });
  }catch (err) {
    // res.status(500).json("");
  }
};


exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("please provide email&password", 400));
  }
 
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
return res.status(500).json("invalid credentials user not found")
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
   return res.status(500).json("password is not valid please register")

    }
        // res.status(201).json(user)

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message});
  }
};


exports.isAuthuser =async (req, res, next) => {
  const { token } = req.cookies;
  console.log("hii");
  if (!token) {
    return next(new ErrorResponse("plese login to access this resource", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
};
exports.dashboard = async (req, res, next) => {
  if (req.session) {
    console.log(req.session.email);
  }
  const user = await User.findById(req.user.id);
  
  res.status(200).json({
    sucess: true,
    user,

    // productCount,
  });
  // console.log("user");
  // console.log({token});
}


exports.getdata=async(req,res)=>{
  // console.log(req.body)
let imgdata = await Image.find({userId:req.body.user._id})
 return res.json(imgdata)
}

exports.getuserdata  = async(req,res)=>{
  let userdata = await User.find()
 return res.json(userdata)
}



//forget password

// exports.forgetpassword = async (req, res, next) => {
//   const { email } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) {
//     return next(new ErrorResponse("Email could not br sent", 404));
//   }
//   const resetToken = user.getresetPasswordToken();
//   await user.save({ validateBeforeSave: false });

//   const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
//   const message = `you have requested a  password reset
//     please go to this link to reset your password
//     ${resetUrl}`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: "password reset request",
//       message,
//     });
//     res
//       .status(200)
//       .json({
//         success: true,
//         data: `email sent to ${user.email} successfully`,
//       });
//   } catch (error) {
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;
//     await user.save();
//     return next(new ErrorResponse("Email could not be send", 500));
//   }
// };



//  // Reset Password

// exports.resetPassword = async (req, res, next) => {
//   // Compare token in URL params to hashed token
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.resetToken)
//     .digest("hex");

//   try {
//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });
//     console.log(user);

//     if (!user) {
//       return next(new ErrorResponse("Invalid Tok    en", 400));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.status(201).json({
//       success: true,
//       data: "Password Updated Success",
//       token: user.getSignedToken(),
//     });
//   } catch (err) {
//     next(err);
//   }
// };

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
//options for cookies
  const options = {
    expire: new Date(Date.now + 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
