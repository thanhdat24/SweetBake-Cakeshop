const mongoose = require("mongoose");
var validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: [true, "Please tell us your displayName"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: [true, "Please provide your phoneNumber"],
      validate: {
        validator: function (number) {
          return /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
            number
          );
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      // allowNull: true,
    },
    gender: {
      type: String,
      enum: ["Nam", "Nữ"],
      // allowNull: true,
    },
    address: {
      type: String,
      // allowNull: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      // chuyển về chữ thường
      lowercase: true,
      // check email
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    photoURL: {
      type: String,
    },
    role: {
      type: String,
      default: "Khách hàng",
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      // Không tự hiện thị
      select: false,
      // allowNull: true,
    },
    passwordConfirm: {
      type: String,
      // allowNull: true,
      required: [true, "Please provide a passwordConfirm"],
      // validate check 2 password equal
      // this only works on CREATE and SAVE!!! ( NOT UPDATE )
      validate: {
        validator: function (el) {
          return el === this.password; // abc === abc
        },
        messages: "Password and Confirmation Password must match",
      },
    },
    // googleId: {
    //   type: String,
    //   allowNull: true,
    // },

    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangeAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangeAt) {
    const changedTimestamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp; // 100 < 200
  }

  // False means Not change

  return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
