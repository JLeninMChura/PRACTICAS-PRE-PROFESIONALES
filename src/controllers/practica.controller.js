import Practica from '../models/Practica'

export const createPractica = async (req, res) => {
    const { id_inicio_doc, dia, mes, anio,  h_entrada, h_salida} = req.body;

  try {
    const newPractica = new Practica({
        id_inicio_doc,
        f_inicio: {
          dia,
          mes,
          anio,
        },
        f_fin: {
          dia,
          mes,
          anio,
      },
        h_entrada,
        h_salida,
    });

    const practicaSaved = await newPractica.save();

    res.status(201).json(practicaSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getPracticas = async (req, res) => {
    const practicas = await Practica.find()
    res.json(practica)
};

export const getPracticaById = async (req, res) => {
    const { practicaId } = req.params;

    const practica = await Practica.findById(practicaId);
    res.status(200).json(practica);
};

export const updatePracticaById = async (req, res) => {
    const updatedPractica = await Practica.findByIdAndUpdate(
        req.params.practicaId,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedPractica);
};

export const deletePracticaById = async (req, res) => {
    const { practicaId } = req.params;

    await Practica.findByIdAndDelete(practicaId);

    // code 200 is ok too
    res.status(200).json();
};