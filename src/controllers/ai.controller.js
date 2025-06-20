// const aiService =require("../services/ai.service")


// module.exports.getReview=async (req,res) =>{

//     const code =req.body.code;

//     if(!code){
//         return res.status(400).send("Prompt is required");
//     }

//     const response =await aiService(code);

//     res.send(response);
// }

const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const result = await aiService(code);
    res.status(200).json({ review: result });

  } catch (error) {
    console.error("❌ Review failed:", error.message);
    res.status(500).json({ error: "Internal server error: " + error.message });
  }
};

