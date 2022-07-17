import Documento from '../models/Documento'

export const createDocumento = async (req, res) => {
    const {id_documento, } = req.body;

  try {
    const newDocumento = new Documento({
        nombre,
    });

    const documentoSaved = await newDocumento.save();

    res.status(201).json(documentoSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getDocumento = async (req, res) => {
    const documentos = await Documento.find()
    res.json(documentos)
};

export const getDocumentoById = async (req, res) => {
    const { documentoId } = req.params;

    const documento = await Documento.findById(documentoId);
    res.status(200).json(documento);
};

export const updateDocumentoById = async (req, res) => {
    const updatedDocumento = await Documento.findByIdAndUpdate(
        req.params.DocumentoId,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedDocumento);
};

export const deleteDocumentoById = async (req, res) => {
    const { documentoId } = req.params;

    await Documento.findByIdAndDelete(documentoId);

    // code 200 is ok too
    res.status(200).json();
};