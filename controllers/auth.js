const User = require("../models/User");
const Image = require("../models/Image");
const crypto = require("crypto");
const ErrorResponse = require("../utlis/errorresponse.js");
const sendEmail = require("../utlis/sendEmail.js");
const user = require("../models/User");
const emailValidator = require("deep-email-validator");
const bodyParser = require("body-parser");
const Challenge = require("../models/challenge");
const catchAsyncError = require("../Errorhandlers/catchAsyncError")
const ErrorHandler = require("../config/errorHandler")
async function isEmailValid(email) {
  return emailValidator.validate(email);
}


exports.register = catchAsyncError(
   async (req,res, next) => {
    const {
      username,
      email,
      password,
    } = req.body;
  
  
    const { valid, reason, validators } = await isEmailValid(email);
    
  //  console.log(req.body.Expiry);
  
    if(!username||
      !email||
      !password){
        return next(new ErrorHandler("please fill all the inputs"))
    }
    if (password.length < 6) {
return next(new ErrorHandler("password must be 6 characters long",400))
    }
  
      User.findOne({ email }, async (err, user) => {
        console.log(validators);
  
       if (user) {
        return next(new ErrorHandler("user Already exist",400))
        }
        else if(!valid){
          return next(new ErrorHandler("please enter a valid email",400))
        }
        else {
          const user = await User.create({
            username,
            email,
            password,
          });
  
          sendToken(user, 201, res);
        }
      });
    
  }
)


exports.login = catchAsyncError(
  async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorResponse("please provide email&password", 400));
    }
  
  
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(500).json("invalid credentials user not found");
      }
      const isMatch = await user.matchPasswords(password);
      if (!isMatch) {
        return res.status(500).json("password is not valid please register");
      }
      // res.status(201).json(user)
  
      sendToken(user, 200, res);
  
    
  }
) 

exports.isAuthuser =

catchAsyncError(
  
  async (req, res, next) => {
    const { token } = req.cookies;
    console.log("hii");
    if (!token) {
      return next(new ErrorResponse("plese login to access this resource", 401));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
  }
  )

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
};

exports.getdata = 
catchAsyncError(

  async (req, res,next) => {
    // console.log(req.body)
    let imgdata = await Image.find({ userId: req.body._id});
    return res.json(imgdata);
  }
)

exports.getuserdata = 
catchAsyncError(
  
  async(req, res,next) => {
    let userdata = await User.find();
    return res.status(200).json(userdata);
  }
  )

exports.sendchallange = 

catchAsyncError(
  
  async (req, res,next) => {
    const { recieved, accept, decline } = req.body;
    console.log(req.body)
    let challenge = await Challenge.create({
      recieved:req.body.recieved,
      player_1_id:req.body.playeroneuserid,
      player_2_id:req.body.playertwouserid,
      accept,
      decline,
      player_1: [
        {
          text: req.body.playeronetext,
          images: req.body.playerone_url,
          userId:req.body.playeroneuserid,
          name:req.body.playeronename,
          link:req.body.playeronelink
        },
      ],
      player_2: [
        {
          text: req.body.playertwotext,
          images:req.body.playertwo_url,
          userId:req.body.playertwouserid,
          name:req.body.playertwoname,
          link:req.body.playertwolink
        },
      ],
    });
    return res.json(challenge)
  }
  )

exports.getchallenge =
catchAsyncError(
  
  async(req,res,next)=>{
  
  const challengedata = await Challenge.find({player_1_id:req.body.id,Accept:req.body.Accept})
  return res.json(challengedata)

  }
  )

exports.getrecieved = 
catchAsyncError(
  async(req,res,next)=>{
  
    const data = await Challenge.find({player_2_id:req.body.id,Accept:req.body.Accept})
    return res.json(data)
  
  }
  )


exports.acceptChallenge = catchAsyncError(

  async(req,res,next)=>{
    const update = await Challenge.findByIdAndUpdate(req.body.challengerid,{Accept:req.body.Accept,decline:req.body.decline})
    return res.status(200).json(update)
  }

) 

exports.declineChallenge = catchAsyncError(
  async(req,res,next)=>{
    const update = await Challenge.findByIdAndUpdate(req.body.challengerid,{Accept:req.body.Accept,decline:req.body.decline})
    return res.status(200).json(update)
  }
)

exports.challengeStatus = catchAsyncError(

async(req,res,next)=>{
  const status = await Challenge.find({player_1_id:req.body.id})
  return res.status(200).json(status)
}

)


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
