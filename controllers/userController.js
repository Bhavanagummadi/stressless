// In your backend userController.js

export const getMe = async (req, res) => {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "User not found" });
    }
    res.status(StatusCodes.OK).json({ user });
  };
  