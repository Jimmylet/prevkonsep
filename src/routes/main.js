
import { Router } from "express";

let oRouter = new Router();

oRouter.get( "/", ( oRequest, oResponse ) => {
    oResponse.send( "Hi! This is a REST parrots API!" );
} );

export default oRouter;
