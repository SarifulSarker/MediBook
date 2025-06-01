


/// api for adding doctor

const addDoctor = async(req, res) =>{
    try {
        const {
            name, email, password, speciality, degree,
            experience, about, fees, address
        } = req.body;
      const imageFile = req.file


    } catch (error) {
         console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export {addDoctor}