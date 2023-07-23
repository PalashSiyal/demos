const Emotion = require('../models/Emotion')

const getEmotions = async(req,res) => {
    try {
        const emotions = await Emotion.find();
        res.json(emotions)
    } catch (error) {
        res.status(500).send("Error fetching Emotions: " + error.message);
    }
}

const postEmotion = async(req, res) => {
    try {
        const { user_id, emotion, session_id } = req.body;
    
        // Create a new emotion based on the provided data
        const newEmotion = await Emotion.create({
          user_id,
          emotion,
          session_id
        });
    
        res.status(201).json(newEmotion);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const getEmotion = async(req,res) => {
    try {
        const emotionId = req.params.id;
    
        // Find the emotion with the provided ID and populate the user and session details
        const emotion = await Emotion.findById(emotionId)
          .populate('user_id') // Populating the user details
          .populate('session_id') // Populating the session details
          .exec();
    
        if (!emotion) {
          return res.status(404).json({ message: 'Emotion not found' });
        }
    
        res.status(200).json(emotion);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const updateEmotion = async(req,res) => {
    try {
        const emotionId = req.params.id;
        const { user_id, emotion, session_id } = req.body;
    
        // Find the emotion with the provided ID
        const existingEmotion = await Emotion.findById(emotionId);
    
        if (!existingEmotion) {
          return res.status(404).json({ message: 'Emotion not found' });
        }
    
        // Update the emotion properties based on the provided data
        existingEmotion.user_id = user_id;
        existingEmotion.emotion = emotion;
        existingEmotion.session_id = session_id;
    
        // Save the updated emotion to the database
        const updatedEmotion = await existingEmotion.save();
    
        res.status(200).json(updatedEmotion);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const deleteEmotion = async(req,res) => {
    const { id } = req.params;
    try {
        const emotion = await Emotion.findByIdAndDelete(id)
        if (!emotion) {
            return res.status(404).json({ message: 'Emotion not found' });
        }
    res.json({ message: 'Emotion deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = { getEmotions, postEmotion, getEmotion, updateEmotion, deleteEmotion }