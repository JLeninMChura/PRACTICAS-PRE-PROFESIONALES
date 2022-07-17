import {Router} from 'express'
const router = Router()

import * as practicasCtrl from '../controllers/practica.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], practicasCtrl.createpractica
);
router.get('/', practicasCtrl.getPracticas)

router.get("/:practicaId", practicasCtrl.getPracticaById)

router.put("/:practicaId", [authJwt.verifyToken, authJwt.isAdmin], practicasCtrl.updatePracticaById);
  
router.delete("/:practicaId", [authJwt.verifyToken, authJwt.isAdmin], practicasCtrl.deletePracticaById);
  

export default router;