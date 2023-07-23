const Session = require('../models/Session');
const User = require('../models/User');

const postSession = async (req, res) => {
    try {
        const { start_time, end_time, isOnline, user_id, camera_id } = req.body;
        // Create a new session based on the provided data, including the foreign keys user_id and camera_id
        const session = await Session.create({
          start_time,
          end_time,
          isOnline,
          user_id,
          camera_id
        });
    
        res.status(201).json(session);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const getSessions = async (req, res) => {
    try {
        const sessions = await Session.find()
        res.json(sessions)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

const getSession = async (req, res) => {
    try {
        const sessionId = req.params.id;
    
        // Find the session by its ID in the database
        const session = await Session.findById(sessionId);
    
        // Check if the session with the given ID exists
        if (!session) {
          return res.status(404).json({ message: 'Session not found.' });
        }
    
        // Return the session in the response
        res.json(session);
      } catch (error) {
        // Handle any errors that occurred during session retrieval
        res.status(500).json({ message: 'Error retrieving session.', error: error.message });
      }
}

const updateSession = async(req, res) => {
    try {
        const sessionId = req.params.id;
        // Find the session by its ID in the database
        const session = await Session.findById(sessionId);
    
        // Check if the session with the given ID exists
        if (!session) {
          return res.status(404).json({ message: 'Session not found.' });
        }
    
        // Update the session properties with the new values from the request body
        session.start_time = req.body.start_time;
        session.user_id = req.body.user_id;
        session.camera_id = req.body.camera_id;
        session.end_time = req.body.end_time;
        session.isOnline = req.body.isOnline;
    
        // Save the updated session to the database
        const updatedSession = await session.save();
    
        // Return the updated session in the response
        res.json(updatedSession);
      } catch (error) {
        // Handle any errors that occurred during session update
        res.status(500).json({ message: 'Error updating session.', error: error.message });
      }
}

const deleteSession = async (req,res) => {

        try {
            const sessionId = req.params.id;
        
            // Find the session by its ID and delete it from the database
            const deletedSession = await Session.findByIdAndDelete(sessionId);
        
            // Check if the session with the given ID exists
            if (!deletedSession) {
              return res.status(404).json({ message: 'Session not found.' });
            }
        
            // Return the deleted session in the response
            res.json("Session Deleted Successfully");
          } catch (error) {
            // Handle any errors that occurred during session deletion
            res.status(500).json({ message: 'Error deleting session.', error: error.message });
          }
}

module.exports = { postSession, getSessions, getSession, updateSession, deleteSession }