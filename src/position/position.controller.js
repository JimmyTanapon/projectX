import PosionService from "./position.service.js"


export const getPositionController = async (req, res, next) => {
  
    console.log("controller")
    const response = await new PosionService().getPosition()
    res.status(200).send(response);
    
};


