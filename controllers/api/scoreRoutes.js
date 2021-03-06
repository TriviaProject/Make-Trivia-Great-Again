const router = require("express").Router();
const { Score } = require("../../models");
const withAuth = require("../../utils/auth");
 

router.get("/", async (req, res) => {
  try {
    let newScore = await Score.findOne( {
      where: { user_id: req.session.user_id },
    });
    console.log("score:", newScore);
    
    res.status(200).json(newScore);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put("/", async (req, res) => {
  try {
    let newScore = await Score.update(req.body,{
      where: { user_id: req.session.user_id}
    });
    console.log("score:", newScore);
    if (newScore[0] === 0) {
      req.body.user_id = req.session.user_id;
       newScore = await Score.create(req.body,{
        where: {
          user_id: req.session.user_id
        },
      });

    }
    res.status(200).json(newScore);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const scoreData = await Score.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!scoreData) {
      res.status(404).json({ message: "No scores found with this user!" });
      return;
    }

    res.status(200).json(scoreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
