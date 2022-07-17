import {Router} from 'express'
const router = Router()

import * as documentosCtrl from '../controllers/documento.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], documentosCtrl.createDocumento
);
router.get('/', documentosCtrl.getDocumentos)

router.get("/:documentoId", documentosCtrl.getDocumentoById)

router.put("/:documentoId", [authJwt.verifyToken, authJwt.isAdmin], documentosCtrl.updateDocumentoById);
  
router.delete("/:documentoId", [authJwt.verifyToken, authJwt.isAdmin], documentosCtrl.deleteDocumentoById);
  

export default router;